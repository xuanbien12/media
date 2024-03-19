import React, { lazy } from 'react'
const HomePage = React.lazy(() => import('../components/organisms/pages/Home'))
const ContactPage = React.lazy(() => import('../components/organisms/pages/Contact'))
const AboutPage = React.lazy(() => import('../components/organisms/pages/About'))
export const routePortals = {
    HOME: '/',
    ABOUT: "/about-us",
    CONTACT: "/contact-us"


}
export const routePortal = [
    {
        id: 1,
        route: routePortals.HOME,
        component: HomePage,
        permission: 'dashboard'
    },
    {
        id: 2,
        route: routePortals.CONTACT,
        component: ContactPage,
        permission: 'dashboard'
    },
    {
        id: 3,
        route: routePortals.ABOUT,
        component: AboutPage,
        permission: 'dashboard'
    }
]