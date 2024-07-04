import { faFacebookF, faInstagram, faSquareFacebook, faThreads } from '@fortawesome/free-brands-svg-icons';
import { Header, Footer } from '~/templates';

function DefaultLayout({ children }) {
    const icons = {
        facebook: faSquareFacebook,
        instagram: faInstagram,
        threads: faThreads,
    };
    return (
        <div className="wrapper">
            <Header />
            {children}
            <Footer icons={icons} />
        </div>
    );
}

export default DefaultLayout;
