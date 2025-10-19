// // import React from 'react';
// // import {ErrorMessage, Field, Form, Formik} from "formik";
// // import "./login.scss"
// // import {Link} from "react-router-dom";
// // import {RiUserFill} from "react-icons/ri";
// // import {FaRegUserCircle} from "react-icons/fa";
// // import {RiLockPasswordLine} from "react-icons/ri";
// // import {ROUTES} from "../routes/index.js";
// // import * as Yup from "yup";
// //
// // const MiniAppLogin = () => {
// //
// //     const initialState = {
// //         username: "",
// //         password: "",
// //     }
// //     const validSchema = Yup.object({
// //         username: Yup.string().required("Username is required"),
// //         password: Yup.string().required("Password is required"),
// //     });
// //     const handleSubmit = async (values, { setStatus, resetForm }) => {
// //         try {
// //                 setStatus("Մուտքը հաջողությամբ կատարված է!");
// //                 resetForm();
// //
// //         } catch (err) {
// //             setStatus(err.response?.data?.message || "Telegram ID կամ գաղտնաբառը սխալ է");
// //         }
// //     };
// //     return (
// //         <div className={"size_container"}>
// //             <div className="login-wrapper">
// //                 <div className="login-content">
// //                     <div className="login-icon">
// //                         <RiUserFill/>
// //                     </div>
// //                     <div className="form-login">
// //                         <div className="login-title">
// //                             <h3>Вход</h3>
// //                             <p>Добро пожаловать обратно!</p>
// //                         </div>
// //                         <Formik initialValues={initialState} validationSchema={validSchema} onSubmit={handleSubmit}>
// //                             {({status}) => (
// //                                 <Form>
// //                                     <div className="field-container">
// //                                         <label htmlFor="username">Имя пользователя</label>
// //                                         <Field type="text" name="username" id="username"/>
// //                                         <span><FaRegUserCircle/></span>
// //                                         <ErrorMessage name="username" component="div" className="error" />
// //                                     </div>
// //                                     <div className="field-container">
// //                                         <label htmlFor="password">Пароль</label>
// //                                         <Field type="password" name="password" id="password"/>
// //                                         <span><RiLockPasswordLine/></span>
// //                                         <ErrorMessage name="password" component="div" className="error" />
// //                                     </div>
// //                                     <button type="submit">Войти</button>
// //                                 </Form>
// //                             )}
// //                         </Formik>
// //                     </div>
// //                     <div className="registration">
// //                        <div>
// //                            <p>Нет аккаунта?</p>
// //                        </div>
// //                         <div>
// //                             <Link to={ROUTES.REGISTRATION}>Зерегистрироваться</Link>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };
// //
// // export default MiniAppLogin;
// //
// import React from 'react';
// import axios from "axios";
// import WebApp from '@twa-dev/sdk';
//
// const AuthWithTelegram =  () => {
//     const initData = WebApp.initData;
//     const x = {
//         ...initData.user,
//         hash: initData.hash,
//         auth_date: initData.auth_date,
//     }
//     const handleTelegram = async () => {
//         const initData = WebApp.initData; // строка с подписью
//         const user = WebApp.initDataUnsafe?.user;
//
//         if (!initData || !user) {
//             alert('Не удалось получить данные Telegram');
//             return;
//         }
//
//         try {
//             const res = await axios.post('https://your-api-domain.com/api/auth/telegram', {
//                 ...initData.user,
//                 hash: initData.hash,
//                 auth_date: initData.auth_date,
//             });
//             localStorage.setItem('token', res.data.token);
//             console.log('Успешная авторизация');
//         } catch (err) {
//             console.error(err);
//         }
//     }
//
//
//     return (
//         <div>
//             <button onClick={handleTelegram}>Войти через Telegram</button>
//             <p>{JSON.stringify(x)}</p>
//         </div>
//     );
// };
//
// export default AuthWithTelegram;

import React from 'react';
import axios from "axios";
import WebApp from '@twa-dev/sdk';

const AuthWithTelegram = () => {

    const handleTelegram = async () => {
        const unsafeData = WebApp.initDataUnsafe; // սա object տարբերակն է
        const user = unsafeData?.user;

        if (!unsafeData || !user) {
            alert('Չհաջողվեց ստանալ Telegram-ի տվյալները');
            return;
        }

        // սա այն օբյեկտն է, որը կուղարկենք backend-ին
        const tgUser = {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            language_code: user.language_code,
            allows_write_to_pm: user.allows_write_to_pm,
            photo_url: user.photo_url,
            hash: unsafeData.hash,
            auth_date: unsafeData.auth_date,
        };

        try {
            const res = await axios.post('https://your-api-domain.com/api/auth/telegram', tgUser);
            localStorage.setItem('token', res.data.token);
            alert('Մուտքը Telegram-ով հաջողվեց!');
        } catch (err) {
            console.error(err);
            alert('Սխալ՝ Telegram մուտքը ձախողվեց');
        }
    };

    // debug-ի համար
    const unsafeData = WebApp.initDataUnsafe;
    const x = {
        ...unsafeData?.user,
        hash: unsafeData?.hash,
        auth_date: unsafeData?.auth_date,
    };

    return (
        <div>
            <button onClick={handleTelegram}>Մուտք Telegram-ով</button>
            <pre>{JSON.stringify(x, null, 2)}</pre>
        </div>
    );
};

export default AuthWithTelegram;
