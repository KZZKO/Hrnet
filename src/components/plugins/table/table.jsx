import { useContext, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import { EmployeeContext } from '../../../context/EmployeeContext';
import './index.scss';

export const Table = () => {
    const { employees } = useContext(EmployeeContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const filteredEmployees = useMemo(() => {
        const normalizedSearch = searchTerm.toLowerCase().trim();

        if (!normalizedSearch) return employees;

        return employees.filter((employee) =>
            Object.values(employee).some((value) =>
                String(value).toLowerCase().includes(normalizedSearch)
            )
        );
    }, [employees, searchTerm]);

    const columns = [
        { name: 'First Name', selector: row => row.firstName, sortable: true, grow: 1.2 },
        { name: 'Last Name', selector: row => row.lastName, sortable: true, grow: 1.2 },
        { name: 'Start Date', selector: row => row.startDate, sortable: true },
        { name: 'Department', selector: row => row.department, sortable: true, grow: 1.2 },
        { name: 'Date of Birth', selector: row => row.dateOfBirth, sortable: true },
        { name: 'Street', selector: row => row.street, sortable: true, grow: 1.4 },
        { name: 'City', selector: row => row.city, sortable: true },
        { name: 'State', selector: row => row.state, sortable: true, width: '90px' },
        { name: 'Zip Code', selector: row => row.zipCode, sortable: true, width: '110px' },
    ];

    const customStyles = {
        table: {
            style: {
                backgroundColor: 'transparent',
            },
        },
        tableWrapper: {
            style: {
                display: 'block',
            },
        },
        headRow: {
            style: {
                minHeight: '56px',
                backgroundColor: '#f4f4f4',
                borderBottom: '1px solid #dddddd',
            },
        },
        headCells: {
            style: {
                fontSize: '14px',
                fontWeight: '700',
                color: '#2f2f2f',
                paddingLeft: '20px',
                paddingRight: '20px',
            },
        },
        rows: {
            style: {
                minHeight: '64px',
                backgroundColor: '#ffffff',
                borderBottom: '1px solid #eeeeee',
            },
            stripedStyle: {
                backgroundColor: '#fbfbfb',
            },
        },
        cells: {
            style: {
                fontSize: '14px',
                color: '#3b3b3b',
                paddingLeft: '20px',
                paddingRight: '20px',
            },
        },
        pagination: {
            style: {
                minHeight: '64px',
                backgroundColor: '#ffffff',
                borderTop: '1px solid #eeeeee',
                borderBottomLeftRadius: '18px',
                borderBottomRightRadius: '18px',
                justifyContent: 'space-between'
            },
            pageButtonsStyle: {
                borderRadius: '10px',
                height: '36px',
                width: '36px',
                padding: '8px',
                margin: '0 4px',
            },
        },
    };

    return (
        <div className="employee-table">
            <div className="employee-table__toolbar">
                <div className="employee-table__entries">
                    <span>Show</span>

                    <select
                        value={rowsPerPage}
                        onChange={(e) => setRowsPerPage(Number(e.target.value))}
                    >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                    </select>

                    <span>entries</span>
                </div>

                <div className="employee-table__search">
                    <label htmlFor="employee-search">Search:</label>

                    <input
                        id="employee-search"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search employees..."
                    />
                </div>
            </div>

            <div className="employee-table__container">
                <DataTable
                    columns={columns}
                    data={filteredEmployees}
                    pagination
                    paginationPerPage={rowsPerPage}
                    paginationRowsPerPageOptions={[10, 25, 50]}
                    paginationComponentOptions={{ noRowsPerPage: true }}
                    highlightOnHover
                    striped
                    responsive
                    customStyles={customStyles}
                    noDataComponent="No employee found."
                />
            </div>
        </div>
    );
};