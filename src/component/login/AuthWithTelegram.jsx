// import React, {useEffect, useState} from 'react';
// import axios from "axios";
// import WebApp from '@twa-dev/sdk';
// import {motion} from "framer-motion";
// import "./login.scss"
// import {Loader2} from "lucide-react";
//
// const AuthWithTelegram = () => {
//
//     // const handleTelegram = async () => {
//     //     const unsafeData = WebApp.initDataUnsafe;
//     //
//     //     if (!unsafeData || !unsafeData.user) {
//     //         alert('Չհաջողվեց ստանալ Telegram-ի տվյալները');
//     //         return;
//     //     }
//     //
//     //
//     //     const newPayload = {
//     //         initData: WebApp.initData,
//     //         userData: unsafeData.user
//     //     };
//     //
//     //
//     //
//     //     try {
//     //         const res = await axios.post('https://your-api-domain.com/api/auth/telegram', newPayload);
//     //
//     //         alert('Մուտքը Telegram-ով հաջողվեց!');
//     //     } catch (err) {
//     //         console.error(err);
//     //         alert('Սխալ՝ Telegram մուտքը ձախողվեց');
//     //     }
//     // };
//
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)
//
//     useEffect(() => {
//         const authenticate = async () => {
//             const unsafeData = WebApp.initDataUnsafe;
//             if (!unsafeData || !unsafeData.user) {
//                 setError('Չհաջողվեց ստանալ Telegram-ի տվյալները');
//                 setLoading(false)
//             }
//             const newPayload = {
//                 initData: WebApp.initData,
//                 userData: unsafeData.user
//             };
//             try {
//                 const res = await axios.post('https://your-api-domain.com/api/auth/telegram', newPayload)
//
//             }catch(err) {
//                 console.log(err)
//             }finally {
//                 setLoading(false)
//             }
//         }
//         authenticate()
//     }, []);
//
//     return (
//         <div className="auth-loader">
//             <motion.div
//                 className="loader-icon"
//                 animate={{rotate: 360}}
//                 transition={{repeat: Infinity, duration: 1.5, ease: "linear"}}
//             >
//                 <Loader2 size={60}/>
//             </motion.div>
//
//             <motion.h1
//                 className="loader-title"
//                 initial={{opacity: 0}}
//                 animate={{opacity: 1}}
//                 transition={{duration: 1.5}}
//             >
//                 Welcome to Aurore Casino
//             </motion.h1>
//
//             <p className="loader-text">Please Wait...</p>
//         </div>
//
//
//     );
// };
//
// export default AuthWithTelegram;


import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {motion} from 'framer-motion';
import {Loader2} from 'lucide-react';
import WebApp from '@twa-dev/sdk';
import "./login.scss"

const AuthWithTelegram = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [payload, setPayload] = useState(null);

    useEffect(() => {
        const authenticate = async () => {
            const unsafeData = WebApp.initDataUnsafe;

            if (!unsafeData || !unsafeData.user) {
                setError('Չհաջողվեց ստանալ Telegram-ի տվյալները');
                setLoading(false);
                return;
            }

            const newPayload = {
                initData: WebApp.initData,
                userData: unsafeData.user,
            };
            setPayload(newPayload);

            try {
                const res = await axios.post('https://your-api-domain.com/api/auth/telegram', newPayload, {withCredentials: true});


            } catch (err) {
                console.error(err);
                setError('Սերվերի սխալ կամ կապի խնդիր');
            } finally {
                setLoading(false);
            }
        };

        authenticate();
    }, []);

    if (loading) {
        return (
            <div className="auth-loader">
                <motion.div
                    className="loader-icon"
                    animate={{rotate: 360}}
                    transition={{repeat: Infinity, duration: 1.5, ease: "linear"}}
                >
                    <Loader2 size={60}/>
                </motion.div>
                <p className="loader-text">Please Wait...</p>
            </div>
        );
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div>
            <h2>Telegram Init Data Payload</h2>
            <pre style={{color:"white"}}>
               {JSON.stringify(payload, null, 2)}
            </pre>
        </div>
    );
};

export default AuthWithTelegram;
