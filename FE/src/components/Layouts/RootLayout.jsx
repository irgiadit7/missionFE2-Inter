import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ChatAssistant from '../Fragments/ChatAssistant';

const RootLayout = () => {
  const location = useLocation();
  
  // State untuk navbar dan chat asisten
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Fungsi untuk membuka/menutup navbar
  const handleToggleMobileMenu = () => {
    const newMenuState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newMenuState);
    if (newMenuState) {
      setIsChatOpen(false);
    }
  };

  // Fungsi untuk membuka/menutup chat
  const handleToggleChat = () => {
    const newChatState = !isChatOpen;
    setIsChatOpen(newChatState);
    if (newChatState) {
      setIsMobileMenuOpen(false);
    }
  };

  const hiddenPaths = ['/learn', '/certificate'];
  const isChatHidden = hiddenPaths.some(path => location.pathname.startsWith(path));

  return (
    <>
      {/* Outlet meneruskan state navbar dan fungsi handlernya */}
      <Outlet context={{ isMobileMenuOpen, handleToggleMobileMenu }} />
      
      {/* ChatAssistant menerima state chat dan fungsi handlernya */}
      {!isChatHidden && <ChatAssistant isChatOpen={isChatOpen} handleToggleChat={handleToggleChat} />}
    </>
  );
};

export default RootLayout;