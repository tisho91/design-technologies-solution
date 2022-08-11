import React from 'react';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const DepartmentsDropdown = ({ onChange, departments, selectedDepartment }) => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <FormControl  fullWidth>
            <InputLabel id="department-label">Department</InputLabel>
            <Select
                labelId="department-label"
                id="demo-controlled-open-select"
                open={ open }
                onClose={ handleClose }
                onOpen={ handleOpen }
                value={ selectedDepartment }
                label="Departments"
                onChange={ onChange }
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {
                    departments.map(department => {
                        return (
                            <MenuItem key={ department.id } value={ department.id }>{ department.name }</MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    );
};

export default DepartmentsDropdown;
