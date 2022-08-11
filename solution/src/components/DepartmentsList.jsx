import React from 'react';
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import EmployeesList from "./EmployeesList";

const DepartmentsList = ({ selectedDepartment, searchCriteria }) => {
    const departments = useSelector((state) => state.app.organization.departments)


    const getDepartmentMarkup = (department) => {
        return (
            <EmployeesList key={ department.id } searchCriteria={ searchCriteria } department={ department }/>
        )
    }
    const renderDepartment = () => {
        if (selectedDepartment.id) {
            return getDepartmentMarkup(selectedDepartment)
        } else {
            return [
                getDepartmentMarkup({ name: '', id: null }),
                ...departments.map((department) => getDepartmentMarkup(department))
            ]
        }
    }
    return (
        <Grid
            container
            direction="row"
            alignItems="left"
            spacing={ { xs: 1, md: 3 } }
            columns={ { xs: 1, sm: 2, md: 6 } }
        >
            {
                renderDepartment()
            }
        </Grid>
    );
};

export default DepartmentsList;
