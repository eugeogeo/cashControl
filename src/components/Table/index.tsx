import { Box } from '@mui/material';
import TableItem from './TableItem';
import ButtonArea from './ButtonArea';


const Table = () => {
    return (
        <Box>

            <Box
                sx={{ pt:'12px'}}
            >
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
            </Box>
            <ButtonArea />
        </Box>
    );
};

export default Table;