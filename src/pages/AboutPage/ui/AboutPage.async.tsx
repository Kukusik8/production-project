import { lazy } from 'react';
export const AboutPagesAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() =>resolve(import('./AboutPage')),1500)
})); 