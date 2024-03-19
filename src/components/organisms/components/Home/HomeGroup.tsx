import React from "react";
import shape3 from "./../../../../assets/img/shape3.png"
import shape6 from "./../../../../assets/img/shape6.png"
import features1 from "./../../../../assets/img/features1.png"

import shape7 from "./../../../../assets/img/shape7.png"
import shape8 from "./../../../../assets/img/shape8.svg"
import shape9 from "./../../../../assets/img/shape9.svg"
import shape10 from "./../../../../assets/img/shape10.svg"
import shape11 from "./../../../../assets/img/shape11.svg"


import HongAn from "./../../../../assets/img/HongAn.png"
import WMG from "./../../../../assets/img/WMG.png"
import HGmedia from "./../../../../assets/img/HGmedia.png"
import Sa_Re_Ga_Ma from "./../../../../assets/img/Sa_Re_Ga_Ma.png"
import yt from "./../../../../assets/img/yt.png"

const HomeGroup = () => {
    const data = [
        {
            title: "Youtube",
            icon: <svg className="w-[30px] h-[32px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#13c4a1" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>,
            desc: "Youtube is our top strength. And music is an area that we love. In addition, with great potential and long experience, we are always confident in other genres."
        },
        {
            title: "Facebook",
            icon: <svg className="w-[30px] h-[32px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#13c4a1" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>,
            desc: "Facebook is also the choice that we are developing. With a large fan base and a growing online community. So Facebook would be a great place too.."
        },
        {
            title: "TikTok",
            icon: <svg className="w-[30px] h-[32px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#13c4a1" d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" /></svg>,
            desc: "In addition, with a fast pace of development in a short time. Tiktok is gradually asserting its position.."
        },
        {
            title: "Produce",
            icon: <svg className="w-[30px] h-[32px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#13c4a1" d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>,
            desc: "We are focusing on content production. To be able to supply and cooperate with major partners in the world.."
        },
        {
            title: "Technology",
            icon: <svg className="w-[30px] h-[32px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#13c4a1" d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z" /></svg>,
            desc: "In addition to applying the best external tools to serve the analysis, development and job security. We also have our own technology products."
        },
        {
            title: "Other platforms",
            icon: <svg className="w-[30px] h-[32px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#13c4a1" d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z" /></svg>,
            desc: "Companioning and supporting growth artist's fanbase via professional social network."
        }
    ]
    const data2 = [
        {
            title: "Content-oriented",
            icon: <svg className="w-[30px] h-[32px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#13c4a1" d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>,
            desc: "Choose the right content type. Manufacturing or cooperating with other suppliers. Content quality is the most important factor to achieve set goals."
        },
        {
            title: "Optimization and development",
            icon: <svg className="w-[30px] h-[32px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#13c4a1" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" /></svg>,
            desc: "Make a detailed plan. Incorporation of essential tools for analysis and evaluation. Finally, building the development process."
        },
        {
            title: "Evaluation and measurement",
            icon: <svg className="w-[30px] h-[32px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#13c4a1" d="M128 176a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H391.8zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5 .3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40z" /></svg>,
            desc: "Content review. Analyze the decisive factors that affect the development speed of Youtube channel. Update and add new ways to have a perfect process."
        },
    ]
    const data3 = [
        {
            title: "50+",
            icon: <svg className="w-[30px] h-[32px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#13c4a1" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>,
            desc: "Youtube Channels"
        },
        {
            title: "5,000,000+",
            icon: <svg className="w-[30px] h-[32px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#13c4a1" d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" /></svg>,
            desc: "Subscribers"
        },
        {
            title: "10,000,000,000+",
            icon: <svg className="w-[30px] h-[32px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#13c4a1" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg>,
            desc: "Views"
        },
        {
            title: "5+",
            icon: <svg className="w-[30px] h-[32px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#13c4a1" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>,
            desc: "Gold Play Button"
        }
    ]
    const data4 = [
        {
            img: HongAn
        },
        {
            img: WMG
        }
        ,
        {
            img: HGmedia
        }
        ,
        {
            img: Sa_Re_Ga_Ma
        }
        ,
        {
            img: yt
        }
    ]
    return (
        <>
            <section className="features-area saas-features ptb-100">
                <div className="container">
                    <div>
                        <div className="section-title">
                            <h2>HN Media Group</h2>
                            <div _ngcontent-scv-c16="" className="bar"></div>
                            <p>
                                We have 8 years of experience working with Youtube with domestic and foreign partners. With many years of experience, we are confident in the process of producing and releasing the best quality music works. Along with that is the development of strong Youtube channels and channels.
                            </p>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-[35px] sm:grid-cols-2">
                            {
                                data.map((item: any, index: any) => (
                                    <div key={index} className="">
                                        <div className="single-features">
                                            <div className="icon ">
                                                {item.icon}
                                            </div>
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
                <div className="features-inner-area">
                    <div className="container-fluid ">
                        <div className="grid min-[900px]:grid-cols-2 items-center justify-center gap-[30px] ">
                            <img src={features1} alt="" />
                            <div>
                                <div className="features-inner-content">
                                    {
                                        data2.map((item: any, index: number) => (
                                            <div key={index + 20} className="features-item">
                                                <div className="icon">
                                                    {
                                                        item.icon
                                                    }
                                                </div>
                                                <h3 >{item.title}</h3>
                                                <p >{item.desc}</p>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape7">
                    <img src={shape7} alt="shape" />

                </div>
                <div className="shape-3">
                    <img src={shape3} alt="shape" />

                </div>
                <div className=" shape-1"></div>
                <div className="shape6">
                    <img src={shape6} alt="shape" />

                </div>
                <div className="shape8 rotateme">
                    <img src={shape8} alt="shape" />

                </div>
                <div className="shape9 ">
                    <img src={shape9} alt="shape" />

                </div>
                <div className="shape10 ">
                    <img src={shape10} alt="shape" />

                </div>
                <div className="shape11 rotateme">
                    <img src={shape11} alt="shape" />

                </div>

            </section>
            <div className="saas-tools ptb-50 bg-gray">
                <div className="container">
                    <div className="section-title">
                        <h2>For Youtube in particular</h2>
                        <div className="bar"></div>
                        <p>In the field of Youtube channel development. We have achieved certain results:</p>
                    </div>
                </div>
            </div>
            <section className="app-funfacts-area ">
                <div className="container">
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2">
                        {
                            data3.map((item: any, index: any) => (
                                <div key={index + 30} className="">
                                    <div className="single-funfact">
                                        <div className="icon">
                                            {
                                                item.icon
                                            }
                                        </div>
                                        <h3><span className="count">{item.title}</span></h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
            <section className="team-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Partner</h2>
                        <div className="bar"></div>
                    </div>
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2">
                        {
                            data4.map((item: any, index: any) => (
                                <div key={index + 50} className="">
                                    <div className="single-team-member">
                                        <img src={item.img} alt="team" />
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </section>
        </>
    )
}
export default HomeGroup