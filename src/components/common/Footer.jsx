import Link from 'next/link'
import React from 'react'

function Footer() {


  return (
    <div className='footer flex flex-col items-center'>
      <div className='content-container flex flex-row justify-between'>
        <div className='logo'>
          <img src='/footer-logo.svg'></img>
        </div>
        <div className='aboutUs-container'>
          <div className='title'>ABOUT US</div>
          <div className='aboutUs-description'> This project is brought to life because of its need for speakers in general and students in specific, which make their lives easier by saving them hundreds of hours making, and modifying their presentation. </div>
        </div>
        <div className='contact-container flex flex-col justify-evenly'>
          <div className='title'>CONTACT</div>
          <div className='contact-phonenumber'>Phone number: 0372644555</div>
          <div className='contact-mail'>Mail: Slightteamcom@gmail.com</div>
          <div className='contact-socials flex flex-row content-center'>
            <div className='contact-socials-title'>Social: </div>
            <a href='https://www.facebook.com/Slightgeneration'><img src='/footer-social-facebook.svg'></img></a>
            <a href='https://www.instagram.com/slight.2023/'>
            <img src='/footer-social-instagram.svg'></img>
            </a>
            
          </div>
        </div>
        <div className='app-qrcode-container w-[10%]'>
          <img className='app-qrcode' src='/app-qrcode.png' alt='app-download'></img>
        </div>
      </div>
      <div id='payment' className='copyright'>Copyright © 2023 Slight</div>
    </div>
  )
}

export default Footer