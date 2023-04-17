import { Box, Typography } from '@mui/material';

const TableItem = () => {
    return(
        <Box 
            sx={{ 
                backgroundColor:'grey.800',
                display: 'flex',
                p: '20px',
                margin: '4px 0px',
            }}
        >
            <Box sx={{ width:'40vw'}}>

                <Typography
                    variant="body1" 
                    component="h4" 
                    sx={{ color: '#ffffff', pl:'5px'}}
                >
              Desenvolvimento de site
                </Typography>
            </Box>
            <Box sx={{ width:'20vw'}}>

                <Typography
                    variant="body1" 
                    component="h4" 
                    sx={{ color: '#ffffff', pl:'5px'}}
                >
              R$ 10 000
                </Typography>
            </Box>
            <Box sx={{ width:'20vw'}}>

                <Typography
                    variant="body1" 
                    component="h4" 
                    sx={{ color: '#ffffff', pl:'5px'}}
                >
                  Venda
                </Typography>
            </Box>
            <Box sx={{ width:'10vw', justifyContent: 'end',}}>
                <Typography
                    variant="body1" 
                    component="h4" 
                    sx={{ color: '#ffffff', pl:'5px'}}
                >
                  17/04/2023
                </Typography>
            </Box>

        </Box>
    );
};

export default TableItem;