import MarketingPage from '../components/marketing-page/MarketingPage';
import SignIn from '../components/sign-in/SignIn';
import SignUp from '../components/sign-up/SignUp';
import Dashboard from '../components/dashboard/Dashboard';

export const routes = [
  {
    path: '/',
    element: MarketingPage,
  },
  {
    path: '/signin',
    element: SignIn,
  },
  {
    path: '/signup',
    element: SignUp,
  },
  {
    path: '/dashboard',
    element: Dashboard,
  }
];