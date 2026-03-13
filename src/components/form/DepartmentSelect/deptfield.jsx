import './index.scss';

export const DepartmentSelect = ({ formData, onChange }) => {
    return (
        <div className="dept-group">
            <label htmlFor="department"><i className="fa-solid fa-briefcase"></i> Department</label>
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
        </div>
    );
};