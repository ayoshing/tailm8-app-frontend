import SignUpPage from "../views/SignUpPage";
import MainPage from "../views/MainPage";
import ProfileForm from "../components/ProfileForm";

const indexRoutes = [
  { path: "/signup", name: "SignUpPage", component: SignUpPage },
  { path: "/profile", name: "ProfileForm", component: ProfileForm },
  { path: "/", name: "MainPage", component: MainPage }
];

export default indexRoutes;
