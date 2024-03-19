import React, { Suspense, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import Header from '../organisms/components/Header';
import Footer from '../organisms/components/Footer';


export type PropsLayout = {
    children: React.ReactNode;
};
const LayoutPage = ({ children }: any) => {
    const Navigate = useNavigate()


    return (
        <div>
            <Header />
            <div className=' '>
                <Suspense fallback={<div></div>} >
                    {children}
                </Suspense>

            </div>
            <Footer />
        </div>
    )
}
export default LayoutPage