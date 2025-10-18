import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import "./login.scss"
import {Link} from "react-router-dom";
import {RiUserFill} from "react-icons/ri";
import {FaRegUserCircle} from "react-icons/fa";
import {RiLockPasswordLine} from "react-icons/ri";
import {ROUTES} from "../routes/index.js";
import * as Yup from "yup";

const MiniAppLogin = () => {

    const initialState = {
        username: "",
        password: "",
    }
    const validSchema = Yup.object({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required"),
    });
    const handleSubmit = async (values, { setStatus, resetForm }) => {
        try {
                setStatus("Մուտքը հաջողությամբ կատարված է!");
                resetForm();

        } catch (err) {
            setStatus(err.response?.data?.message || "Telegram ID կամ գաղտնաբառը սխալ է");
        }
    };
    return (
        <div className={"size_container"}>
            <div className="login-wrapper">
                <div className="login-content">
                    <div className="login-icon">
                        <RiUserFill/>
                    </div>
                    <div className="form-login">
                        <div className="login-title">
                            <h3>Вход</h3>
                            <p>Добро пожаловать обратно!</p>
                        </div>
                        <Formik initialValues={initialState} validationSchema={validSchema} onSubmit={handleSubmit}>
                            {({status}) => (
                                <Form>
                                    <div className="field-container">
                                        <label htmlFor="username">Имя пользователя</label>
                                        <Field type="text" name="username" id="username"/>
                                        <span><FaRegUserCircle/></span>
                                        <ErrorMessage name="username" component="div" className="error" />
                                    </div>
                                    <div className="field-container">
                                        <label htmlFor="password">Пароль</label>
                                        <Field type="password" name="password" id="password"/>
                                        <span><RiLockPasswordLine/></span>
                                        <ErrorMessage name="password" component="div" className="error" />
                                    </div>
                                    <button type="submit">Войти</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className="registration">
                       <div>
                           <p>Нет аккаунта?</p>
                       </div>
                        <div>
                            <Link to={ROUTES.REGISTRATION}>Зерегистрироваться</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniAppLogin;