"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
export default function Hero() {
    const [width, setWidth] = useState(800);
    const [loaded, setLoaded] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});
    const pageWidth = 1200;
    const pageHeight = 800;

    useEffect(() => {
        let timeout = setTimeout(() => {
            setWidth(1200);
        },500);
        return () => clearTimeout(timeout);
    },[]);

    function handleLoad() {
        setLoaded(true);
    }
    function handleMouseMove(e) {
        setCursorPosition({x: e.clientX, y: e.clientY});
    }

    return (
        <>
            <div className={""} onMouseMove={()=>handleMouseMove()}>
                <div className="overlay">

                </div>
                <Image
                    className={`image-bg ${loaded ? "animate-[movie_3s_ease_forwards]" : ""} top-[${ cursorPosition.y / 2}px] left-[${cursorPosition.x / 2}px]`}
                    src="/hero.png"
                    alt="Picture of the author"
                    width={2160}
                    height={1440}
                    priority={true}
                    onLoad={handleLoad}
                    onMouseMove={()=>handleMouseMove()}
                ></Image>
            </div>
            <div className={`flex justify-between items-center h-screen w-[${width}px] mr-auto ml-auto transition-all duration-1000 ease`}>
                <div className="p-1 ">
                    <h1 id={"title"} className={"text-6xl font-bold bg-clip-text bg-gradient-to-r from-white via-blue-400 to-blue-100 text-transparent animate-[bg_3s_ease_forwards] bg-500 max-w-2xl"}>A new age of modded servers</h1>
                </div>



            </div>
            <div className={"flex justify-center items-center flex-col opacity-0 animate-[fadeIn_1s_1s_ease_forwards] -translate-y-48 text-2xl"}><span className={"text-white animate-[movie_1s_ease_alternate_infinite] antialiased hover:cursor-pointer"}>See more</span><span></span></div>
        </>
    );
}