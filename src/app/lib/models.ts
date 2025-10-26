export interface Transaction {
    id: number;
    categoryId: number;
    created_date: Date;
    amount: number;
    description: string;
}

export interface Category {
    id: number;
    name: string;
}

export interface DescriptionByCategory {
    categoryId: number;
    description: string;
}


