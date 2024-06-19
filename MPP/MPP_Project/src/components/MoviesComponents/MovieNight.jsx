import React, { useContext, useEffect, useRef, useState } from "react";
import EntitiesContext from "../ContextComponent.jsx";
import { Autocomplete, TextField, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./expandingCards.css";

function MovieNight() {
    let navigate = useNavigate();
    const { users, fetchUsers, currentUsername } = useContext(EntitiesContext);
    const [usernames, setUsernames] = useState([""]);
    const [duplicateUsernameError, setDuplicateUsernameError] = useState(false);

    const panelsRef = useRef(null);

    if (currentUsername === "guest") {
        return (
            <Alert severity="warning" sx={{ margin: 3 }}>
                Please log in if you want to use this functionality.
            </Alert>
        );
    }

    if (!currentUsername) {
        navigate("/");
    }

    useEffect(() => {
        fetchUsers();
        if (panelsRef.current) {
            const panels = panelsRef.current.querySelectorAll(".panel");

            const handleClick = (panel) => {
                removeActiveClasses();
                panel.classList.add("active");
            };

            panels.forEach((panel) => {
                panel.addEventListener("click", () => handleClick(panel));
            });

            function removeActiveClasses() {
                panels.forEach((panel) => {
                    panel.classList.remove("active");
                });
            }

            // Clean up function
            return () => {
                panels.forEach((panel) => {
                    panel.removeEventListener("click", () =>
                        handleClick(panel),
                    );
                });
            };
        }
    }, []);

    const handleUsernameChange = (index) => (event, value) => {
        const newUsernames = [...usernames];
        if (!newUsernames.includes(value)) {
            newUsernames[index] = value;
            setUsernames(newUsernames);
            setDuplicateUsernameError(false); // reset the error state
        } else {
            // Handle the case when the username already exists.
            setDuplicateUsernameError(true); // set the error state to true
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

    const searchMoviesForGroup = () => {
        // Implement the logic to search for movies for the group.
        // This could be a redirect to a page showing the movies, etc.
        console.log(usernames);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    // marginTop: "40px",
                    // marginBottom: "10px",
                    flexWrap: "wrap",
                    marginLeft: "20px",
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
                {duplicateUsernameError && (
                    <Alert severity="error" sx={{ marginBottom: 2 }}>
                        Username already used.
                    </Alert>
                )}
                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => removeUsername()}
                    sx={{
                        maxHeight: 40,
                        maxWidth: 200,
                        marginBottom: 2,
                        backgroundColor: "#FFC1C1", // light red
                        color: "#900101", // text color
                        "&:hover": {
                            backgroundColor: "#FFA7A7", // darker shade of light red on hover
                        },
                    }}
                    size="small"
                >
                    Remove last user
                </Button>
                <Button
                    variant="outlined"
                    color="success"
                    sx={{
                        maxHeight: 40,
                        maxWidth: 200,
                        backgroundColor: "#90EE90", // light green
                        color: "#284909", // text color
                        "&:hover": {
                            backgroundColor: "#84d436", // darker shade of light green on hover
                        },
                    }}
                    onClick={addUsername}
                    size="small"
                >
                    Add another user
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        maxHeight: 40,
                        maxWidth: 200,
                        marginTop: 2,
                    }}
                    onClick={searchMoviesForGroup}
                    startIcon={<CloudUploadIcon />}
                    disabled={duplicateUsernameError || usernames.includes("")}
                >
                    Search Movies
                </Button>
            </div>
            <div>
                <div
                    ref={panelsRef}
                    className="expandingCards"
                    style={{ maxWidth: "1000px", margin: "20px" }}
                >
                    <div
                        className="panel active"
                        style={{
                            backgroundImage:
                                "url(https://image.tmdb.org/t/p/w500/aBkqu7EddWK7qmY4grL4I6edx2h.jpg)",
                        }}
                    >
                        <h3>The Fall Guy</h3>
                    </div>

                    <div
                        className="panel"
                        style={{
                            backgroundImage:
                                "url(https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg)",
                        }}
                    >
                        <h3>Kung Fu Panda 4</h3>
                    </div>
                    <div
                        className="panel"
                        style={{
                            backgroundImage:
                                "url('https://image.tmdb.org/t/p/w500/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg')",
                        }}
                    >
                        <h3>Bad Boys: Ride or Die</h3>
                    </div>

                    <div
                        className="panel"
                        style={{
                            backgroundImage:
                                "url('https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg')",
                        }}
                    >
                        <h3>Inside Out 2</h3>
                    </div>

                    <div
                        className="panel"
                        style={{
                            backgroundImage:
                                "url('https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg')",
                        }}
                    >
                        <h3>Fast X</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieNight;
