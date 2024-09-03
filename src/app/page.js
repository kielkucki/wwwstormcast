import Image from "next/image";
import Hero from "@/app/components/hero/Hero";
import About from "@/app/components/about/About";


export default function Home() {
  return (
    <>
        <main className={"flex flex-col "}>
            <Hero/>
            <About/>
        </main>
    </>
  );
}
