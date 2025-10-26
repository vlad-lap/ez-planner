import { Transaction } from '@/app/lib/models';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { format } from 'date-fns';
import { DATE_FORMAT_UI } from '@/app/lib/constants';

interface TransactionsInput {
    transactions: Transaction[];
    // categoriesDict: Record<string, number>;
}

export default function TransactionsTable({ transactions }: TransactionsInput) {
    return (
        <div>Transactions table works!</div>
        // <Paper>
        //     <TableContainer>
        //         <TableHead>
        //             <TableRow>
        //                 <TableCell>Date</TableCell>
        //                 <TableCell>Category</TableCell>
        //                 <TableCell>Amount</TableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {
        //                 transactions.map((transaction: CategorizedTransaction) => (
        //                     <TableRow key={transaction.id}>
        //                         <TableCell>{format(transaction.date, DATE_FORMAT)}</TableCell>
        //                         <TableCell>{transaction.}</TableCell>
        //                         <TableCell>Amount</TableCell>
        //                     </TableRow>
        //                 ))
        //             }
        //         </TableBody>
        //     </TableContainer>
        // </Paper>
    )
}