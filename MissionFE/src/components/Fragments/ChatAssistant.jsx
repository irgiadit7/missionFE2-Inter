import React, { useState, useEffect, useRef } from 'react';

// Data untuk tombol opsi pertanyaan awal
const quickReplies = [
    { label: 'Tentang videobelajar', value: 'Boleh jelaskan tentang website videobelajar?' },
    { label: 'Siapa pembuatnya?', value: 'Siapa pembuat website ini?' },
    { label: 'Berapa harganya?', value: 'Berapa list harga kursusnya?' },
    { label: 'Apa benefitnya?', value: 'Apa saja benefit belajar di sini?' },
];


const ChatAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Halo! Saya asisten AI dari videobelajar. Pilih salah satu opsi di bawah atau ketik pertanyaanmu.' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showQuickReplies, setShowQuickReplies] = useState(true);
    const chatBodyRef = useRef(null);

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

    // --- FUNGSI UNTUK MENGHUBUNGI API GEMINI (MELALUI BACKEND ANDA) ---
    const getGeminiResponse = async (prompt) => {
        // TANDA: Ganti bagian ini dengan panggilan ke backend Anda yang terhubung ke Gemini
        // try {
        //     const response = await fetch('https://url-backend-anda.com/api/chat', { /* ... */ });
        //     const data = await response.json();
        //     return data.reply;
        // } catch (error) {
        //     return "Maaf, terjadi kesalahan saat menghubungi asisten AI.";
        // }

        // Kode simulasi (HAPUS JIKA SUDAH TERHUBUNG KE BACKEND)
        return new Promise(resolve => {
            setTimeout(() => {
                const lowerCasePrompt = prompt.toLowerCase();
                if (lowerCasePrompt.includes('harga')) {
                    resolve('Harga setiap kursus bervariasi, umumnya mulai dari Rp 250k. Anda bisa melihat detail harga di halaman setiap kursus yang kami sediakan.');
                } else if (lowerCasePrompt.includes('kategori') || lowerCasePrompt.includes('program')) {
                    resolve('Kami memiliki beberapa kategori unggulan: Pemasaran, Desain, Pengembangan Diri, dan Bisnis. Apakah ada kategori spesifik yang Anda minati?');
                } else if (lowerCasePrompt.includes('tentang')) {
                    resolve('videobelajar adalah platform e-learning interaktif dengan video course berkualitas yang dibimbing oleh para ahli di bidangnya untuk membantu Anda mencapai karier impian.');
                } else if (lowerCasePrompt.includes('pembuat')) {
                    resolve('Website ini dibuat dan dikembangkan oleh Irgi Adit Pratama. Anda bisa menghubunginya melalui sosial media yang tertera di bagian footer website.');
                } else if (lowerCasePrompt.includes('benefit')) {
                    resolve('Tentu! Benefit belajar di sini antara lain: Akses selamanya, Sertifikat penyelesaian, Grup komunitas eksklusif, dan Latihan praktis untuk mengasah skill.');
                } else {
                    resolve('Maaf, saya belum mengerti. Bisa jelaskan lebih detail pertanyaan Anda mengenai kursus di videobelajar?');
                }
            }, 1200);
        });
    };

    const sendMessage = async (messageText) => {
        if (isLoading) return;

        setShowQuickReplies(false);
        const userMessage = { from: 'user', text: messageText };
        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);
        setMessages(prev => [...prev, { from: 'bot', text: '...' }]);

        const botResponse = await getGeminiResponse(messageText);
        
        setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { from: 'bot', text: botResponse };
            return newMessages;
        });

        setIsLoading(false);
        // --- PERUBAHAN LOGIKA DI SINI ---
        // Tampilkan kembali tombol opsi setelah bot selesai menjawab
        setShowQuickReplies(true);
    };

    const handleFormSubmit = () => {
        if (inputValue.trim() === '') return;
        sendMessage(inputValue);
        setInputValue('');
    };

    const handleQuickReplyClick = (value) => {
        sendMessage(value);
    };

    const toggleChat = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Tombol Chat Responsif */}
            <button
                onClick={toggleChat}
                className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-green-600 text-white p-4 md:p-5 rounded-full shadow-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-110 z-50"
                aria-label="Buka Chat"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            </button>

            {/* Jendela Chat */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-80 h-[450px] bg-white dark:bg-gray-800 rounded-xl shadow-2xl flex flex-col z-50 transition-all duration-300">
                    <div className="bg-green-600 text-white p-3 flex justify-between items-center rounded-t-xl">
                        <h3 className="font-semibold">AI Assistant</h3>
                        <button onClick={toggleChat} className="hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                   <div ref={chatBodyRef} className="flex-1 p-4 overflow-y-auto chat-body-scrollbar">
                        {messages.map((msg, index) => (
                            <div key={index} className={`mb-3 flex ${msg.from === 'bot' ? 'justify-start' : 'justify-end'}`}>
                                <div className={`inline-block py-2 px-3 rounded-lg max-w-[85%] ${msg.from === 'bot' ? ' text-white' : 'bg-green-200 dark:bg-green-900'}`}>
                                    <p className={`text-sm leading-relaxed ${msg.from === 'bot' ? 'text-white' : 'text-gray-800 dark:text-gray-200'}`}>{msg.text}</p>
                                </div>
                            </div>
                        ))}
                         {showQuickReplies && !isLoading && (
                            <div className="mt-4 flex flex-col items-start space-y-2">
                                {quickReplies.map((reply) => (
                                    <button
                                        key={reply.label}
                                        onClick={() => handleQuickReplyClick(reply.value)}
                                        className="text-sm text-green-600 dark:text-green-400 bg-white dark:bg-gray-700 border border-green-500 dark:border-green-600 py-1.5 px-3 rounded-full hover:bg-green-50 dark:hover:bg-gray-600 transition-colors"
                                    >
                                        {reply.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="p-2 border-t dark:border-gray-700 flex">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleFormSubmit()}
                            placeholder={isLoading ? 'Menunggu balasan...' : 'Ketik pesan...'}
                            disabled={isLoading}
                            className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white disabled:opacity-50"
                        />
                        <button onClick={handleFormSubmit} disabled={isLoading} className="bg-green-600 text-white px-4 rounded-r-md hover:bg-green-700 disabled:opacity-50">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatAssistant;