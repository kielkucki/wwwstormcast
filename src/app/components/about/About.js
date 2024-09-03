export default function About() { // about the smp
    return (
        <section className={"bg-white w-full h-screen text-center text-black p-10 text-3xl font-bold flex justify-center items-center text-center snap-center snap-always sticky top-0"}>
            <h1 className={"text-5xl font-bold bg-clip-text bg-gradient-to-r from-white via-blue-400 to-blue-100 text-transparent"}>About Us</h1>
            <p className={"text-lg text-white max-w-2xl"}>We are a community of SMPs who are on a mission to offer the best player driven experience, made by SMP players for SMP players</p>
            <button className={"bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 mt-4"}>Join us today</button>

        </section>
    )
}