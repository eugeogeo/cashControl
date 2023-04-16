import { Box, Button, TextField } from '@mui/material';
import Header from '../components/Header';
import GroupTransactions from '../components/GroupTransactions';
import SearchIcon from '../assets/icons/searchIcon.png';

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
                        paddingTop: '80px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <TextField 
                        label="Busque uma informação" 
                        variant='outlined' 
                        fullWidth
                        sx={{ backgroundColor: 'grey.900', color: '#fff', borderRadius: '5px'}}
                    />
                    <Button 
                        color="primary"
                        variant='outlined'
                        sx={{ marginLeft: '12px', gap:1, fontWeight: 'bold'}}
                    >
                        <img src={SearchIcon}  width={'20px'}/>
                      Buscar
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;