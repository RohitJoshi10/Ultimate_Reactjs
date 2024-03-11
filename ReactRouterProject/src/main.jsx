import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github, { githubInfoLoader } from "./components/Github/Github";

// One way of doing
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// Another way of doing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// I want ki mere header and footer same rhe and bas uske ander k component chnage ho.
// So, one way of doing this is to import header and footer component in every component where we want to show header and footer along with that component.
// But the optimized way to do this is to use outlet provided by react-router.
// We have made a file name layout in the source folder.
// Ye Outlet kya krta hai ki iss layout ko as a base use kr lega and iske ander jo bhi cheez ayegi uske upper ka and niche ka same rakhega.
// <Header />
// <Outlet />
// <Footer />
// yaha phr header same rhega footer same rahega bs uske ander ki cheeze change hogi.

// <Header />
// <Footer />
// <Outlet />
// Isme top ki 2 cheeze same rhegi

// Kisi bhi route ko hum self closing kr skte hai.

// URL se parameter lene ka jitna bhi kaam hai wo hum sabse phele yaha krte hai apne route mai.
// Kyuki parameter hume lia hai yaha pe userid naame se so automatically so jo bhi component yaha pe render ho raha hai in this case User component render ho raha hai.
//  <Route path="user/:userid" element={<User />} />;
// So, hume iss userid ka access mil jayega User component k ander.
// Ye route mai Loader hume ye help krta hai ki koi bhi agr data humko fetch krna hai kisi API se ya fir database se toh hum direct API calls yaha se he maar skte hai.
// jaise he mai mouse laata hu github wala link pe data fetching start ho jati haia and ek baar fetching suru ho jati hai toh usko cache mai bhi rakhte hai.
// You can write your whole API call in the loader.
//loader={({request}) => fetch("/api/dashboard.json",{signal: request.signal,})}
// Or we can call a method.
