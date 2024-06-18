import React, { useContext, useEffect, useState } from "react";
import EntitiesContext from "../ContextComponent.jsx";
import { Autocomplete, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MovieNight() {
    let navigate = useNavigate();
    // get the non admin users and display them
    const { users, fetchUsers, currentUsername } = useContext(EntitiesContext);
    const [usernames, setUsernames] = useState([""]);

    if (!currentUsername) {
        navigate("/");
    }

    // fetch the users on the first render
    useEffect(() => {
        fetchUsers();
    }, []);

    const handleUsernameChange = (index) => (event, value) => {
        const newUsernames = [...usernames];
        if (!newUsernames.includes(value)) {
            newUsernames[index] = value;
            setUsernames(newUsernames);
        } else {
            // Handle the case when the username already exists.
            // This could be showing an error message, etc.
            console.error("Username already used.");
        }
    };

    const addUsername = () => {
        setUsernames([...usernames, ""]);
    };

    const removeUsername = () => {
        const newUsernames = [...usernames];
        newUsernames.pop();
        setUsernames(newUsernames);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "40px",
                marginBottom: "10px",
                flexWrap: "wrap",
            }}
        >
            {usernames.map((username, index) => (
                <div
                    key={index}
                    style={{ display: "flex", alignItems: "center" }}
                >
                    <Autocomplete
                        disablePortal
                        id={`combo-box-demo-${index}`}
                        sx={{ width: 200, marginTop: 2, marginBottom: 2 }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                color="secondary"
                                inputProps={{
                                    ...params.inputProps,
                                }}
                            />
                        )}
                        options={users.map((user) => user.username)}
                        onChange={handleUsernameChange(index)}
                    />
                </div>
            ))}
            <Button
                variant="contained"
                color="error"
                onClick={() => removeUsername()}
                sx={{
                    maxHeight: 40,
                    maxWidth: 200,
                    marginBottom: 2,
                }}
            >
                Remove last user
            </Button>
            <Button
                variant="contained"
                color="success"
                sx={{
                    maxHeight: 40,
                    maxWidth: 200,
                }}
                onClick={addUsername}
            >
                Add another user
            </Button>
        </div>
    );
}

export default MovieNight;
