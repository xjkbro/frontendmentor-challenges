"use client";
import { useState } from "react";
import styles from "./AgeCalculatorApp.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function AgeCalculatorApp() {
    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [calcDate, setCalcDate] = useState(null);
    const [error, setError] = useState(false);
    const calculateAge = (e) => {
        e.preventDefault();
        console.log(day, month, year);
        if (
            !(
                day > 0 &&
                day <= 31 &&
                month > 0 &&
                month <= 12 &&
                year > 0 &&
                year < new Date().getFullYear()
            )
        ) {
            setCalcDate(null);
            setError(true);
            return;
        }

        const today = new Date();
        const givenDate = new Date(year, month, day);

        let calcYear = today.getFullYear() - givenDate.getFullYear();
        let calcMonth = today.getMonth() - givenDate.getMonth();
        let calcDay = today.getDate() - givenDate.getDate();
        // console.log(today.getMonth());
        if (
            calcMonth < 0 ||
            (calcMonth === 0 && today.getDate() < givenDate.getDate())
        ) {
            calcMonth = calcMonth + 12;
            calcYear--;
        }
        // if (calcMonth > 0) {
        //     calcYear++;
        //     calcMonth = 0;
        // }
        if (calcDay < 0) {
            calcDay = calcDay + 31;
            calcMonth--;
        }
        const age = {
            year: calcYear,
            month: calcMonth + 1,
            day: calcDay,
        };
        setCalcDate(age);
    };
    return (
        <main className="bg-[#f0f0f0] h-screen flex flex-col justify-center items-center">
            <section
                className={
                    poppins.className +
                    " bg-white h-fit w-1/2 p-12 mb-2 rounded-[1rem] rounded-br-[8rem]"
                }
            >
                <div className="flex justify-between">
                    <div className="flex gap-8">
                        <div className="flex flex-col">
                            <label
                                htmlFor="day"
                                className={
                                    error
                                        ? "uppercase text-[#ff5757] font-bold text-sm mb-2 tracking-[.3rem]"
                                        : "uppercase text-[#716f6f] font-bold text-sm mb-2 tracking-[.3rem]"
                                }
                            >
                                Day
                            </label>
                            <input
                                name="day"
                                placeholder="DD"
                                type="number"
                                value={day}
                                min={1}
                                max={31}
                                className={
                                    error
                                        ? "outline outline-[#ff5757] w-36 p-2 font-bold rounded-md text-[32px]"
                                        : "outline outline-[#dbdbdb] w-36 p-2 font-bold rounded-md text-[32px]"
                                }
                                onChange={(e) => setDay(e.target.value)}
                            />

                            <label
                                htmlFor="day"
                                className={
                                    error
                                        ? " italic text-[#ff5757] text-sm my-2 visible"
                                        : " italic text-[#ff5757] text-sm my-2 invisible"
                                }
                            >
                                Must be a valid day
                            </label>
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="month"
                                className={
                                    error
                                        ? "uppercase text-[#ff5757] font-bold text-sm mb-2 tracking-[.3rem]"
                                        : "uppercase text-[#716f6f] font-bold text-sm mb-2 tracking-[.3rem]"
                                }
                            >
                                Month
                            </label>
                            <input
                                name="month"
                                placeholder="MM"
                                type="number"
                                value={month}
                                min={1}
                                max={12}
                                className={
                                    error
                                        ? "outline outline-[#ff5757] w-36 p-2 font-bold rounded-md text-[32px]"
                                        : "outline outline-[#dbdbdb] w-36 p-2 font-bold rounded-md text-[32px]"
                                }
                                onChange={(e) => setMonth(e.target.value)}
                            />
                            <label
                                htmlFor="month"
                                className={
                                    error
                                        ? " italic text-[#ff5757] text-sm my-2 visible"
                                        : " italic text-[#ff5757] text-sm my-2 invisible"
                                }
                            >
                                Must be a valid month
                            </label>
                        </div>
                        <div className="flex flex-col">
                            <label
                                htmlFor="year"
                                className={
                                    error
                                        ? "uppercase text-[#ff5757] font-bold text-sm mb-2 tracking-[.3rem]"
                                        : "uppercase text-[#716f6f] font-bold text-sm mb-2 tracking-[.3rem]"
                                }
                            >
                                Year
                            </label>
                            <input
                                name="year"
                                placeholder="YYYY"
                                type="number"
                                value={year}
                                min={0}
                                max={new Date().getFullYear()}
                                className={
                                    error
                                        ? "outline outline-[#ff5757] w-36 p-2 font-bold rounded-md text-[32px]"
                                        : "outline outline-[#dbdbdb] w-36 p-2 font-bold rounded-md text-[32px]"
                                }
                                onChange={(e) => setYear(e.target.value)}
                            />
                            <label
                                htmlFor="year"
                                className={
                                    error
                                        ? " italic text-[#ff5757] text-sm my-2 visible"
                                        : " italic text-[#ff5757] text-sm my-2 invisible"
                                }
                            >
                                Must be a valid year
                            </label>
                        </div>
                    </div>
                    <button
                        onClick={calculateAge}
                        className="h-20 w-20 bg-[#854dff] hover:bg-[#141414] translate-y-full text-white rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="46"
                            height="44"
                            className="w-12 h-12 mx-auto"
                            viewBox="0 0 46 44"
                        >
                            <g fill="none" stroke="#FFF" strokeWidth="2">
                                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                            </g>
                        </svg>
                    </button>
                </div>
                <hr />
                <div className=" italic font-bold w-full my-12">
                    <p className="text-6xl">
                        <span className="text-[#854dff]">
                            {calcDate != null ? calcDate.year : "--"}
                            {/* {calcDate != null ? Math.abs(calcDate.year) : "--"} */}
                        </span>{" "}
                        years
                    </p>
                    <p className="text-6xl">
                        <span className="text-[#854dff]">
                            {calcDate != null ? calcDate.month : "--"}
                            {/* {calcDate != null ? Math.abs(calcDate.month) : "--"} */}
                        </span>{" "}
                        months
                    </p>
                    <p className="text-6xl">
                        <span className="text-[#854dff]">
                            {calcDate != null ? calcDate.day : "--"}
                            {/* {calcDate != null ? Math.abs(calcDate.day) : "--"} */}
                        </span>{" "}
                        days
                    </p>
                </div>
            </section>
            <div className={styles.attribution}>
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by <a href="#">Jason-Kyle De Lara</a>.
            </div>
        </main>
    );
}
