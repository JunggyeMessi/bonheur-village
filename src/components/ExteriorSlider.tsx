"use client";
import Image from "next/image";
import classes from "./Slider.module.css";
import exterior1 from "../assets/images/exterior1.jpeg";
import exterior2 from "../assets/images/exterior2.jpeg";
import exterior3 from "../assets/images/exterior3.jpeg";
import exterior4 from "../assets/images/exterior4.jpeg";
import exterior5 from "../assets/images/exterior5.jpeg";
import exterior6 from "../assets/images/exterior6.jpeg";
import exterior7 from "../assets/images/exterior7.jpeg";
import exterior8 from "../assets/images/exterior8.jpeg";
import exterior9 from "../assets/images/exterior9.jpg";

import { useState } from "react";

const ExteriorSlider = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const totalPage = 9;

    return (
        <div className={classes.view}>
            <div
                className={classes.container}
                style={{
                    transform: `translateX(-${100 * currentPage}%)`,
                }}
            >
                <Image src={exterior1} alt="interior"></Image>
                <Image src={exterior2} alt="interior"></Image>
                <Image src={exterior3} alt="interior"></Image>
                <Image src={exterior4} alt="interior"></Image>
                <Image src={exterior5} alt="interior"></Image>
                <Image src={exterior6} alt="interior"></Image>
                <Image src={exterior7} alt="interior"></Image>
                <Image src={exterior8} alt="interior"></Image>
                <Image src={exterior9} alt="interior"></Image>
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

export default ExteriorSlider;
