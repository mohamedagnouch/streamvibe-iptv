'use client';

import { useEffect } from 'react';

export default function CrispChat() {
    useEffect(() => {
        // Inject Crisp script
        // @ts-ignore
        window.$crisp = [];
        // @ts-ignore
        window.CRISP_WEBSITE_ID = "5f652669-c710-454d-b60b-75ae80c41682";

        const d = document;
        const s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = true;
        d.getElementsByTagName("head")[0].appendChild(s);
    }, []);

    return null;
}
