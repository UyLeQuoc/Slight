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
        <div className='title'>YOUR ACCOUNT PLAN</div>
        <div className='plans flex flex-row justify-center'>
            <div className='plan-container flex flex-col'>
                <div className='price flex flex-row items-center'>
                    Basic
                    {
                        !user?.isPremium ? (
                            <span className='current-plan font-thin w-fit ml-[1rem] mt-[0.5rem]'>
                            Current plan
                            </span>
                        ) : (<></>)
                    }

                </div>
                <div className='plan-title'>
                    FREE
                </div>
                <div className='description'>
                    Good enough to get started
                </div>
                
                {user?.isPremium ?
                (<Link href="/login" className='getStartedBtn w-fit'>
                    Get Started
                </Link>
                    ) : (
                    <Link href="/login" className='getStartedBtn w-fit'>
                      Get Started
                    </Link>
                )}
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
            <div className='price flex flex-row items-center'>
                    Premium
                    {
                        user?.isPremium ? (
                            <span className='current-plan font-thin w-fit ml-[1rem] mt-[0.5rem]'>
                            Current plan
                            </span>
                        ) : (<></>)
                    }
                </div>
                <div className='plan-title'>
                    199.000VND/month
                </div>
                <div className='description'>
                    Perfect plan for students and educators
                </div>
                {user?.isPremium ?
                (<Link href="/editor" className='getStartedBtn w-fit active'>
                    Try out Editor?
                </Link>
                    ) : (
                    <Link href="/payment#payment" className='getStartedBtn w-fit'>
                        Upgrade
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
                        Presentation Editing Feature
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