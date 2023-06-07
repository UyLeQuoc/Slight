import React from 'react'
import { withPublic } from "@/hooks/route";
import { Button, notification } from 'antd';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PromotionSection from '@/components/PromotionSection';
import Link from 'next/link';

function LoginPage({auth}) {
  const { user, loginWithGoogle, error } = auth;
	if (error!= null) {
		notification.error({message: 'Login failed', description: error });
	}
	return (
		<>
			<Navbar />
			<div className="login-form-wrapper flex flex-row-reverse">
				<div className="bubble red">
					<img src="/bubble1.svg" alt="decoration bubble" />
				</div>
				<div className="bubble blue">
					<img src="/bubble3.svg" alt="decoration bubble" />
				</div>
				<div className="bubble gray">
					<img src="/bubble2.svg" alt="decoration bubble" />
				</div>
				<div className="login-form-container flex flex-row-reverse justify-end">
					<div className="login-form">
						<div className='title-contianer'>
							<div className='title'>Log in</div>
						</div>
						<form >
							<div className='input-container flex flex-col justify-between'>
								<input type="email" className="username" placeholder="@Email"></input>
								<input type="password" className="password" placeholder="Password"></input>
							</div>
							
							<div className="signup-link text-right mx-[2rem]">New user?<Link href="/signup"> <span>Create an account</span></Link></div>
							<div className='login-with-creds-btn-container flex flex-row justify-center'>
								<Button className='login-with-creds-btn'>Continue</Button>
							</div>
							<div className='divider-container flex flex-row justify-center'>
								<div className="divider">or</div>
							</div>
							
							<div className="third-party-login-btn-container flex flex-row justify-center">
								<div onClick={loginWithGoogle} className='icon'>
									<img src='/btn_google_light_normal_ios.svg'></img>
								</div>
								<div className='icon'>
									<img src='/facebook-icon.svg'></img>
								</div>
								<div className='icon'>
									<img src='/twitter-icon.svg'></img>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<PromotionSection></PromotionSection>
			<Footer></Footer>
		</>
	);
}

export default withPublic(LoginPage)