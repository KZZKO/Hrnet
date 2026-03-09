import { Header } from '../../components/layout/header/header';
import { PageCard } from '../../components/ui/PageCard/pagecard';
import { EmployeeForm } from '../../components/form/EmployeeForm/empform';
import { Footer } from '../../components/layout/footer/footer';
import './index.scss';

export const Index = () => {

    return (
        <>
            <Header />
            <main className="main-section">
                <PageCard>
                    <EmployeeForm />
                </PageCard>
            </main>
            <Footer />
        </>
    );
};