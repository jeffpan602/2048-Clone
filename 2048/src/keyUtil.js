import { useEffect } from 'react'

export const useKeyEvent = (event, handler, passive = false) => {
    useEffect(() => {

        window.addEventListener(event, handler, passive);

        return function cleanup() {
            window.removeEventListener(event, handler);
        };
    });
};