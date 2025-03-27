import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const AdminLayout = ({ children }) => {
    return (
        <div className="nk-app-root">
            <div className="nk-main">
                {/* Sidebar */}
                <Sidebar />
                <div className="nk-wrap">
                    {/* Header */}
                    <Header />
                    <div className="nk-content">
                        <div className="container-fluid">
                            <div className="nk-content-inner">
                                <div className="nk-content-body">
                                    {/* Main Content */}
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
