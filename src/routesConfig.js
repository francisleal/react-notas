import Home from './pages//Home';
import Anotacoes from './pages/Anotacoes';
import Links from './pages//Links';
import Senhas from './pages//Senhas';

const routesConfig = [
    {
        path: '/',
        componente: Home,
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
    }
]

export default routesConfig;