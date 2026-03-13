import { createContext, useReducer, useEffect } from 'react';

export const EmployeeContext = createContext();

const initialState = {
    employees: JSON.parse(localStorage.getItem('employees')) || [],
};

const employeeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                employees: [...state.employees, action.payload],
            };

        default:
            return state;
    }
};

export const EmployeeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(employeeReducer, initialState);

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(state.employees));
    }, [state.employees]);

    return (
        <EmployeeContext.Provider value={{ employees: state.employees, dispatch }}>
            {children}
        </EmployeeContext.Provider>
    );
};