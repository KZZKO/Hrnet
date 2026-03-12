import { Header } from '../../components/layout/header/header';
import { PageCard } from '../../components/ui/PageCard/pagecard';
import { Footer } from '../../components/layout/footer/footer';
import './index.scss';

export const Employee = () => {

    return (
        <>
            <Header />
            <main className="main-section">
                <PageCard>
                    <p>Test</p>
                </PageCard>
            </main>
            <Footer />
        </>
    );
};