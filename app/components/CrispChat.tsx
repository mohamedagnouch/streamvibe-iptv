'use client';

import { useEffect } from 'react';

export default function CrispChat() {
    useEffect(() => {
        // Inject Crisp script
        // @ts-ignore
        window.$crisp = [];
        // @ts-ignore
        window.CRISP_WEBSITE_ID = "8f1a7377-3d01-4a9c-9bca-5591ea80912e";

        const d = document;
        const s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = true;
        d.getElementsByTagName("head")[0].appendChild(s);
    }, []);

    return null;
}
