import React, { useState, useEffect } from 'react';
import style from "./NavBar.module.scss"
export default function Navbar(params) {

    const [actnav, setActNav] = useState();

    return (
        <div className={style.navbar}>
            <div className={style.logo}>
                <img src="https://app.testgorilla.com/assets/testgorilla.svg" alt="logo" />
            </div>
            <div className={style.navItems}>
                <div className={actnav === "assessment" ? [style.item, style.itemActive].join(" ") : style.item} onClick={() => setActNav("assessment")}>My assessments </div>
                <div className={actnav === "candidate" ? [style.item, style.itemActive].join(" ") : style.item} onClick={() => setActNav("candidate")}>My candidates </div>
                <div className={actnav === "tests" ? [style.item, style.itemActive].join(" ") : style.item} onClick={() => setActNav("tests")}>Tests </div>
            </div>
            <div className={style.navOptions}>
                <div className={style.btn}>Talk to us</div>
                <div className={style.btn}>Upgrade</div>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.75C7.44321 3.75 3.75 7.44321 3.75 12C3.75 16.5568 7.44321 20.25 12 20.25C16.5568 20.25 20.25 16.5568 20.25 12C20.25 7.44321 16.5568 3.75 12 3.75ZM2.25 12C2.25 6.61479 6.61479 2.25 12 2.25C17.3852 2.25 21.75 6.61479 21.75 12C21.75 17.3852 17.3852 21.75 12 21.75C6.61479 21.75 2.25 17.3852 2.25 12ZM9.25 9.83301C9.25 8.31379 10.4808 7.08301 12 7.08301C13.5192 7.08301 14.75 8.31379 14.75 9.83301C14.75 11.0272 13.9717 11.6569 13.4302 12.0219L13.4293 12.0225C12.9717 12.33 12.75 12.5773 12.75 13V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V13C11.25 11.7891 12.0379 11.1504 12.5922 10.7778C13.0384 10.477 13.25 10.2387 13.25 9.83301C13.25 9.14222 12.6908 8.58301 12 8.58301C11.3092 8.58301 10.75 9.14222 10.75 9.83301C10.75 10.2472 10.4142 10.583 10 10.583C9.58579 10.583 9.25 10.2472 9.25 9.83301ZM11.25 16.75C11.247 16.336 11.583 16 11.997 16C12.414 16 12.75 16.336 12.75 16.75C12.75 17.164 12.414 17.5 12 17.5C11.586 17.5 11.25 17.164 11.25 16.75Z" fill="black"></path>
                    </svg>
                </div>
                <div className={[style.user, style.flexC].join(" ")}>Oviya D</div>
                <div className={[style.flexC, style.icon].join(" ")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </div>
        </div>
    )
};
