import SignUpPage from "../views/SignUpPage";
import MainPage from "../views/MainPage";
import ProfileForm from "../components/ProfileForm";
import TestPage from "../views/TestPage";

const indexRoutes = [
  { path: "/signup", name: "SignUpPage", component: SignUpPage },
  { path: "/profile/edit", name: "ProfileForm", component: ProfileForm },
  { path: "/test", name: "TestPage", component: TestPage },
  { path: "/", name: "MainPage", component: MainPage }
];

export default indexRoutes;
