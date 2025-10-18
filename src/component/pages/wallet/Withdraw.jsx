import React from 'react';
import {Field, Form, Formik} from "formik";

const Withdraw = () => {
    return (
        <>
            <div className="account-replenishment">
                <p>Вывод средств</p>
                <Formik>
                    <Form className={'wallet-form'}>
                        <div className="field-container">
                            <label htmlFor="amount" >Сумма USDT</label>
                            <Field type={"text"} id={"amount"} placeholder={"0.00"}/>
                            <p>Доступно: 5000</p>
                        </div>

                        <div className={"wallet-two-input"}>
                            <label htmlFor="adress">Адрес кошелика</label>
                            <Field type={"text"} placeholder={"Введите адрес..."} id={"adress"}/>
                        </div>
                        <div className="minimum-amount">
                            <span>Минимальная сумма вывода:Комиссия сети:1 USDT</span>
                        </div>
                        <button>Вывести средства</button>
                    </Form>

                </Formik>
            </div>
        </>
    );
};

export default Withdraw;