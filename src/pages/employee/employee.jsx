import { Header } from '../../components/layout/header/header';
import { PageCard } from '../../components/ui/PageCard/pagecard';
import { Table } from '../../components/plugins/table/table';
import { Footer } from '../../components/layout/footer/footer';
import logo from '../../assets/images/logo/Logo.png';
import './index.scss';

export const Employee = () => {
    return (
        <>
            <Header />
            <main className="main-section">
                <PageCard>
                    <div className='emp-section'>
                        <div className="employee-logo">
                            <img src={logo} alt="HRNet logo" />
                        </div>
                        <div className="table-group">
                            <h2 className="employee-table-title">Current Employees</h2>
                            <Table />
                        </div>
                    </div>
                </PageCard>
            </main>
            <Footer />
        </>
    );
};