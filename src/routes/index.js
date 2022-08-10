// Layouts
import HeaderOnly from '~/components/Layout/HeaderOnly';

//
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public Routes for public url
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// Private Routes for private url, such as: it will redirect to /login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
