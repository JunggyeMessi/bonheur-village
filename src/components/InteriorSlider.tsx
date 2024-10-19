"use client";
import Image from "next/image";
import classes from "./Slider.module.css";
import interior1 from "../assets/images/interior1.jpg";
import interior2 from "../assets/images/interior2.jpg";
import interior3 from "../assets/images/interior3.jpg";
import interior4 from "../assets/images/interior4.jpg";
import interior5 from "../assets/images/interior5.jpg";
import interior6 from "../assets/images/interior6.jpg";
import interior7 from "../assets/images/interior7.jpg";
import interior8 from "../assets/images/interior8.jpg";
import interior9 from "../assets/images/interior9.jpg";
import interior10 from "../assets/images/interior10.jpg";
import interior11 from "../assets/images/interior11.jpg";
import interior12 from "../assets/images/interior12.jpg";
import interior13 from "../assets/images/interior13.jpg";
import interior14 from "../assets/images/interior14.jpg";
import interior15 from "../assets/images/interior15.jpg";
import interior16 from "../assets/images/interior16.jpg";
import interior17 from "../assets/images/interior17.jpg";
import interior18 from "../assets/images/interior18.jpg";
import interior19 from "../assets/images/interior19.jpg";
import interior20 from "../assets/images/interior20.jpg";
import interior21 from "../assets/images/interior21.jpg";
import interior22 from "../assets/images/interior22.jpg";
import interior23 from "../assets/images/interior23.jpg";
import interior24 from "../assets/images/interior24.jpg";
import interior25 from "../assets/images/interior25.jpg";
import interior26 from "../assets/images/interior26.jpg";
import interior27 from "../assets/images/interior27.jpg";
import interior28 from "../assets/images/interior28.jpg";
import interior29 from "../assets/images/interior29.jpg";
import interior30 from "../assets/images/interior30.jpg";
import interior31 from "../assets/images/interior31.jpg";

import { useState } from "react";

const InteriorSlider = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPage = 31;

    return (
        <div className={classes.view}>
            <div
                className={classes.container}
                style={{
                    transform: `translateX(-${100 * currentPage}%)`,
                }}
            >
                <Image src={interior1} alt="interior"></Image>
                <Image src={interior2} alt="interior"></Image>
                <Image src={interior3} alt="interior"></Image>
                <Image src={interior4} alt="interior"></Image>
                <Image src={interior5} alt="interior"></Image>
                <Image src={interior6} alt="interior"></Image>
                <Image src={interior7} alt="interior"></Image>
                <Image src={interior8} alt="interior"></Image>
                <Image src={interior9} alt="interior"></Image>
                <Image src={interior10} alt="interior"></Image>
                <Image src={interior11} alt="interior"></Image>
                <Image src={interior12} alt="interior"></Image>
                <Image src={interior13} alt="interior"></Image>
                <Image src={interior14} alt="interior"></Image>
                <Image src={interior15} alt="interior"></Image>
                <Image src={interior16} alt="interior"></Image>
                <Image src={interior17} alt="interior"></Image>
                <Image src={interior18} alt="interior"></Image>
                <Image src={interior19} alt="interior"></Image>
                <Image src={interior20} alt="interior"></Image>
                <Image src={interior21} alt="interior"></Image>
                <Image src={interior22} alt="interior"></Image>
                <Image src={interior23} alt="interior"></Image>
                <Image src={interior24} alt="interior"></Image>
                <Image src={interior25} alt="interior"></Image>
                <Image src={interior26} alt="interior"></Image>
                <Image src={interior27} alt="interior"></Image>
                <Image src={interior28} alt="interior"></Image>
                <Image src={interior29} alt="interior"></Image>
                <Image src={interior30} alt="interior"></Image>
                <Image src={interior31} alt="interior"></Image>
            </div>
            <button
                className={classes.left}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage <= 0}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <g opacity="0.5">
                        <path
                            d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                            fill="white"
                        />
                        <path
                            d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z"
                            fill="#08514F"
                        />
                    </g>
                </svg>
            </button>
            <button
                className={classes.right}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={currentPage >= totalPage - 1}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <g opacity="0.5">
                        <path
                            d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                            fill="white"
                        />
                        <path
                            d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z"
                            fill="#08514F"
                        />
                    </g>
                </svg>
            </button>
        </div>
    );
};

export default InteriorSlider;
