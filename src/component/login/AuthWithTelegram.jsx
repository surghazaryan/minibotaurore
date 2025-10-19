import React, { useState } from 'react';
import axios from "axios";
import WebApp from '@twa-dev/sdk';

const AuthWithTelegram = () => {
    const [payload, setPayload] = useState(null);

    const handleTelegram = async () => {
        const unsafeData = WebApp.initDataUnsafe;

        if (!unsafeData || !unsafeData.user) {
            alert('Չհաջողվեց ստանալ Telegram-ի տվյալները');
            return;
        }

        // ուղարկում ենք backend hash վալիդացիայի համար initData query string
        const newPayload = {
            initData: WebApp.initData,          // hash verification
            userData: unsafeData.user           // հարմարության համար
        };

        setPayload(newPayload);

        try {
            const res = await axios.post('https://your-api-domain.com/api/auth/telegram', newPayload);
            localStorage.setItem('token', res.data.token);
            alert('Մուտքը Telegram-ով հաջողվեց!');
        } catch (err) {
            console.error(err);
            alert('Սխալ՝ Telegram մուտքը ձախողվեց');
        }
    };

    return (
        <div style={{ padding: '1rem' }}>
            <button onClick={handleTelegram}>Մուտք Telegram-ով</button>
            <pre style={{ background: '#eee', padding: '10px', borderRadius: '8px' }}>
                {JSON.stringify(payload, null, 2)}
            </pre>
        </div>
    );
};

export default AuthWithTelegram;
