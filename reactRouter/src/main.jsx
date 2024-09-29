import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Layout from "./Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Github, { githubInfoLoader } from "./components/github/Github.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "github",
        element: <Github></Github>,
        loader: githubInfoLoader,
      },
    ],
  },
]);
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout></Layout>}>
//       <Route path="" element={<Home></Home>}></Route>
//       <Route path="about" element={<About></About>}></Route>
//       <Route path="contact" element={<Contact></Contact>}></Route>
//       <Route path="user/:userid" element={<User></User>}></Route>
//       <Route
//         path="github"
//         element={<Github></Github>}
//         loader={githubInfoLoader}></Route>
//     </Route>
//   )
// );
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
