import { Box } from '@mui/material';
import CardTransaction from '../components/CardTransaction';
import Header from '../components/Header';

const Home = () => {

    return (
        <Box
            sx={{ 
                backgroundColor: '#202024',
                display: 'flex',
                justifyContent: 'center',
            }}>

      
            <Box
                sx={{ 
                    width: '80vw',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Header />
                <GroupTransactions />
                
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
            </Box>
        </Box>
    );
};

export default Home;