import React, { useEffect, useState } from 'react';
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import { setEmployeesChecked } from "../store/appSlice";

const EmployeeItem = ({ employee }) => {
    const dispatch = useDispatch()
    const [checkedInput, setCheckedInput] = useState(!!employee.checked)

    const setCheckboxValue = (e) => {
        setCheckedInput(e.target.checked)
        dispatch(setEmployeesChecked({
            department: employee.department,
            name: employee.name,
            checked: e.target.checked
        }))
    }

    useEffect(() => {
        setCheckedInput(!!employee.checked)
    }, [employee])


    return (
        <Card sx={ { m: 2, backgroundColor: '#f6f6f6' } }>
            <Checkbox
                size='small'
                checked={ checkedInput }
                onChange={ setCheckboxValue }
                inputProps={ { 'aria-label': 'controlled' } }
                sx={ { float: 'right' } }
            />
            <CardHeader avatar={
                <Avatar
                    sx={ { width: 56, height: 56 } }
                    src={ employee.avatar }
                />
            }
                        title={
                            <Typography variant="subtitle1" component="h2">
                                { employee.name }
                            </Typography> }>
            </CardHeader>
        </Card>
    );
};

export default EmployeeItem;
