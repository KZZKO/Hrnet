import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../../../context/EmployeeContext';
import { PersonalFields } from '../PersonalFields/Persfield';
import { AddressFields } from '../AddressFields/adressfield';
import { DepartmentSelect } from '../DepartmentSelect/deptfield';
import { Button } from '../../ui/Button/button';
import KZModal from '../../plugins/modal/modal';
import './index.scss';

const initialFormData = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: 'AL',
    zipCode: '',
    department: 'Sales',
};

export const EmployeeForm = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(EmployeeContext);

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Met à jour la valeur du champ modifié et supprime son erreur si besoin
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: '',
        }));
    };

    // Vérifie les données du formulaire et prépare les valeurs nettoyées
    const validateForm = () => {

        const trimmedData = {
            firstName: formData.firstName.trim(),
            lastName: formData.lastName.trim(),
            dateOfBirth: formData.dateOfBirth.trim(),
            startDate: formData.startDate.trim(),
            street: formData.street.trim(),
            city: formData.city.trim(),
            state: formData.state,
            zipCode: formData.zipCode.trim(),
            department: formData.department,
        };

        const newErrors = {};

        if (trimmedData.firstName.length < 2) {
            newErrors.firstName = 'First name must contain at least 2 characters.';
        }

        if (trimmedData.lastName.length < 2) {
            newErrors.lastName = 'Last name must contain at least 2 characters.';
        }

        if (!trimmedData.dateOfBirth) {
            newErrors.dateOfBirth = 'Date of birth is required.';
        }

        if (!trimmedData.startDate) {
            newErrors.startDate = 'Start date is required.';
        }

        if (trimmedData.street.length < 3) {
            newErrors.street = 'Street must contain at least 3 characters.';
        }

        if (trimmedData.city.length < 2) {
            newErrors.city = 'City must contain at least 2 characters.';
        }

        if (!/^\d{4,10}$/.test(trimmedData.zipCode)) {
            newErrors.zipCode = 'Zip code must contain only numbers.';
        }

        // Met à jour le state des erreurs
        setErrors(newErrors);

        // Retourne le résultat de la validation et les données nettoyées
        return {
            isValid: Object.keys(newErrors).length === 0,
            trimmedData,
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Lance la validation du formulaire
        const { isValid, trimmedData } = validateForm();

        // Arrête l'envoi si le formulaire contient des erreurs
        if (!isValid) {
            return;
        }

        // Envoie l'action au reducer pour ajouter le nouvel employé
        dispatch({
            type: 'ADD_EMPLOYEE',
            payload: trimmedData,
        });

        // Ouvre la modal de confirmation
        setIsModalOpen(true);

        // Réinitialise les champs du formulaire
        setFormData(initialFormData);

        // Réinitialise les erreurs du formulaire
        setErrors({});
    };

    return (
        <>
            <form className="employee-form" onSubmit={handleSubmit} noValidate>
                <div className="employee-form-header">
                    <h2 className="employee-form-title">Create Employee</h2>

                    <Button
                        type="button"
                        variant="primary"
                        icon="fa-solid fa-users"
                        onClick={() => navigate('/Employee')}
                    />
                </div>
                <PersonalFields
                    formData={formData}
                    onChange={handleChange}
                    errors={errors}
                />
                <AddressFields
                    formData={formData}
                    onChange={handleChange}
                    errors={errors}
                />
                <DepartmentSelect
                    formData={formData}
                    onChange={handleChange}
                    errors={errors}
                />
                <Button
                    type="submit"
                    variant="secondary"
                    icon="fa-solid fa-arrow-right"
                >
                    Save Employee
                </Button>
            </form>
            <KZModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Employee created"
            >
                <p>The employee has been successfully created.</p>
            </KZModal>
        </>
    );
};