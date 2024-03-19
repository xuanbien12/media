import React from "react";
import { Link } from "react-router-dom";
import marketing from "./../../../assets/img/marketing.png"
const Contact = () => {
    const data = [
        {
            title: "Mail Here",
            icon: <svg className="w-[30px] h-[32px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#13c4a1" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>,
            desc: "contacts@hnmedia.net",
            link: ""
        },
        {
            title: "Visit Here",
            icon: <svg className="w-[30px] h-[32px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#13c4a1" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>,
            desc: "Linh Dam, Ha Noi, Viet Nam",
            link: ""
        },
        {
            title: "Call Here",
            icon: <svg className="w-[30px] h-[32px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#13c4a1" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>,
            desc: "+84904789422",
            link: ""
        }
    ]
    const handleSubmit = (event: any) => {
        event.preventDefault();

    };

    return (
        <div className="">
            <section className="contact-info-area  ">
                <div className="container">
                    <div className="grid gap-[30px] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center lg:py-[80px] py-[50px] ">
                        {
                            data.map((item: any, index: any) => (
                                <div key={index + 10} className="">
                                    <div className="contact-info-box">
                                        <div className="icon">
                                            {
                                                item.icon
                                            }
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p><Link target="_blank" to={`${index === 0 && "mailto:" || index === 2 && "tel:"}${item.link}`}>{item.desc}</Link></p>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </section>
            <section className="contact-area lg:py-[80px] py-[50px]">
                <div className="container">
                    <div className="section-title">
                        <h2>Get In Touch With Us</h2>
                        <div className="bar"></div>
                        <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
                    </div>
                    <div className=" grid gap-[20px] lg:grid-cols-2 justify-center items-center ">
                        <div className="">
                            <img src={marketing} alt="image" />
                        </div>
                        <div className="">
                            <form className="max-lg:mt-[50px] " id="contactForm" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="">
                                        <div className="form-group">
                                            <input type="text" required placeholder="Name" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="form-group">
                                            <input type="email" required placeholder="Email" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-1 md:gap-[30px] lg:gap-0 ">
                                        <div className=" ">
                                            <div className="form-group">
                                                <input type="text" placeholder="Phone" className="form-control" />
                                            </div>
                                        </div>
                                        <div className=" ">
                                            <div className="form-group">
                                                <input type="text" placeholder="Subject" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="form-group">
                                            <textarea name="message" id="message" cols={30} rows={5} placeholder="Your Message" className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="">
                                        <button type="submit" className=" btn btn-primary">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contact