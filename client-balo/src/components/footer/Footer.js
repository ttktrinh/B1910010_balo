import React from 'react';
import './Footer.css'


function Footer(props) {
    return (
        <section id="footer">
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-name">
                        <h2>Balo Xinh</h2>
                        <a><img src="https://www.doitacso.com/wp-content/uploads/2019/12/Balo-Dep-logo-Trang-Den-vuong-512.png"></img></a>
                    </div>
                    <div className="footer-top-about">
                        <h2>about</h2>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/baloxinhdep0907080865">facebook</a>
                            </li>
                            <li>
                                <a>Blog</a>
                            </li>
                            <li>
                                <a>79C, Mậu Thân, Ninh Kiều, Cần Thơ</a>
                            </li>
                           
                        </ul>
                    </div>
                    <div className="footer-top-sp">
                        <h2>Always-on Support</h2>
                        <p>Support 0907080865 (07:00-22:00)</p>
                        <p>Delivery 0000000 (07:00-22:00)</p>
                    </div>
                    <div className="footer-top-delivery">
                        <h2>Delivery</h2>
                        <ul>
                            <li>
                                <a>Shipping methods</a>
                            </li>
                            <li>
                                <a>Payment</a>
                            </li>
                            <li>
                                <a>Cash voucher</a>
                            </li>
                            <li>
                                <a>Shipping methods</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bot">
                    
                    <p>Copyright © 2023 Balo Xinh. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;