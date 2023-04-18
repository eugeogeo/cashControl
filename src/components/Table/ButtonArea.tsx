import { Box, Button, IconButton } from '@mui/material';
import ButtonPage from './ButtonPage';
import { NavigateBefore } from '@mui/icons-material';

type ButtonAreaProps = {
    currentPage: string;
    nextPage: string;
    nextNextPage?: string;
    previusPage: string;
};

const ButtonArea = ({ currentPage, nextPage, previusPage, nextNextPage=''}: ButtonAreaProps) => {
    const schemeButton = [
        {
            numberPage: '1',
            rote: '',
        },
        {
            numberPage: '2',
            rote: nextPage,
        },
        {
            numberPage: '3',
            rote: nextNextPage,
        }
    ];

    return(
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Button>
                <NavigateBefore />
            </Button>
            {
                schemeButton.map((current) => (
                    <ButtonPage
                        number={current.numberPage}
                        rote={current.rote}
                        isActive
                    />
                )
                )
            }
        </Box>
    );
};

export default ButtonArea;