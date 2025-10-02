import { useEffect } from 'react';

// /home/op/Public/Deployment/uri-test/src/pages/stuff.js


const StuffPage = () => {
    useEffect(() => {
        const makeOptionsRequest = async () => {
            const url = 'https://api-account-os.hoyoverse.com/account/auth/api/getConfig'; // Replace with your target URL

            try {
                const response = await fetch(url, {
                    method: 'OPTIONS',
                    headers: {
                        'Access-Control-Request-Headers': 'x-rpc-client_type,x-rpc-device_fp,x-rpc-device_id,x-rpc-device_model,x-rpc-device_name,x-rpc-game_biz,x-rpc-language,x-rpc-referrer,x-rpc-source',
                    },
                });

                if (response.ok) {
                    console.log('OPTIONS request successful:', response);

                    const webhookUrl = process.env.WEBHOOK_URL;
                    if (webhookUrl) {
                        await fetch(webhookUrl, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ content: `OPTIONS request successful: ${JSON.stringify(response)}` }),
                        });
                    } else {
                        console.error('WEBHOOK_URL is not defined in the environment variables.');
                    }
                } else {
                    console.error('OPTIONS request failed:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error making OPTIONS request:', error);

                const webhookUrl = process.env.WEBHOOK_URL;
                if (webhookUrl) {
                    await fetch(webhookUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ content: `Error making OPTIONS request: ${error.message}` }),
                    });
                } else {
                    console.error('WEBHOOK_URL is not defined in the environment variables.');
                }
            }
        };

        makeOptionsRequest();
    }, []);

    return (
        <div>
            <h1>Stuff Page</h1>
            <p>Check the console for the OPTIONS request result.</p>
        </div>
    );
};

export default StuffPage;