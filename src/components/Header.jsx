import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div 
      className="header-container"
      style={{ backgroundImage: `url('/himage.jpg')` }}
    >
      <div className="header-content">
        <div className="breadcrumb">
          {/* Home &gt;&gt; Crypto Tools &gt;&gt; Text Encryption And Decryption */}
        </div>
        <h1 className="main-title">KEY VAULT - Encrypt & Decrypt Text Online</h1>
      </div>
    </div>
  );
};

export default Header;
