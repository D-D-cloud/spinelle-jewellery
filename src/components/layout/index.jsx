import React from "react";
import Footer from "../../modules/footer";
import Header from "../../modules/header";
import { MegaMenuWithHover } from "../../modules/navbar";
const Layout = (props) => {
    const { children, showFooter = true } = props


    return (
        <div className="layout">
            {/* <div className="flex w-[300px] border border-red-600">
            </div> */}
            {/* <SideBar /> */}
            <section className="layout_main">
                <Header />
                <MegaMenuWithHover />
                {children}
            </section>
            {showFooter &&
                <Footer />
            }

        </div>

    )
}
export default Layout