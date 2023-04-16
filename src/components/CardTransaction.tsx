import { Box, Typography } from '@mui/material';
import InIcon from './../assets/icons/entradaIcon.png';

const CardTransaction = () => {

    return(
        <Box sx={{ 
            width:'336px', 
            height: '130px',
            backgroundColor: 'grey.800',
            borderRadius: '5px',
            padding: '24px 32px',
            gap: '12px'
        }}
        >
            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems:'center',
                }}>

                <Typography
                    variant="body2" 
                    component="h2" 
                    sx={{ color: 'grey.100'}}
                >
          Entrada
                </Typography>
                <img src={InIcon} width={'32px'}/>
            </Box>
            <Box sx={{pt:'12px'}}>
                <Typography
                    variant="h5" 
                    component="h5" 
                    sx={{ color: 'grey.100'}}
                >
          R$ X XXX,XX
                </Typography>
            </Box>
        </Box>

    );
};

export default CardTransaction;