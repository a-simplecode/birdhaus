import Image from "next/image";
import styles from "../styles/WhatWeDo.module.css";
import cn from "classnames";
import { Parallax } from 'react-scroll-parallax';

export default function WhatWeDo() {

    const rocketHTML = () => {
        return <div className="col-12 col-xl-6 pt-4 zIndex">
            <Parallax className="custom-class" y={[40, -20]} tagOuter="figure">
                <Image src="/images/rocket.png" alt="We Own the Future Image" width={802} height={724} />
            </Parallax>
        </div>
    }

    const messageHTML = () => {
        return <div className="col-12 offset-xl-1 col-xl-5 verticalAlign pt-4">
            <div className="font-MontserratBold fs-100 zIndex text-white">Now, what</div>
            <div className="font-MerriweatherLight fs-100 zIndex text-secondary">we really do</div>
            <div className="font-MontserratMedium fs-18 zIndex text-white">
                Own and operate e-commerce businesses, with the help of our:
                <ul>
                    <li> Digital Strategists</li>
                    <li> UI UX Experts</li>
                    <li> Growth Strategists</li>
                    <li> Art Directors & Designers </li>
                    <li> Logistics Managers</li>
                    <li> E-commerce experts</li>
                    <li> Data Analysts </li>
                    <li> Customer support</li>
                </ul>
            </div>
        </div>
    }
    return (
        <div className={cn("col-12 zIndex", styles.container)}>
            <div className="row pl-4 hiddenMobile">
                {rocketHTML()}
                {messageHTML()}
            </div>
            <div className="row pl-4 hiddenDesktop">
                {messageHTML()}
                {rocketHTML()}
            </div>
        </div>
    )
}