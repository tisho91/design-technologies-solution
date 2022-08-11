import React, {  useState } from 'react';
import DepartmentsDropdown from "./DepartmentsDropdown";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import DepartmentsList from "./DepartmentsList";

const DepartmentContainer = ({ searchCriteria }) => {
    const departments = useSelector((state) => state.app.organization.departments)
    const [selectedDepartment, setSelectedDepartment] = useState({ name: '', id: '' });

    const changeSelectedDepartment = (e, obj) => {
        setSelectedDepartment({
            id: obj.props.value,
            name: obj.props.children
        })

    }
    return (
        <>
            <Grid item xs={ 12 } md={ 12 }>
                <DepartmentsDropdown selectedDepartment={ selectedDepartment.id } onChange={ changeSelectedDepartment }
                                     departments={ departments }/>
            </Grid>
            <DepartmentsList  searchCriteria={ searchCriteria } selectedDepartment={ selectedDepartment }/>
        </>
    );
};

export default DepartmentContainer;
