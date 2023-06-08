import styled from '@emotion/styled';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
//useNavigate is used to navigate to other pages
//useNavigate is used in place of useHistory
//useNavigate is used in place of useLocation
//useNavigate is used in place of useParams
import { useNavigate } from 'react-router-dom';

const Container = styled("div")(() => ({
    padding: "15px 12px",
}));

const Home = () => {
    //useNavigate is used to navigate to other pages
    //useNavigate is used in place of useHistory
    //useNavigate is used in place of useLocation
    //useNavigate is used in place of useParams
    const navigate = useNavigate();
    
    //rows for table
    function createData(name, email, phone) {
        return { name, email, phone };
    }
    //dummy data
    const rows = [  
        createData('John', 'john@gmail.com', '1234567890'), 
        createData('Alex', 'alex@gmail.com', '1234567890'),
        createData('Bob', 'bob@gmail.com', '1234567890'),
        createData('Mike', 'mike@gmail.com', '1234567890'), 
        createData('Adam', 'adam@gmail.com', '1234567890'),
    ];

    //upadate user function for update user button click event values is the data of specific user store state object and navigate to update user page and set specific user id in url

    const updateUser = (values) => {
        //navigate to update user page
        navigate("/UpdateUser", {
            //set data in update user page using state object
            //state object contains data of specific user
            //state object contains key value pair
            //key is the name of the field in form
            //value is the value of the field in form
            state: {
                name: values.name,
                email: values.email,
                phone: values.phone,
            },
        });
    };

  return (
    <Container>
        <div
        //style for add user button
        style={{
            display: "flex",
            justifyContent: "Center",
            marginBottom: "30px",
        }}
        >
            <Button
            variant="contained"
            color="primary"
            //set onclick event
            onClick={() => {
                //navigate to add user page on click using navigate function
                //navigate function is imported from react-router-dom
                //navigate function takes path as argument
                //path is the path of the page to navigate
                //path is defined in App.js
                navigate("/AddUser");
            }}
            >
            Add User
            </Button>
        </div>
        {/* //mui table for crud operations */}
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    {row.name}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    <TableCell align="right">
                        <Button
                        variant="contained"
                        color="primary"
                        //set onclick event
                        onClick={() => {
                            //navigate to edit user page on click using navigate function
                            //navigate function is imported from react-router-dom
                            //navigate function takes path as argument
                            //path is the path of the page to navigate
                            //path is defined in App.js
                            //navigate page with id
                            // navigate(`/UpdateUser/${row.name}`);
                            updateUser(row);

                        }}
                        >
                        Edit
                        </Button>
                        <Button
                        variant="contained"
                        color="secondary"
                        >
                        Delete
                        </Button>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    </Container>
  )
}

export default Home;