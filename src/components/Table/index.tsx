import { Box } from '@mui/material';
import TableItem from './TableItem';


const Table = () => {
    return (
        <Box
            sx={{ pt:'12px'}}
        >
            <TableItem />
            <TableItem />
            <TableItem />
            <TableItem />
        </Box>
    );
};

export default Table;