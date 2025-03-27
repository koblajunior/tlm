import React from "react";

const Footer = () => {
    return (
        <div className="nk-footer">
            <div className="container-fluid">
                <div className="nk-footer-wrap">
                    <div className="nk-footer-copyright">
                        &copy; {new Date().getFullYear()} The Love Masterclass. All Rights Reserved.
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;
