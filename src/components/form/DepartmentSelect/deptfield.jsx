import './index.scss';

export const DepartmentSelect = ({ formData, onChange, errors }) => {
    return (
        <div className="form-group">
            <label htmlFor="department">Department</label>
            <select
                id="department"
                name="department"
                value={formData.department}
                onChange={onChange}
            >
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Engineering">Engineering</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Legal">Legal</option>
            </select>
            {errors.department && <p className="error-message">{errors.department}</p>}
        </div>
    );
};