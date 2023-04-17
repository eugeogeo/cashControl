import { Box, Button, TextField } from '@mui/material';
import Header from '../components/Header';
import GroupTransactions from '../components/GroupTransactions';
import SearchIcon from '../assets/icons/searchIcon.png';
import { useState } from 'react';
import { DataTransactions, GetTransactions } from '../@types/api';
import { getTransactions } from '../services/api';
import { Controller, useForm } from 'react-hook-form';
import Table from '../components/Table';

const Home = () => {
    const { control, handleSubmit, watch } = useForm({
        defaultValues: {
            search: '',
            limit: 0,
            page: 0,
        },
    });
    const [page, setPage] = useState(0);
    const [data, setData] = useState<DataTransactions>({
        transactionsCount: 0,
        transactionsList: [],
    });

    const SearchTransactions = async ({ search }: GetTransactions) => {
        const response = await getTransactions({
            search: search,
            page: page,
            limit: 10,
        });
        setData(response);
    };

    return (
        <Box
            sx={{
                backgroundColor: '#202024',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
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
                    component="form"
                    onSubmit={handleSubmit(SearchTransactions)}
                    sx={{
                        paddingTop: '80px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Controller
                        control={control}
                        name="search"
                        render={({ field }) => (
                            <TextField
                                label="Busque uma informação"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    backgroundColor: 'grey.900',
                                    color: '#fff',
                                    borderRadius: '5px',
                                }}
                                {...field}
                            />
                        )}
                    />
                    <Button
                        color="primary"
                        variant="outlined"
                        type="submit"
                        sx={{ marginLeft: '12px', gap: 1, fontWeight: 'bold' }}
                    >
                        <img src={SearchIcon} width={'20px'} />
            Buscar
                    </Button>
                </Box>

                <Table />
            </Box>
        </Box>
    );
};

export default Home;
