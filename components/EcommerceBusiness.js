import Image from "next/image";
import styles from "../styles/EcommerceBusiness.module.css";
import cn from "classnames";
import { Parallax } from 'react-scroll-parallax';

export default function EcommerceBusiness() {

    return (
        <div className={cn("col-12", styles.container)}>
            <Parallax className="custom-class absolute" y={[0, -70]} tagOuter="figure">
                <Image src="/images/cloud.png" alt="Cloud 1" width={902} height={776} />
            </Parallax>

            <span className={styles.mediumCircle} ><Image src="/images/mediumCircle.png" alt="mediumCircle" width={90} height={90} /></span>

            {/* ,styles.inside */}
            <div className={cn("row")}>
                <div className="col-12 text-center pt-4 pb-4">
                    <div className="font-MontserratBold fs-69">E-commerce Businesses</div>
                    <div className="font-MerriweatherRegular fs-69 pb-4 mb-4">Owned by Birdhaus</div>

                    <span className="hiddenMobile"><Image src="/images/businessesLogosDesktop.png" alt="Businesses Logos desktop" width={533} height={136} /></span>
                    <span className="hiddenDesktop"><Image src="/images/businessesLogosMobile.png" alt="Businesses Logos mobile" width={146} height={329} /></span>
                </div>
            </div>

            <Parallax className="custom-class absoluteRight" x={[-100, 0]} y={[-20,0]} tagOuter="figure">
                <Image src="/images/cloud2.png" alt="Cloud 2" width={789} height={626} />
            </Parallax>
            <span className={styles.mediumCircle2} ><Image src="/images/mediumCircle2.png" alt="mediumCircle" width={121} height={121} /></span>

        </div>
    )
}