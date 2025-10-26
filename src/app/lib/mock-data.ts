import { Transaction } from './models';

export const mockData: Transaction[] = [
    {
        date: new Date(),
        amount: 100,
        description: 'Wolt',
        category: 'Delivery & Eat Out',
    },
    {
        date: new Date(),
        amount: 20,
        description: 'Uber',
        category: 'Transport',
    },
    {
        date: new Date(),
        amount: 9.99,
        description: 'Apple',
        category: 'Bills',
    },
    {
        date: new Date(),
        amount: 9.99,
        description: 'UNIQLO',
        category: 'Clothes',
    },
];
