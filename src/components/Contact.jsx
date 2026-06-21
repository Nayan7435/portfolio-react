function Contact() {
    return(
        <section id="contact" className="py-20 px-6 bg-gray-900 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-300 mb-6">
                Feel free to reach out for opportunities or collaborations.
            </p>
            <div className="flex justify-center gap-6">
                <a href="mailto:gohelnayan264@gmail.com" className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    Email Me
                </a>
                <a href="https://linkedin.com/in/nayangohel0531" target="_blank" className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition">
                    Linkedin
                </a>
            </div>
        </section>
    )
}

export default Contact