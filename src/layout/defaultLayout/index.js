import { Header, Footer } from '~/templates';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
