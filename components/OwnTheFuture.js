import Image from "next/image";
import SvgTitle from "./icons/SVGTitle";
import { Parallax } from 'react-scroll-parallax';

export default function OwnTheFuture() {

    return (
        <div className="col-12">
            <div className="row pl-4">
                <div className="col-12 offset-xl-3 col-xl-9 font-MerriweatherBlack">
                    <SvgTitle />
                </div>
            </div>
            <div className="row pl-4">
                <div className="col-12 offset-xl-1 col-xl-5 verticalAlign pt-4">
                    <div className="font-MontserratBold fs-100 zIndex">We own</div>
                    <div className="font-MerriweatherLight fs-100 zIndex">the future</div>
                    <div className="font-MontserratMedium fs-18 zIndex">
                        Birdhaus is Lebanon’s first e-commerce accelerator with growth marketing experts working
                        on combining their marketing activities with sales efforts and logistics using novel tools
                        and approaches. Birdhaus owns several e-commerce businesses, developed by a team of experts internally.
                    </div>
                </div>
                <div className="col-12 col-xl-6 pt-4 zIndex">
                <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
                    <Image src="/images/weOwnImage.png" alt="We Own the Future Image" width={789} height={680}/>
                </Parallax>
                </div>
            </div>
        </div>
    )
}