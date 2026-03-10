import "./index.scss";

export const PersonalFields = ({ formData, onChange, errors }) => {
    return (
        <div className="form-section">
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter First Name"
                    maxLength={15}
                    value={formData.firstName}
                    onChange={onChange}
                />
                {errors.firstName && <p className="error-message">{errors.firstName}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter Last Name"
                    maxLength={15}
                    value={formData.lastName}
                    onChange={onChange}
                />
                {errors.lastName && <p className="error-message">{errors.lastName}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    placeholder="Select Date"
                    value={formData.dateOfBirth}
                    onChange={onChange}
                />
                {errors.dateOfBirth && <p className="error-message">{errors.dateOfBirth}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    placeholder="Select Date"
                    value={formData.startDate}
                    onChange={onChange}
                />
                {errors.startDate && <p className="error-message">{errors.startDate}</p>}
            </div>
        </div>
    );
};