import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

export default function VoiceController() {
    useEffect(() => {
        alanBtn({
            key: '4e839c02c17930091e3911f7e26390612e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
                if (commandData.command === 'go:back') {
                    // Call the client code that will react to the received command
                }
            },
        });
    }, []);
    
    return <div></div>;
}
