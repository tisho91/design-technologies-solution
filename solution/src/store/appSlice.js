import { createSlice } from '@reduxjs/toolkit'

const data = require('../data.json')

const compareEmployees = (employee, department, name = '') => {
    return employee.department === department && employee.name.toLowerCase().includes(name.toLowerCase())
}


export const appSlice = createSlice({
    name: 'app',
    initialState: data,
    reducers: {
        updateSelectedDepartment: (state, action) => {
        },
        setAllEmployeesChecked: (state, action) => {
            state.organization.employees = state.organization.employees.map(employee => ({
                ...employee,
                checked: action.payload
            }))
            state.organization.departments = state.organization.departments.map(department => ({
                ...department,
                checked: action.payload
            }))
        },
        setEmployeesChecked: (state, action) => {
            const result = state.organization.employees.map(employee => {
                return {
                    ...employee,
                    checked: compareEmployees(employee, action.payload.department, action.payload.name) ? action.payload.checked : !!employee.checked
                }
            })
            state.organization.employees = result
        }
    },
})

export const organizationSelector = (state) => state.app;

export const selectEmployees = ({ searchCriteria, departmentId }) =>
    (state) => {
        const filtered = state.app?.organization?.employees.filter(employee => employee.name.toLowerCase().includes(searchCriteria));
        return filtered.filter(employee => employee.department?.toString() === departmentId?.toString())
    }
export const isCheckedEmployee = (employee) =>
    (state) => {
        return (state.app.organization.employees.find(emp => employee.name === emp.name && emp.department === employee.department)).checked
    }

export const getSelectedDepartment = state => {
    return state
}
const { actions } = appSlice;
export const { setAllEmployeesChecked, setEmployeesChecked } = actions

export default appSlice.reducer

