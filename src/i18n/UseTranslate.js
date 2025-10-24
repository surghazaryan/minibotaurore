import { useIntl } from "react-intl";

const useTranslate = () => {
    const intl = useIntl();
    return (id, values = {}) => intl.formatMessage({ id }, values);
};

export default useTranslate;