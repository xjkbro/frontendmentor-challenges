import Card from "@/components/Card";
import { challenges } from "@/lib/constants";
import NavBar from "@/components/NavBar";

import { Inter } from "next/font/google";
import clsx from "clsx";
const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
    return (
        <body className={clsx(inter.className, "bg-background text-base")}>
            <main>
                <NavBar />
                <section className="grid md:grid-cols-4 grid-cols-1 gap-4 mx-12">
                    {challenges.map((item) => (
                        <Card challenge={item} key={item} />
                    ))}
                </section>
            </main>
        </body>
    );
}

export const getChallenges = async () => {
    const res = await fetch("http://localhost:3001/api/hello");
    const { data } = res.json();
    console.log(data);
    return true;
};
