import { Box, Button, Typography } from '@mui/material';
import Logo from './../assets/icons/logo.png';

const Header = () =>{
    return(
        <Box 
            sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '40px'
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
    );
};

export default Header;