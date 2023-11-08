import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { WhatssAppButton } from './style';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send?phone=5518935002592', '_blank');
  };

  return (
    <WhatssAppButton className="whatsapp-button" onClick={handleWhatsAppClick}>
      <FaWhatsapp className="whatsapp-icon" />
    </WhatssAppButton>
  );
};

export default WhatsAppButton;