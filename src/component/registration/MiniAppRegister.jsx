import React from 'react';
import {RiLockPasswordLine, RiUserFill} from "react-icons/ri";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {FaRegUserCircle} from "react-icons/fa";
import {Link} from "react-router-dom";
import {ROUTES} from "../routes/index.js";
import * as Yup from "yup";
import "./register.scss"

const MiniAppRegister = () => {
    const initialState = {
        username: "",
        password: "",
    }
    const ValidSchema = Yup.object({
        username: Yup.string().required("Username is required"),
        password: Yup.string().min(6).matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        )
            .required("Password is required")
    })
    const handleSubmit = async (values, { setStatus, resetForm }) => {
        try {
            setStatus("Մուտքը հաջողությամբ կատարված է!");
            resetForm();

        } catch (err) {
            setStatus(err.response?.data?.message || "Telegram ID կամ գաղտնաբառը սխալ է");
        }
    };
    return (
        <>
            <div className={"size_container"}>
                <div className="register-wrapper">
                    <div className="register-content">
                        <div className="register-icon">
                            <RiUserFill/>
                        </div>
                        <div className="form-register">
                            <div className="register-title">
                                <h3>Регистрация</h3>
                                <p>Создайте новый аккаунт</p>
                            </div>
                            <Formik onSubmit={handleSubmit} initialValues={initialState} validationSchema={ValidSchema}>
                                {({status}) => (
                                    <Form>
                                        <div className="field-container">
                                            <label htmlFor="username">Имя пользователя</label>
                                            <Field type="text" name="username" id="username"
                                                   placeholder={"Придумайте имя"}/>
                                            <span><FaRegUserCircle/></span>
                                            <ErrorMessage name="username" component="div" className="error" />
                                        </div>
                                        <div className="field-container">
                                            <label htmlFor="password">Пароль</label>
                                            <Field type="password" name="password" id="password"
                                                   placeholder={"Придумайте пароль"}/>
                                            <span><RiLockPasswordLine/></span>
                                            <ErrorMessage name="password" component="div" className="error" />
                                        </div>
                                        <button type="submit">Создать аккаунт</button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        <div className="login">
                            <div>
                                <p>Уже есть аккаунт?</p>
                            </div>
                            <div>
                                <Link to={ROUTES.LOGIN}>Войти</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MiniAppRegister;