import React, {useContext} from 'react';
import {Field, Form, Formik} from "formik";
import {LanguageContext} from "../../../context/LngProviderContext.jsx";

const Withdraw = () => {
    const {t} = useContext(LanguageContext);
    return (
        <>
            <div className="account-replenishment">
                <p>{t.withdrawFunds}</p>
                <Formik>
                    <Form className={'wallet-form'}>
                        <div className="field-container">
                            <label htmlFor="amount" >{t.amountUSDT}</label>
                            <Field type={"text"} id={"amount"} placeholder={"0.00"}/>
                            <p>{t.available}: 5000</p>
                        </div>

                        <div className={"wallet-two-input"}>
                            <label htmlFor="adress">{t.walletAddressWithdraw}</label>
                            <Field type={"text"} placeholder={t.enterAddress} id={"adress"}/>
                        </div>
                        <div className="minimum-amount">
                            <span>{t.minWithdraw}:{t.networkFee}:1 USDT</span>
                        </div>
                        <button>{t.withdrawButton}</button>
                    </Form>

                </Formik>
            </div>
        </>
    );
};

export default Withdraw;