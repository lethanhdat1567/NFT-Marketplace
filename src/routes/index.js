import config from '~/config';
import Home from '~/pages/Home';
import Collection from '~/pages/Explore/Collection';
import Artwork from '~/pages/Explore/Artwork';
import AboutUs from '~/pages/AboutUs';
const publicRoutes = [
    { path: config.routes.home, element: Home },
    { path: config.routes.collection, element: Collection },
    { path: config.routes.artwork, element: Artwork },
    { path: config.routes.aboutUs, element: AboutUs },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
