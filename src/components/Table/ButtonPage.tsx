import { Box, Button } from '@mui/material';

type ButtonPageProps = {
    rote: string;
    number: string;
    isActive?: boolean;
}
const ButtonPage = ({number, rote, isActive = false}: ButtonPageProps) => {

    return (
        <Box>
            <Button
                color={isActive ? 'primary' : 'secondary'}
                variant='contained'
                href={rote}
            >
                {number}
            </Button>
        </Box>
    );
};

export default ButtonPage;