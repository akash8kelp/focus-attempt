import React from 'react';
import Image from 'next/image';

const WhatsAppButton = () => {
  const phoneNumber = '+918369100461';
  const message = `Ready to go on a business hunt? Awesome!\n\nYour Name:\n\nSearch for (Business Activity):\n\nIn (Countries):\n\nWe'll be back in your inbox in a flash! ⚡`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 p-2 rounded-full hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] transition-all"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative w-10 h-10 md:w-12 md:h-12">
        <Image
          src="/assets/whatsapp.png"
          alt="WhatsApp"
          fill
          sizes="(max-width: 768px) 40px, 48px"
        />
      </div>
    </a>
  );
};

export default WhatsAppButton; 