import { lazy } from 'react';

export const routes = [
    {
        path: '/',
       
        redirect: '/home'
    },
    {
        path: '/home',
        component: lazy(() => import('../pages/Home')),
        isLazy: true,
       
    },
    {
        path: '/voice-clone',
        component: lazy(() => import('../pages/VoiceClone')),
        isLazy: true
    },
    {
        path: '/text-tuning',
        component: lazy(() => import('../pages/TextTuning')),
        isLazy: true
    },
    {
        path: '/prompt-helper',
        component: lazy(() => import('../pages/PromptHelper')),
        isLazy: true
    },
    {
        path: '/digital-human',
        component: lazy(() => import('../pages/DigitalHuman')),
        isLazy: true
    },
    {
        path: '/401',
        component: lazy(() => import('../pages/NotFound/401')),
        isLazy: true
    },
    {
        path: '/403',
        component: lazy(() => import('../pages/NotFound/403')),
        isLazy: true
    },
    {
        path: '*',
        component: lazy(() => import('../pages/NotFound/404')),
        isLazy: true
    }
];