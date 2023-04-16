import { Box, Button, Typography } from '@mui/material';
import Logo from './../assets/icons/logo.png';
import CardTransaction from '../components/CardTransaction';

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
                {/* header */}
                <Box 
                    sx={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '5px'
                    }}
                >
                    <Box 
                        sx={{
                            display: 'flex', 
                            alignItems:'center',
                        }}
                    >
                        <img src={Logo} width={'53px'}/>
                        <Typography
                            variant="h4" 
                            component="h4" 
                            sx={{ color: '#ffffff', pl:'5px'}}
                        >
                        CashControl
                        </Typography>
                    </Box>
                    <Button 
                        color="primary"
                        variant='contained'
                    >
                  Nova Transação
                    </Button>
                </Box>
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