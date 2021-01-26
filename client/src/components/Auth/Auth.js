import React from "react";
import {
    Avatar,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import Input from "./Input";
import useStyles from "./styles";

const Auth = () => {
    const classes = useStyles();
    const isSignup = false;

    const handleChange = () => {};

    const handleSubmit = () => {};

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant="h5">
                    {isSignup ? "Sign Up" : "Sign In"}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {signUp && (
                            <>
                                <Input
                                    name="firsName"
                                    label="First Name"
                                    handleChange={handleChange}
                                    autoFocus
                                />
                            </>
                        )}
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
