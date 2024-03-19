import React from "react";
import marketing from "./../../../assets/img/marketing.png"
const About = () => {
    return (
        <div className="">
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-[30px] grid-cols-1 h-100 justify-content-center align-items-center">
                        <div className="">
                            <div className="about-content">
                                <div className="section-title">
                                    <h2>HN Media Group - The Source of Creation.</h2>
                                    <div className="bar"></div>
                                    <p>HN Media Group is a unit established on October 14, 2020. We have 8 years of experience working with Youtube with domestic and foreign partners.</p>
                                </div>
                                <p>By the end of 2020, we officially established HN Media Group Company. With many years of experience, we are confident in the content production process, release high quality music works both in sound and visual. Along with that is the development of strong Youtube channels and channels.</p>
                                <p>In addition to working with reputable domestic partners (Hong An Entertainment, HG Media) We also collaborate with international partners (Wanner music, Saregama…) to want to develop in the world market.</p>
                                <p>HN Media Group always focuses on the creation of well-invested works. We have a team of experts with many years of experience in the field of youtube, bring value to users as well as partners who collaborate.</p>
                                <p>HN Media Group also cooperates with reputable lawyers, Long experience in copyright to ensure the rights of all copyright owners.</p>
                                <p>For more information, please contact via:</p>
                                <p>Email: contacts@hnmedia.net<br />Phone: +84904789422</p>
                            </div>
                        </div>
                        <div className="">
                            <img src={marketing} alt="image" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About