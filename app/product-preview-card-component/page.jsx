import React from "react";
import styles from "./ProductPrevCard.module.css";
import Image from "next/image";
import { Montserrat, Fraunces } from "next/font/google";
import clsx from "clsx";

const montserrat = Montserrat({ subsets: ["latin"] });
const fraunces = Fraunces({ subsets: ["latin"] });

export default function page() {
    return (
        <main className="bg-[#f3eae3] h-screen w-full p-4 flex flex-col justify-center items-center">
            <div className="bg-white rounded-lg md:flex">
                <Image
                    src={
                        "/challenges/product-preview-card-component-main/images/image-product-desktop.jpg"
                    }
                    width={500}
                    height={500}
                    alt="Product"
                    className="h-72 md:h-full object-cover md:w-96 md:object-contain rounded-t-lg md:rounded-l-lg md:rounded-tr-none "
                />
                <div className="px-8 py-8 md:px-8 md:py-12 md:w-96 flex flex-col justify-between gap-4">
                    <div
                        className={clsx(
                            montserrat.className,
                            "text-sm md:text-md font-light uppercase tracking-[0.3rem] text-[#6C7289]"
                        )}
                    >
                        Perfume
                    </div>

                    <h1
                        className={clsx(
                            fraunces.className,
                            "text-3xl md:text-5xl font-bold"
                        )}
                    >
                        Gabrielle Essence Eau De Parfum
                    </h1>

                    <p
                        className={clsx(
                            montserrat.className,
                            " text-[#6C7289] md:leading-7 md:text-lg md:tracking-wide"
                        )}
                    >
                        A floral, solar and voluptuous interpretation composed
                        by Olivier Polge, Perfumer-Creator for the House of
                        CHANEL.
                    </p>

                    <div className="flex items-center gap-4">
                        <h2
                            className={clsx(
                                fraunces.className,
                                "text-4xl font-bold text-[#3C8067]"
                            )}
                        >
                            $149.99
                        </h2>
                        <span
                            className={clsx(
                                montserrat.className,
                                " line-through  text-[#6C7289]"
                            )}
                        >
                            $169.99
                        </span>
                    </div>

                    <div
                        className={clsx(
                            montserrat.className,
                            "w-full h-16 bg-[#1a4031] hover:bg-[#3C8067] hover:cursor-pointer text-white rounded-lg flex justify-center items-center"
                        )}
                    >
                        <Image
                            src="/challenges/product-preview-card-component-main/images/icon-cart.svg"
                            alt="cart"
                            width={20}
                            height={20}
                        />
                        <span className="ml-2 font-semibold">Add to Cart</span>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.attribution, "mt-4")}>
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by <a href="https://jkdelara.com">Jason-Kyle De Lara</a>
                .
            </div>
        </main>
    );
}
