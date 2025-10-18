import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {ROUTES} from "./component/routes/index.js";
import Layouts from "./component/layouts/Layouts.jsx";
import MiniAppLogin from "./component/login/MiniAppLogin.jsx";
import MiniAppRegister from "./component/registration/MiniAppRegister.jsx";
import Home from "./component/pages/home/Home.jsx";
import Wallet from "./component/pages/wallet/Wallet.jsx";
import History from "./component/pages/history/History.jsx";
import Referrals from "./component/pages/referrals/Referrals.jsx";
import ProfileSettings from "./component/pages/settings/ProfileSettings.jsx";


function App() {
    const routes = createBrowserRouter(
        createRoutesFromElements(
            <Route path={ROUTES.LOGIN} element={<Layouts/>}>
                <Route index element={<MiniAppLogin/>}/>
                <Route path={ROUTES.REGISTRATION} element={<MiniAppRegister/>}/>
                <Route path={ROUTES.HOME} element={<Home/>}/>
                <Route path={ROUTES.WALLET} element={<Wallet/>}/>
                <Route path={ROUTES.HISTORY} element={<History/>}/>
                <Route path={ROUTES.REFERRALS} element={<Referrals/>}/>
                <Route path={ROUTES.PROFILESETTINGS} element={<ProfileSettings/>}/>
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
