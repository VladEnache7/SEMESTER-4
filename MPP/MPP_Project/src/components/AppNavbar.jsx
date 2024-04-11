import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

import MovieFilterRoundedIcon from '@mui/icons-material/MovieFilterRounded';

function AppNavbar() {
    let navigate = useNavigate();

    const linkStyle = {
        color: 'black',
        textDecoration: 'none',
        //     center vertically
    };
    return (
        <>
            <AppBar
                position="sticky"
                sx={{
                    border: 2,
                    borderRadius: 5,
                    borderColor: 'secondary.main',
                }}
            >
                {/*    <Container maxWidth="xl">*/}
                <Toolbar>
                    <Box sx={{ display: { md: 'flex' } }}>
                        <MovieFilterRoundedIcon
                            sx={{
                                color: 'secondary',
                                fontSize: 40,
                                marginRight: 2,
                                alignSelf: 'center',
                            }}
                        />
                        <Typography
                            variant="h6"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                color: '#7e25ae',
                                textDecoration: 'none',
                                alignSelf: 'center',
                            }}
                        >
                            Disney Movies
                        </Typography>
                        <Button
                            size={'large'}
                            onClick={() => navigate('/')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            data-testid="home-link"
                        >
                            Home
                        </Button>
                        <Button
                            size={'large'}
                            onClick={() => navigate('/movies/add')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            data-testid="add-movie-link"
                        >
                            Add Movie
                        </Button>
                        <Button
                            size={'large'}
                            onClick={() => navigate('/movies/chart')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            data-testid="chart-link"
                        >
                            Chart
                        </Button>
                        <Button
                            size={'large'}
                            onClick={() => navigate('/movies/generate')}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            data-testid="generate-link"
                        >
                            Generate
                        </Button>
                    </Box>
                </Toolbar>
                {/*    </Container>*/}
            </AppBar>
        </>
    );
}

export default AppNavbar;
