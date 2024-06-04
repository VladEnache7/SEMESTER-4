﻿import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import EntitiesContext from "../ContextComponent.jsx";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Disney Movies
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function LoginSide() {
    const { login, setCurrentUsername } = useContext(EntitiesContext);
    let navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            username: data.get("username"),
            password: data.get("password"),
        });
        let response = await login(data.get("username"), data.get("password"));
        console.log(response);
        if (response) {
            navigate("/movies");
        } else {
            alert("Invalid username or password");
        }
    };

    const handleGuest = async (event) => {
        event.preventDefault();
        setCurrentUsername("guest");
        navigate("/movies");
    };

    useEffect(() => {
        setCurrentUsername();
    }, []);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            // 'url(https://source.unsplash.com/random?wallpapers)',
                            "url(src/components/LoginRegister/joshua-hibbert-Pn6iimgM-wo-unsplash.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleLogin}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                data-testid="username-input"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                data-testid="password-input"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => {}}
                                data-testid="submit-button"
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link onClick={() => navigate("/register")}>
                                        {"Don't have an account? Register"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Button
                                fullWidth
                                variant="contained"
                                color="secondary"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleGuest}
                                data-testid="guest-button"
                            >
                                Visit as Guest
                            </Button>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
