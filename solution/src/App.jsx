import './App.css';
import React, { useState } from "react";
import SearchBox from "./components/SearchBox";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DepartmentContainer from "./components/DepartmentContainer";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch, useSelector } from "react-redux";
import { organizationSelector, setAllEmployeesChecked } from "./store/appSlice";


const App = () => {
    const { organization } = useSelector(organizationSelector)
    const [searchCriteria, setSearchCriteria] = useState('');
    const [checked, setChecked] = useState(false);

    const dispatch = useDispatch();
    const selectAllEmployees = (e) => {
        setChecked(e.target.checked)
        dispatch(setAllEmployeesChecked(e.target.checked))
    };

    // useEffect(()=>{
    //     setChecked(!checked)
    // },[organization])

    return (
        <Grid container
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={ { p: 2 } }
              spacing={ { xs: 1, md: 3 } }
              columns={ { xs: 3, sm: 6, md: 10 } }>
            <Grid item xs={ 12 }>
                <Typography align="center" variant="h2" component="h2">
                    { organization.name }
                </Typography>
                <FormControlLabel
                    label="Select All Employees"
                    control={
                        <Checkbox
                            checked={ checked }
                            onChange={ selectAllEmployees }
                        />
                    }/>
            </Grid>
            <Grid alignItems="stretch" item xs={ 6 } md={ 6 }>
                <SearchBox onChange={ (e) => setSearchCriteria(e.target.value) }></SearchBox>
            </Grid>
            <Grid item alignItems="stretch" xs={ 6 } md={ 12 }>
                <DepartmentContainer searchCriteria={ searchCriteria }/>
            </Grid>
        </Grid>
    );
}

export default App;
