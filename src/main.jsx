import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LngProviderContext from "./context/LngProviderContext.jsx";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <LngProviderContext>
                <App/>
        </LngProviderContext>
    </StrictMode>,
)
