import { states } from '../../../data/data';
import './index.scss';

export const AddressFields = ({ formData, onChange, errors }) => {
    return (
        <div className="address-fields">
            <div className="address-fields__legend">
                <i className="fa-solid fa-location-dot"></i>
                <span>Address</span>
            </div>

            <div className="address-fields__street">
                <label htmlFor="street">Street</label>
                <input
                    id="street"
                    name="street"
                    type="text"
                    placeholder="Enter Street Address"
                    value={formData.street}
                    onChange={onChange}
                />
                {errors.street && <p className="error-message">{errors.street}</p>}
            </div>

            <div className="address-fields__grid">
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Enter City"
                        value={formData.city}
                        onChange={onChange}
                    />
                    {errors.city && <p className="error-message">{errors.city}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={onChange}
                    >
                        {states.map((state) => (
                            <option key={state.abbreviation} value={state.abbreviation}>
                                {state.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group form-group--half">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                        id="zipCode"
                        name="zipCode"
                        type="text"
                        placeholder="Enter Zip Code"
                        value={formData.zipCode}
                        onChange={onChange}
                    />
                    {errors.zipCode && <p className="error-message">{errors.zipCode}</p>}
                </div>
            </div>
        </div>
    );
};