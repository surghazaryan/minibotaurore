import React from 'react';
import {RiLockPasswordLine, RiUserFill} from "react-icons/ri";
import {Field, Form, Formik} from "formik";
import {FaRegUserCircle} from "react-icons/fa";
import {Link} from "react-router-dom";
import {ROUTES} from "../routes/index.js";
import "./register.scss"
const MiniAppRegister = () => {
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
                            <Formik>
                                {({status}) => (
                                    <Form>
                                        <div className="field-container">
                                            <label htmlFor="firstName">Имя пользователя</label>
                                            <Field type="text" name="firstName" id="firstName" placeholder={"Придумайте имя"}/>
                                            <span><FaRegUserCircle/></span>
                                        </div>
                                        <div className="field-container">
                                            <label htmlFor="password">Пароль</label>
                                            <Field type="password" name="password" id="password" placeholder={"Придумайте пароль"}/>
                                            <span><RiLockPasswordLine/></span>
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