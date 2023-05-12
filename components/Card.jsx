import Link from "next/link";
import React from "react";
import Badge from "./Badge";
import Image from "next/image";

export default function Card({ challenge }) {
    return (
        <article className="bg-secondary p-4 rounded-md flex flex-col justify-between">
            {/* <div className="w-full h-56 grid items-center justify-center bg-accent">
                img
            </div> */}
            <figure className="w-full h-56 grid items-center justify-center overflow-hidden bg-accent mb-4">
                <Image
                    src={challenge.image}
                    alt={challenge.title}
                    width={400}
                    height={400}
                    className="h-fit  object-cover"
                />
            </figure>
            <div className="p-4 min-h-[12rem] flex flex-col justify-around">
                <h3 className="text-lg font-bold flex items-center">
                    {challenge.title} <Badge type={challenge.type} />
                </h3>
                <p className="text-sm mb-4 text-slate-400">
                    {challenge.description}
                </p>
                <div className="flex flex-wrap justify-end gap-4">
                    <Link
                        href={challenge.demo}
                        className=" py-2 px-6 bg-primary rounded-md"
                    >
                        Demo
                    </Link>
                    <Link
                        href={challenge.demo}
                        className=" py-2 px-6 bg-accent rounded-md"
                    >
                        Challenge
                    </Link>
                </div>
            </div>
        </article>
    );
}
