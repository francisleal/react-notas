import Anotacoes from '../pages/Anotacoes';
import Links from '../pages/Links';
import Senhas from '../pages/Senhas';
import Base64 from '../pages/Base64';
import Login from '../pages/Login';

const routesConfig = [
    {
        path: '/',
        componente: Anotacoes,
        exact: true
    },
    {
        path: '/anotacoes',
        component: Anotacoes,
        exact: true
    },
    {
        path: '/links',
        component: Links,
        exact: true
    },
    {
        path: '/senhas',
        component: Senhas,
        exact: true
    },
    {
        path: '/base64',
        component: Base64,
        exact: true
    },
    {
        path: '/login',
        component: Login,
        exact: true
    },
]

export default routesConfig;