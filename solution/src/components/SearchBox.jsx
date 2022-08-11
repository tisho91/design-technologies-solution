import React from 'react';
import TextField from "@mui/material/TextField";

const SearchBox = (props) => {
    return (
        <TextField fullWidth label="Search" id="fullWidth" onChange={ props.onChange } placeholder='Search'/>
    );
};

export default SearchBox;
