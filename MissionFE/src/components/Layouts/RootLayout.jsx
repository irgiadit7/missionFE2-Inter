import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ChatAssistant from '../Fragments/ChatAssistant';

const RootLayout = () => {
  const location = useLocation();
  // State untuk status menu mobile sekarang ada di sini
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const hiddenPaths = ['/learn', '/certificate'];
  const isChatHidden = hiddenPaths.some(path => location.pathname.startsWith(path));

  return (
    <>
      {/* Outlet sekarang meneruskan state & setter-nya ke semua halaman (termasuk Header) */}
      <Outlet context={{ isMobileMenuOpen, setIsMobileMenuOpen }} />
      
      {/* ChatAssistant menerima status menu mobile sebagai prop */}
      {!isChatHidden && <ChatAssistant isMobileMenuOpen={isMobileMenuOpen} />}
    </>
  );
};

export default RootLayout;