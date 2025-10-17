import React from 'react';
import {Field, Form, Formik} from "formik";
import "./login.scss"
import {Link} from "react-router-dom";
import {RiUserFill} from "react-icons/ri";
import {FaRegUserCircle} from "react-icons/fa";
import {RiLockPasswordLine} from "react-icons/ri";
import {ROUTES} from "../routes/index.js";

const MiniAppLogin = () => {
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
                        <Formik>
                            {({status}) => (
                                <Form>
                                    <div className="field-container">
                                        <label htmlFor="firstName">Имя пользователя</label>
                                        <Field type="text" name="firstName" id="firstName"/>
                                        <span><FaRegUserCircle/></span>
                                    </div>
                                    <div className="field-container">
                                        <label htmlFor="password">Пароль</label>
                                        <Field type="password" name="password" id="password"/>
                                        <span><RiLockPasswordLine/></span>
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