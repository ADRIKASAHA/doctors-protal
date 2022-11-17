import React from "react";
import { Link } from "react-router-dom";
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return(
        
        <section style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'

            }}>
            <footer 
            className="mt-5 footer p-10  text-base-content">
            <div>
                <span className="footer-title">Services</span> 
                <Link className="link link-hover">Branding</Link> 
                <Link className="link link-hover">Design</Link> 
                <Link className="link link-hover">Marketing</Link> 
                <Link className="link link-hover">Advertisement</Link>
            </div> 
            <div>
                <span className="footer-title">Company</span> 
                <Link className="link link-hover">About us</Link> 
                <Link className="link link-hover">Contact</Link> 
                <Link className="link link-hover">Jobs</Link> 
                <Link className="link link-hover">Press kit</Link>
            </div> 
            <div>
                <span className="footer-title">Legal</span> 
                <Link className="link link-hover">Terms of use</Link> 
                <Link className="link link-hover">Privacy policy</Link> 
                <Link className="link link-hover">Cookie policy</Link>
            </div> 
            <div>
                <span className="footer-title">Newsletter</span> 
                <div className="form-control w-80">
                <label className="label">
                    <span className="label-text">Enter your email address</span>
                </label> 
                <div className="relative">
                    <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
                    <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                </div>
                </div>
            </div>
            {/* <div>
              <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div> */}
          </footer>
          {/* <footer className="footer footer-center p-4 bg-base-300 text-base-content"> */}
            <div className="footer-center p-4  text-base-content ">
              <p>Copyright © 2022 - All right reserved by Doctor's Clinic Ltd</p>
            </div>
          {/* </footer> */}
        </section>
    );
};

export default Footer;