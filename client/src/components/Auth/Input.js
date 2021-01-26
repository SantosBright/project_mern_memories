import React from "react";
import { Grid, TextField, InputAdornment, IconButton } from "@material-ui/core";
import { VisibilityOff } from "@material-ui/icons";

const Input = ({
    name,
    label,
    half,
    type,
    autoFocus,
    handleChange,
    handleShowPassword,
}) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                type={type}
                label={label}
                variant="outlined"
                required
                fullWidth
                onChange={handleChange}
                autoFocus={autoFocus}
                InputProps={
                    name === "password" && {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword}>
                                    {type === "password" ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }
                }
            />
        </Grid>
    );
};

export default Input;
