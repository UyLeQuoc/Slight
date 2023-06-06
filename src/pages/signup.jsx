import React from 'react'
import { withPublic } from "@/hooks/route";
import { Button, notification } from 'antd';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PromotionSection from '@/components/PromotionSection';

function SignUpPage() {
  return (
    <>
    <Navbar></Navbar>
    <div className="signup-form-wrapper flex flex-row justify-center">
      <div className="signup-form-container flex flex-row justify-end">
        <div className="signup-form">
          <div className='title-contianer'>
            <div className='title'>Sign up</div>
          </div>
          <form>
            <div className='input-container flex flex-col justify-between'>
              <input type="text" className="name" placeholder="Name"></input>
              <input type="email" className="username" placeholder="@Email"></input>
              <input type="password" className="password" placeholder="Password"></input>
            </div>
              <div className='signup-with-creds-btn-container flex flex-row justify-center'>
              <div className='signup-with-creds-btn'>Continue</div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <PromotionSection></PromotionSection>
    <Footer></Footer>
  </>
  )
}

export default SignUpPage