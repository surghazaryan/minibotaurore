import React, {useContext, useEffect, useState} from "react";
import "./settings.scss";
import { Field, Form, Formik } from "formik";
import { FaRegUserCircle } from "react-icons/fa";
import { LanguageContext } from "../../../context/LngProviderContext.jsx";
import am from "../../../assets/images/flags/am.svg";
import ru from "../../../assets/images/flags/ru.svg";
import en from "../../../assets/images/flags/gb-nir.svg";
import { IoIosLogOut } from "react-icons/io";
import BalanceHeader from "../../balanceHeader/BalanceHeader.jsx";


const ProfileSettings = () => {
    const [requirePin, setRequirePin] = useState(false);
    const { lng, setLng, t } = useContext(LanguageContext);
    const toggleRequirePin = () => setRequirePin((prev) => !prev);

    return (
        <div className="size_container">
            <div className="content-settings">
                <div className="setting-title">
                    <h3>{t.profileSettings}</h3>
                    <BalanceHeader/>
                </div>

                <div className="content-user">
                    <div className="info-user">
                        <div className="title-user">
                            <FaRegUserCircle className="user-icon" />
                            <div className="username_id">
                                <p>name</p>
                                <p>id</p>
                            </div>
                        </div>

                        <div className="btn-lng">
                            <button
                                onClick={() => setLng("hy")}
                                className={lng === "hy" ? "active" : ""}
                            >
                                <p>Hy</p>
                                <img src={am} alt="armenia" />
                            </button>
                            <button
                                onClick={() => setLng("ru")}
                                className={lng === "ru" ? "active" : ""}
                            >
                                <p>Ru</p>
                                <img src={ru} alt="russia" />
                            </button>
                            <button
                                onClick={() => setLng("en")}
                                className={lng === "en" ? "active" : ""}
                            >
                                <p>En</p>
                                <img src={en} alt="english" />
                            </button>
                        </div>
                    </div>

                    <div className="content-change">
                        <div className="change-title">
                            <h4>{t.changePassword}</h4>
                        </div>

                        <Formik>
                            <Form>
                                <div className="field-container">
                                    <label htmlFor="ancient">{t.currentPassword}</label>
                                    <Field type="text" id="ancient" />
                                </div>
                                <div className="field-container">
                                    <label htmlFor="newpsw">{t.newPassword}</label>
                                    <Field type="password" id="newpsw" />
                                </div>
                                <div className="field-container">
                                    <label htmlFor="againpsw">{t.confirmNewPassword}</label>
                                    <Field type="password" id="againpsw" />
                                </div>
                                <button>{t.savePassword}</button>
                            </Form>
                        </Formik>
                    </div>

                    <div className={`pin-section ${!requirePin ? "disabled" : ""}`}>
                        <h3>{t.pinForWithdraw}</h3>

                        <div className="pin-option">
                            <div className="checkbox-wrapper-2">
                                <span>{t.requestPin}</span>
                                <input
                                    type="checkbox"
                                    checked={requirePin}
                                    onChange={toggleRequirePin}
                                    className="sc-gJwTLC ikxBAC"
                                />
                            </div>
                        </div>

                        <div className="field-container">
                            <label>{t.newPin}</label>
                            <input type="password" disabled={!requirePin} />
                        </div>

                        <div className="field-container">
                            <label>{t.confirmPin}</label>
                            <input type="password" disabled={!requirePin} />
                        </div>

                        <div className="set-pin-section">
                            <button disabled={!requirePin} className="set-pin-btn">
                                {t.setPin}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content-logout">
                    <button className={"btn-logOut"}> <IoIosLogOut/>{t.logOut}</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;
