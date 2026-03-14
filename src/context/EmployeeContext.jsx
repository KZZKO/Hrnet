import { createContext, useReducer, useEffect } from 'react';

// Création du contexte qui permettra de partager les employés dans toute l'application
export const EmployeeContext = createContext();

// État initial : récupère les employés depuis le localStorage ou initialise un tableau vide
const initialState = {
    employees: JSON.parse(localStorage.getItem('employees')) || [],
};

// Reducer qui modifie le state selon le type d'action reçue
const employeeReducer = (state, action) => {
    switch (action.type) {

        // Ajoute un nouvel employé dans la liste des employés
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                employees: [...state.employees, action.payload],
            };

        // Si l'action n'est pas reconnue, retourne simplement le state actuel
        default:
            return state;
    }
};

// Provider qui entoure l'application et donne accès au contexte
export const EmployeeProvider = ({ children }) => {

    // Initialise le reducer avec l'état initial
    const [state, dispatch] = useReducer(employeeReducer, initialState);

    // Sauvegarde les employés dans le localStorage à chaque modification
    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(state.employees));
    }, [state.employees]);

    // Rend les employés et dispatch accessibles à tous les composants enfants
    return (
        <EmployeeContext.Provider value={{ employees: state.employees, dispatch }}>
            {children}
        </EmployeeContext.Provider>
    );
};