import Home from './components/Home'
import Form from './components/Form'
export const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/form/new',
      name: 'newNote',
      component: Form
    }
];