import React, { useEffect, useState } from 'react';
import Grid from "@mui/material/Grid";
import EmployeeItem from "./EmployeeItem";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { selectEmployees, setEmployeesChecked } from "../store/appSlice";

const EmployeesList = ({ department, searchCriteria }) => {
    const [isChecked, setIsChecked] = useState(!!department.checked);
    const dispatch = useDispatch();

    const setChecked = (e) => {
        setIsChecked(e.target.checked);
        dispatch(setEmployeesChecked({ department: department.id, checked: e.target.checked }))
    }

    useEffect(() => {
        setIsChecked(!!department.checked)
    }, [department])

    const employees = useSelector(selectEmployees({ searchCriteria, departmentId: department.id }))
    return (
        <>
            {
                employees?.length ?
                    <Grid item xs={ 1 } md={ 3 }>
                        <Typography sx={ { m: 2 } } variant="h5" component="h2">
                            { department.name }&nbsp; &nbsp;
                            { department.name ? <Checkbox
                                checked={ isChecked }
                                onChange={ setChecked }
                                sx={ { p: 0 } }
                                size='small'
                            /> : null }
                        </Typography>

                        {
                            employees.map((employee, index) => {
                                return (
                                    <EmployeeItem employee={ employee } key={ index }/>
                                )
                            })
                        }
                    </Grid> : null
            }
        </>
    );
};

export default EmployeesList;
