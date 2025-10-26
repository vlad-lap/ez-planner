import { Category, Transaction } from '../models';

export const categories: Category[] = [
    { id: 1, name: 'Bills' },
    { id: 2, name: 'Transport' },
    { id: 3, name: 'Delivery & Eat Out' },
    { id: 4, name: 'Clothes' },
];

export const transactions: Transaction[] = [
    {
        id: 1,
        categoryId: 3,
        created_date: new Date(),
        amount: 100,
        description: 'Wolt',
    },
    {
        id: 2,
        categoryId: 2,
        created_date: new Date(),
        amount: 20,
        description: 'Uber',
    },
    {
        id: 3,
        categoryId: 1,
        created_date: new Date(),
        amount: 9.99,
        description: 'Apple',
    },
    {
        id: 4,
        categoryId: 4,
        created_date: new Date(),
        amount: 150,
        description: 'UNIQLO',
    },
];
