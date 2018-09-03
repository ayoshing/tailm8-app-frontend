import SignUpPage from '../views/SignUpPage'
import MainPage from '../views/MainPage'

const indexRoutes = [
  { path: '/signup', name: 'SignUpPage', component: SignUpPage },
  { path: '/', name: "MainPage", component: MainPage},
]

export default indexRoutes;
