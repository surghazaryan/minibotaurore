import React, {useContext} from 'react';
import {Field, Form, Formik} from "formik";
import {LanguageContext} from "../../../context/LngProviderContext.jsx";

const Replenish = () => {
    const {t} = useContext(LanguageContext);
    return (
        <>
            <div className="account-replenishment">
                <p>{t.replenishAccount}</p>
                <Formik>
                    <Form className={'wallet-form'}>
                        <div className="field-container">
                            <label htmlFor="amount" >{t.amountUSDT}</label>
                            <Field type={"text"} id={"amount"} placeholder={"0.00"}/>
                        </div>
                        <div className={"wallet-btn"}>
                            <button>50</button>
                            <button>100</button>
                            <button>500</button>
                            <button>1000</button>
                        </div>
                        <div className={"wallet-two-input"}>
                            <Field type={"text"} placeholder={t.walletAddress}/>
                        </div>
                        <button>{t.continue}</button>
                    </Form>

                </Formik>
            </div>
        </>
    );
};

export default Replenish;