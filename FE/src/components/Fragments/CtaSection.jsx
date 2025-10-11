const CtaSection = () => {
    return (
        <div className="container mx-auto mb-16 mt-4 px-4">
            <section 
                className="cta-section relative rounded-lg px-8 py-16 sm:px-16 sm:py-24 text-center overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url('/images/CTA.webp')`
                }}
            >
                <div className="relative max-w-2xl mx-auto">
                    <p className="text-sm tracking-[0.2em] font-semibold mb-2 opacity-80 text-white">NEWSLETTER</p>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Mau Belajar Lebih Banyak?</h2>
                    <p className="mb-8 text-base opacity-90 text-white">
                        Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik harisenin.id
                    </p>

                    <form className="max-w-lg mx-auto">
                        <div className="flex items-center bg-white rounded-full p-2">
                            <input 
                                type="email" 
                                placeholder="Masukkan Emailmu" 
                                className="w-full flex-grow bg-transparent border-none text-gray-800 px-4 py-1 focus:outline-none focus:ring-0" 
                            />
                            <button 
                                type="submit" 
                                className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition-colors flex-shrink-0"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default CtaSection;