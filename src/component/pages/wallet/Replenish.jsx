import React from 'react';
import {Field, Form, Formik} from "formik";

const Replenish = () => {
    return (
        <>
            <div className="account-replenishment">
                <p>Пополнение счета</p>
                <Formik>
                    <Form className={'wallet-form'}>
                        <div className="field-container">
                            <label htmlFor="amount" >Сумма USDT</label>
                            <Field type={"text"} id={"amount"} placeholder={"0.00"}/>
                        </div>
                        <div className={"wallet-btn"}>
                            <button>50</button>
                            <button>100</button>
                            <button>500</button>
                            <button>1000</button>
                        </div>
                        <div className={"wallet-two-input"}>
                            <Field type={"text"} placeholder={"Адрес кошелика (TRC-20)"}/>
                        </div>
                        <button>Продолжить</button>
                    </Form>

                </Formik>
            </div>
        </>
    );
};

export default Replenish;