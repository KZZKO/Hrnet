import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PersonalFields } from '../PersonalFields/Persfield';
import { AddressFields } from '../AddressFields/adressfield';
import { DepartmentSelect } from '../DepartmentSelect/deptfield';
import { Button } from '../../ui/Button/button';
import './index.scss';

const initialFormData = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
};

export const EmployeeForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});

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

    const validateForm = () => {
        const trimmedData = {
            firstName: formData.firstName.trim(),
            lastName: formData.lastName.trim(),
            dateOfBirth: formData.dateOfBirth.trim(),
            startDate: formData.startDate.trim(),
            street: formData.street.trim(),
            city: formData.city.trim(),
            state: formData.state.trim(),
            zipCode: formData.zipCode.trim(),
            department: formData.department.trim(),
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

        if (!trimmedData.state) {
            newErrors.state = 'State is required.';
        }

        if (!/^\d{4,10}$/.test(trimmedData.zipCode)) {
            newErrors.zipCode = 'Zip code must contain only numbers.';
        }

        if (!trimmedData.department) {
            newErrors.department = 'Department is required.';
        }

        setErrors(newErrors);

        return {
            isValid: Object.keys(newErrors).length === 0,
            trimmedData,
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { isValid, trimmedData } = validateForm();

        if (!isValid) {
            return;
        }

        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        const updatedEmployees = [...employees, trimmedData];

        localStorage.setItem('employees', JSON.stringify(updatedEmployees));

        alert('Employee created!');

        setFormData(initialFormData);
        setErrors({});
    };

    return (
        <form className="employee-form" onSubmit={handleSubmit} noValidate>
            <div className="employee-form-header">
                <h2 className="employee-form-title">Create Employee</h2>

                <Button
                    type="button"
                    variant="primary"
                    icon="fa-solid fa-users"
                    onClick={() => navigate('/Employee')}
                ></Button>
            </div>

            <PersonalFields formData={formData} onChange={handleChange} errors={errors} />
            <AddressFields formData={formData} onChange={handleChange} errors={errors} />
            <DepartmentSelect formData={formData} onChange={handleChange} errors={errors} />

            <Button
                type="submit"
                variant="secondary"
                icon="fa-solid fa-arrow-right"
            >
                Save Employee
            </Button>
        </form>
    );
};