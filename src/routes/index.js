import MarketingPage from '../components/marketing-page/MarketingPage';
import SignIn from '../components/sign-in/SignIn';
import SignUp from '../components/sign-up/SignUp';

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
  }
];