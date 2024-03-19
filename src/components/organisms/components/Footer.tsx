import React from "react";

const Footer = () => {
    return (
        <footer className="footer-area lg:pt-[100px] pt-[80px] bg-image">
            <div className="copyright-area ">
                <div className="container">
                    <div className="flex h-100 justify-between align-center">
                        <div className="">
                            <p>© 2020 HN Media Group. All rights reserved</p>
                        </div>
                        <div className="">
                            <ul className="flex">
                                <li><a href="/">Terms &amp; Conditions</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer