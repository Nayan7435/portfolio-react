function Hero(){
    return(
        <section className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Hi, I'm Nayan Gohel
            </h1>
            <p className="text-xl text-gray-600 mb-6">
                Frontend Developer | MERN Stack Enthusiast
            </p>
            <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                View My Work
            </a>
        </section>
    )
}

export default Hero