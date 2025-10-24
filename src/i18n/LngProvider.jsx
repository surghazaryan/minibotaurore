import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";



import messages from "./index.js";
import {LOCALES} from "./locales.js";


const LngProvider = ({ children, locale = LOCALES.ENGLISH }) => {
    return (
        <IntlProvider
            locale={locale}
            textComponent={Fragment}
            messages={messages[locale]}
        >
            {children}
        </IntlProvider>
    );
};

export default LngProvider;