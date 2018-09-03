import LoginPage from '../views/LoginPage'
import MainPage from '../views/MainPage'

const indexRoutes = [
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/', name: "Main", component: MainPage}
]

export default indexRoutes;
