import { Box } from '@mui/material';
import CardTransaction from './CardTransaction';

const GroupTransactions = () => {

    return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent:'space-between',
                pt:'40px',
            }}
        >
            <CardTransaction/>
            <CardTransaction/>
            <CardTransaction/>
        </Box>
    );
};

export default GroupTransactions;