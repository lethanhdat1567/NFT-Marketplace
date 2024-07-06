import config from '~/config';
import Home from '~/pages/Home';
import Collection from '~/pages/Explore/Collection';
import Artwork from '~/pages/Explore/Artwork';
import AboutUs from '~/pages/AboutUs';
import Artists from '~/pages/Community/Artists';
import Editorial from '~/pages/Community/Editorial';
import FAQs from '~/pages/Community/FAQs';
const publicRoutes = [
    { path: config.routes.home, element: Home },
    { path: config.routes.collection, element: Collection },
    { path: config.routes.artwork, element: Artwork },
    { path: config.routes.aboutUs, element: AboutUs },
    { path: config.routes.Artists, element: Artists },
    { path: config.routes.Editor, element: Editorial },
    { path: config.routes.FAQs, element: FAQs },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
