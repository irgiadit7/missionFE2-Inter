import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ChatAssistant from '../Fragments/ChatAssistant';

const RootLayout = () => {
  const location = useLocation();

  // Daftar path di mana tombol chat akan disembunyikan
  const hiddenPaths = ['/learn', '/certificate'];

  // Cek apakah path saat ini diawali dengan salah satu path yang harus disembunyikan
  const isChatHidden = hiddenPaths.some(path => location.pathname.startsWith(path));

  return (
    <>
      {/* Outlet akan merender komponen halaman yang sesuai dengan URL */}
      <Outlet />
      
      {/* Tampilkan ChatAssistant hanya jika tidak berada di halaman yang disembunyikan */}
      {!isChatHidden && <ChatAssistant />}
    </>
  );
};

export default RootLayout;