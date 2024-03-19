import React, { useEffect, useState } from "react";
import logo from "./../../../assets/img/logo.png"
import banner from "./../../../assets/img/banner.png"
import shape2 from "./../../../assets/img/shape2.png"
import shape3 from "./../../../assets/img/shape3.png"
import { Link, useLocation } from "react-router-dom";
import { routePortals } from "../../../routes/PortalRoute";
const Header = () => {
    const [isDialog, setIsDialog] = useState(false)
    const [isFixed, setIsFixed] = useState(false);
    const [isNavbar, setIsNavbar] = useState(false);
    const location = useLocation()
    useEffect(() => {
        function handleScroll() {

            if (window.scrollY > 300) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        }


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleHiddenNavbar = () => {
        setIsNavbar(false)
    }
    return (
        <div className={`main-banner ${location.pathname === "/" ? " h-[100vh] " : " "}`}>

            <header className={`  ${isFixed ? "fixed top-0 left-0 w-full  bg-[#13c4a1] fixed-header " : "py-2"}`}>
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <img src={logo} alt="" />
                        <button onClick={() => setIsNavbar(!isNavbar)} className="navbar-toggler">

                            <svg className="w-[30px] h-[30px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                        </button>
                        <div className={`navbar-collapse mean-menu ${isNavbar ? "block" : " mobile-hidden "}`}>
                            <ul className="navbar-nav nav ml-auto">
                                <li onClick={handleHiddenNavbar}>
                                    <Link to={routePortals.HOME}>Home</Link>
                                </li>
                                <li onClick={handleHiddenNavbar}>
                                    <Link to={routePortals.ABOUT}>About Us</Link>

                                </li>
                                <li onClick={handleHiddenNavbar}>
                                    <Link to={routePortals.CONTACT}>Contact</Link>

                                </li>
                            </ul>
                        </div>
                        <div className="mr-auto others-option  mobile-hidden ">
                            <ul onClick={() => setIsDialog(true)} className="navbar-nav ">
                                <li data-toggle="modal" >
                                    <div className="side-menu">
                                        <span className="bar-1"></span>
                                        <span className="bar-2"></span>
                                        <span className="bar-3"></span>
                                    </div>
                                </li>
                            </ul>
                            <div className="sidebar-modal ">
                                <div onClick={() => setIsDialog(false)} className={`${!isDialog ? " hidden" : "modal-backdrop fade show"}`}></div>
                                <div id="myModal2" className={`modal right fade ${isDialog ? "block" : "hidden "} `} aria-hidden="true">
                                    <div role="document" className={` modal-dialog ${isDialog ? "right-0 e" : "right-[-320px] "}`}>
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button onClick={() => setIsDialog(false)} type="button" data-dismiss="modal" aria-label="Close" className="close">
                                                    <span aria-hidden="true" className="flex items-center justify-center">
                                                        <svg className="w-[32px] h-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                                                    </span>
                                                </button>
                                                <h2 id="myModalLabel2" className="modal-title">
                                                    <Link to="/">
                                                        <img src={logo} alt="logo" />
                                                    </Link>
                                                </h2>
                                            </div>
                                            <div className="modal-body">
                                                <div className="sidebar-modal-widget">
                                                    <h3 className="title">Contact Info</h3>
                                                    <ul className="contact-info">
                                                        <li>
                                                            <i className="flex items-center justify-center">
                                                                <svg className="w-[25px] h-[27px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                                    <path fill="#13c4a1" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                                                </svg>
                                                            </i>
                                                            Address <span>Linh Dam, Ha Noi, Viet Nam</span>

                                                        </li>
                                                        <li >
                                                            <i className="flex items-center justify-center"> <svg className="w-[25px] h-[27px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#13c4a1" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg></i> Email <span>contacts@hnmedia.net</span>
                                                        </li>
                                                        <li>
                                                            <i className="flex items-center justify-center"> <svg className="w-[25px] h-[27px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#13c4a1" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                                                            </i>
                                                            Phone <span>+84904789422</span></li>
                                                    </ul>
                                                </div>
                                                <div className="sidebar-modal-widget">
                                                    <h3 className="title">Connect With Us</h3>
                                                    <ul className="social-list">
                                                        <li>
                                                            <Link to="#" target="_blank">
                                                                <svg className="w-[15px] h-[16px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#13c4a1" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                                                            </Link></li>
                                                        <li>
                                                            <Link to="#" target="_blank">
                                                                <svg className="w-[15px] h-[16px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#13c4a1" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
                                                            </Link></li>
                                                        <li>
                                                            <Link to="#" target="_blank">
                                                                <svg className="w-[15px] h-[16px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#13c4a1" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                                            </Link></li>
                                                        <li>
                                                            <Link to="#" target="_blank">
                                                                <svg className="w-[15px] h-[16px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#13c4a1" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </nav>

                </div>


            </header >
            <div className="p-banner">
                <div className="container">
                    {
                        location.pathname === "/"
                        &&
                        <div className="flex gap-10 max-lg:flex-col-reverse items-center  justify-center">
                            <img src={banner} alt="" />
                            <div className="ml-10">
                                <h1 className=" text-[50px] mb-[30px] text-[#fff] ">
                                    The Source of Creation
                                </h1>
                                <button className="btn-banner">
                                    Join with us
                                </button>
                            </div>
                        </div>
                    }
                    {
                        location.pathname === "/about-us"
                        &&
                        <div className="page-title-banner">
                            <h2>
                                About Us
                            </h2>
                        </div>

                    }
                    {
                        location.pathname === "/contact-us"
                        &&
                        <div className="page-title-banner">
                            <h2>
                                Contact Us
                            </h2>
                        </div>

                    }


                </div>
            </div>
            <div className=" shape-1"></div>
            <div className=" shape-2">
                <img src={shape2} alt="" />
            </div>
            <div className=" shape-3">
                <img src={shape3} alt="" />
            </div>
        </div >
    )
}
export default Header