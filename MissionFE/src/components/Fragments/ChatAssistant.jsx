import React, { useState, useEffect, useRef, useContext } from 'react';
import { DarkMode } from '../../context/DarkMode';

const quickReplies = [
    { label: 'Tentang videobelajar', value: 'Boleh jelaskan tentang website videobelajar?' },
    { label: 'Siapa pembuatnya?', value: 'Siapa pembuat website ini?' },
    { label: 'Berapa harganya?', value: 'Berapa list harga kursusnya?' },
    { label: 'Apa benefitnya?', value: 'Apa saja benefit belajar di sini?' },
];

const ChatAssistant = ({ isMobileMenuOpen }) => { 
    const { isDarkMode } = useContext(DarkMode);
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Halo! Saya asisten AI dari videobelajar. Pilih salah satu opsi di bawah atau ketik pertanyaanmu.' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showQuickReplies, setShowQuickReplies] = useState(true);
    const chatBodyRef = useRef(null);

    useEffect(() => {
        if (isMobileMenuOpen && isOpen) {
            setIsOpen(false);
        }
    }, [isMobileMenuOpen, isOpen]);

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

    const getGeminiResponse = async (prompt) => {
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
            {/* Tombol Chat Utama */}
            <button
                onClick={toggleChat}
                className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 text-white p-4 md:p-5 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-50"
                aria-label="Buka Chat"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            </button>

            {isOpen && (
                // Latar Belakang Utama Jendela Chat (Gaya WhatsApp)
                <div className={`fixed bottom-24 right-6 w-80 h-[450px] rounded-xl shadow-2xl flex flex-col z-50 transition-all duration-300 ${isDarkMode ? 'bg-[#0b141a]' : 'bg-[#E0E0E0]'}`}>
                    {/* Header Chat */}
                    <div className="bg-green-600 text-white p-3 flex justify-between items-center rounded-t-xl">
                        <h3 className="font-semibold">AI Assistant</h3>
                        <button onClick={toggleChat} className="hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    {/* Area Pesan */}
                    <div ref={chatBodyRef} className="flex-1 p-3 overflow-y-auto chat-body-scrollbar">
                        {messages.map((msg, index) => (
                            <div key={index} className={`mb-2 flex ${msg.from === 'bot' ? 'justify-start' : 'justify-end'}`}>
                                {/* Gelembung Chat (Gaya WhatsApp) */}
                                <div className={`relative py-2 px-3 rounded-lg max-w-[85%] shadow-sm ${msg.from === 'bot' 
                                    ? (isDarkMode ? 'bg-[#2a3942]' : 'bg-white') 
                                    : (isDarkMode ? 'bg-[#005c4b]' : 'bg-[#dcf8c6]')
                                }`}>
                                    {/* Teks di dalam Chat */}
                                    <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{msg.text}</p>
                                </div>
                            </div>
                        ))}
                         {showQuickReplies && !isLoading && (
                            // Tombol Opsi Pertanyaan (Gaya WhatsApp)
                            <div className={`mt-4 p-2 rounded-lg ${isDarkMode ? 'bg-[#2a3942]' : 'bg-white'}`}>
                                <p className={`text-sm mb-2 px-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Saran untuk Anda:</p>
                                <div className="flex flex-col items-start space-y-1">
                                    {quickReplies.map((reply) => (
                                        <button
                                            key={reply.label}
                                            onClick={() => handleQuickReplyClick(reply.value)}
                                            className={`w-full text-left text-sm p-2 rounded transition-colors ${isDarkMode 
                                                ? 'text-blue-300 hover:bg-gray-700'
                                                : 'text-blue-600 hover:bg-gray-100'
                                            }`}
                                        >
                                            {reply.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Area Input (Gaya WhatsApp) */}
                    <div className={`p-2 flex items-center ${isDarkMode ? 'bg-transparent' : 'bg-transparent'}`}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleFormSubmit()}
                            placeholder={'Ketik pesan...'}
                            disabled={isLoading}
                            className={`flex-1 p-2 border-none rounded-full focus:outline-none disabled:opacity-50 ${isDarkMode 
                                ? 'bg-[#2a3942] text-white' 
                                : 'bg-white text-black'
                            }`}
                        />
                        <button onClick={handleFormSubmit} disabled={isLoading} className="bg-green-500 text-white w-10 h-10 ml-2 rounded-full flex items-center justify-center hover:bg-green-600 disabled:opacity-50">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatAssistant;