import postgres from 'postgres';
import { categories, transactions, DEV_USER_ID } from '../../lib/mocks';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function createTransactions() {
    await sql`
        CREATE TABLE IF NOT EXISTS transactions(
            id INT PRIMARY KEY,
            user_id INT NOT NULL,
            created_date DATE NOT NULL,
            description VARCHAR(255) NOT NULL,
            amount MONEY NOT NULL
        );
    `

    await Promise.all(
        transactions.map(({ id, created_date, description, amount }) => sql`
            INSERT INTO transactions (id, user_id, created_date, description, amount)
            VALUES (${id}, ${DEV_USER_ID}, ${created_date}, ${description}, ${amount})
            ON CONFLICT (id) DO NOTHING;
        `)
    )
}

async function createCategories() {
    await sql`
        CREATE TABLE IF NOT EXISTS categories(
            id INT PRIMARY KEY,
            user_id INT NOT NULL,
            name VARCHAR(255) NOT NULL
        );
    `

    await Promise.all(
        categories.map(({ id, name }) => sql`
            INSERT INTO categories (id, user_id, name)
            VALUES (${id}, ${DEV_USER_ID}, ${name})
            ON CONFLICT (id) DO NOTHING;
        `)
    )
}

export async function GET() {
    try {
        await sql.begin(() => [
            createTransactions(),
            createCategories(),
        ]);

        return Response.json({ message: 'Database created successfully' });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
