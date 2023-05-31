import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import useAuth from "@/hooks/auth";
import Link from "next/link";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const {user, logout} = useAuth();
  const currentUser = user;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  

  return (
    <div className={active ? "navbar active": "navbar"}>
      <div className='container'>
        <div className='logo'>
          <span className='text'>SLIGHT</span>
        </div>
        <div className='menu'>
          <a className='menu__item' href="#howto">How to</a>
          <a className='menu__item' href="#upgrade">Upgrade</a>
          <a className='menu__item' href="#about">About us</a>
          {!currentUser && (
            <Link href='/login' className='menu__item login'>Login</Link>
          )}
          {
            currentUser && (
              <div className="user cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                <img src={currentUser.photoURL} alt="user" />
                <span>{currentUser?.username}</span>
                {
                  showMenu && (
                    <div className="options">
                      {
                        currentUser?.isPremium && (
                          <>
                            <span>Modified</span>
                          </>
                        )
                      }
                      <span>View All Slides</span>
                      <span onClick={() => logout()}>Logout</span>
                    </div>
                  )
                }
              </div>
            )
          }
        </div>
      </div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  )
}

export default Navbar