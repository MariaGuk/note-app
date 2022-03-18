const ROUTEPATHS = {
  myNotes: "/notes",
  about: "/about",
  sharedNotes: "/shared-notes",
  notFound: "*",
  login: "/login",
  signUp: "/sign-up",
};

const ROUTES = [
  {
    path: ROUTEPATHS.myNotes,
    component: "MyNotesContainer",
    title: "My Notes",
    isShown: true,
  },
  {
    path: ROUTEPATHS.about,
    component: "About",
    title: "About",
    isShown: true,
  },
  {
    path: ROUTEPATHS.sharedNotes,
    component: "SharedNotesContainer",
    title: "Shared Notes",
    isShown: true,
  },
  {
    path: ROUTEPATHS.notFound,
    component: "PageNotFoundContainer",
    title: "Page not found",
    isShown: false,
  },
  {
    path: ROUTEPATHS.login,
    component: "LoginContainer",
    title: "Login",
    isShown: false,
  },
  {
    path: ROUTEPATHS.signUp,
    component: "SignUpContainer",
    title: "SignUp",
    isShown: false,
  },
];

export { ROUTEPATHS, ROUTES };