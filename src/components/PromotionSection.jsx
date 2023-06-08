import useAuth from '@/hooks/auth';
import Reveal from '@/layout/Reveal'
import Link from 'next/link'
import { useEffect } from 'react'

function PromotionSection() {
    const {user, getUserRole} = useAuth();
    useEffect(() => {
        getUserRole();
    },[])


  return (
    <Reveal>
    <div className='promotion-container'>
        <div className='title'>PROMOTIONS</div>
        <div className='plans flex flex-row justify-center'>
            <div className='plan-container flex flex-col'>
                <div className='price'>
                    FREE
                </div>
                <div className='plan-title'>
                    Basic
                </div>
                <div className='description'>
                    Good enough to get started
                </div>
                <Link href="/login" className='getStartedBtn'>
                    Get Started
                </Link>
                <ul className='perks-container'>
                    <li>
                        3 Presentaions / month
                    </li>
                    <li>
                        2500 Characters Input / Presentaions
                    </li>
                </ul>
            </div>
            <div className='plan-container flex flex-col'>
            <div className='price'>
                    199.000VND / month
                </div>
                <div className='plan-title'>
                    Premium
                </div>
                <div className='description'>
                    Perfect plan for students and educators
                </div>
                {user?.isPremium ?
                (<Link href="/editor" className='getStartedBtn active'>
                    You are here! Go to Editor?
                </Link>
                    ) : (
                    <Link href="/payment#payment" className='getStartedBtn'>
                        Get Started
                    </Link>
                )}
                
                <ul className='perks-container'>
                    <li>
                        10 Presentaions / month
                    </li>
                    <li>
                        6000 Characters Input / Presentaions
                    </li>
                    <li>
                        Document Upload
                    </li>
                </ul>
            </div>
        </div>
        <div id='about' className='self-end mb-[1rem]'></div>
    </div>
    </Reveal>
  )
}

export default PromotionSection