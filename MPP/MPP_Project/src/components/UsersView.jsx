import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import EntitiesContext from './ContextComponent.jsx';
import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Paper,
} from '@mui/material';

function UsersView() {
    const { users, fetchUsers, removeUser, currentUsername } =
        useContext(EntitiesContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUsername !== 'admin') {
            navigate('/');
        } else {
            fetchUsers();
        }
    }, []);

    return (
        <TableContainer
            component={Paper}
            sx={{
                borderRadius: 3,
                marginTop: 3,
                marginBottom: 10,
                backgroundColor: 'lightblue',
            }}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell>User ID</TableCell>
                        <TableCell>Nr Movies</TableCell>
                        <TableCell>Nr Characters</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.nrMovies}</TableCell>
                            <TableCell>{user.nrCharacters}</TableCell>
                            <TableCell>
                                <Button>Remove</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersView;
