import React, {useState} from 'react';
import "./settings.scss"
import {Field, Form, Formik} from "formik";
import {FaRegUserCircle} from "react-icons/fa";

const ProfileSettings = () => {
    const [requirePin, setRequirePin] = useState(false);
    const toggleRequirePin = () => {
        setRequirePin(prev => !prev);
    };
    return (
        <>
            <div className="size_container">
                <div className="content-settings">
                    <div className="setting-title">
                        <h3>Настройки профиля</h3>
                        <hr/>
                    </div>
                    <div className="content-user">
                       <div className="info-user">
                           <div>
                               <FaRegUserCircle className={"user-icon"}/>
                           </div>
                           <div className="username_id">
                               <p>name</p>
                               <p>id</p>
                           </div>
                       </div>
                        <div className="content-change">
                            <div className="change-title">
                                <h4>Изменение пароля</h4>
                            </div>
                            <div>
                                <Formik>
                                    <Form>
                                        <div className="field-container">
                                            <label htmlFor="ancient">Текущий пароль</label>
                                            <Field type={"text"} id="ancient"/>
                                        </div>
                                        <div className="field-container">
                                            <label htmlFor="newpsw">Новый пароль</label>
                                            <Field type={"password"} id="newpsw"/>
                                        </div>
                                        <div className="field-container">
                                            <label htmlFor="againpsw">Подтвердите новый пароль</label>
                                            <Field type={"password"} id="againpsw"/>
                                        </div>
                                        <button>Сохранить пароль</button>
                                    </Form>
                                </Formik>
                            </div>


                        </div>
                        <div className={`pin-section ${!requirePin ? 'disabled' : ''}`}>
                            <h3>PIN-код для вывода</h3>

                            <div className="pin-option">
                                <div className="checkbox-wrapper-2">
                                    <span>  Запрашивать PIN при выводе</span>
                                    <input type="checkbox"
                                           checked={requirePin}
                                           onChange={toggleRequirePin} className="sc-gJwTLC ikxBAC"/>
                                </div>
                            </div>

                            <div className="field-container">
                            <label>Новый PIN-код (1 цифра)</label>

                                    <input
                                        type="password"
                                        disabled={!requirePin}
                                    />

                            </div>

                            <div className="field-container">
                                <label>Подтвердите PIN-код</label>

                                    <input
                                        type="password"
                                        disabled={!requirePin}
                                    />

                            </div>

                            <div className="set-pin-section">
                                <button  disabled={!requirePin} className="set-pin-btn">
                                    Установить PIN-код
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileSettings;

