import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Связаться со мной~</h1>
      <p>Ня, хочешь оставить мне сообщение? Просто напиши здесь 💌</p>

      <form className="contact-form">
        <input type="text" placeholder="Твоё имя, ня~" />
        <input type="email" placeholder="Твоя почта (мяу~)" />
        <textarea placeholder="Напиши что-нибудь милое или важное... 🐾" />
        <button type="submit">Отправить 💖</button>
      </form>
    </div>
  );
};

export default Contact;
