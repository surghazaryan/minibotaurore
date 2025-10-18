import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {ROUTES} from "./component/routes/index.js";
import Layouts from "./component/layouts/Layouts.jsx";
import MiniAppLogin from "./component/login/MiniAppLogin.jsx";
import MiniAppRegister from "./component/registration/MiniAppRegister.jsx";
import Home from "./component/pages/home/Home.jsx";
import Wallet from "./component/pages/wallet/Wallet.jsx";


function App() {
    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route path={ROUTES.LOGIN} element={<Layouts/>}>
                <Route index element={<Home/>}/>
                <Route path={ROUTES.REGISTRATION} element={<MiniAppRegister/>}/>
                <Route path={ROUTES.WALLET} element={<Wallet/>}/>

            </Route>
        )
    )

    return (
        <>
            <RouterProvider router={routes}/>
        </>
    )
}

export default App
