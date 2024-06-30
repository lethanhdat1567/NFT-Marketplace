import config from '~/config';
import Home from '~/pages/Home';
import Explore from '~/pages/Explore/Explore';
const publicRoutes = [
    { path: config.routes.home, element: Home },
    { path: config.routes.explor, element: Explore },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
