import React from 'react';
import axios from "axios";
import WebApp from '@twa-dev/sdk';

const AuthWithTelegram = () => {

    const handleTelegram = async () => {
        const unsafeData = WebApp.initDataUnsafe;
        const user = unsafeData?.user;
        if (!unsafeData || !user) {
            alert('Չհաջողվեց ստանալ Telegram-ի տվյալները');
            return;
        }

        try {
            const res = await axios.post('https://your-api-domain.com/api/auth/telegram', {
                ...unsafeData.user,
                hash: unsafeData.hash,
                auth_date: unsafeData.auth_date
            });
            localStorage.setItem('token', res.data.token);
            alert('Մուտքը Telegram-ով հաջողվեց!');
        } catch (err) {
            console.error(err);
            alert('Սխալ՝ Telegram մուտքը ձախողվեց');
        }
    };

    const unsafeData = WebApp.initDataUnsafe;
    // const x = {
    //     ...unsafeData?.user,
    //     hash: unsafeData?.hash,
    //     auth_date: unsafeData?.auth_date,
    // };

    return (
        <div>
            <button onClick={handleTelegram}>Մուտք Telegram-ով</button>
            <pre>{JSON.stringify(unsafeData, null, 2)}</pre>
        </div>
    );
};

export default AuthWithTelegram;
