import Home from './src/components/Home.js';
import Posts from './src/components/Posts.js';
import PostForm from './src/components/PostForm.js';
 const routes = {
    path: '/',
    exact: true,
    component: Home,
	indexRoute: {
        exact: true,
		component: Home.default
	},
    childRoutes:[
    {
        path: 'form',
        component: Posts
    },
    {
        path: 'posts',
        component: PostForm
    },
]};
export default routes;
