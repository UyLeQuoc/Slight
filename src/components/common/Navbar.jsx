import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import useAuth from "@/hooks/auth";
import Link from "next/link";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const {user, logout, isPremium, getUserRole} = useAuth();
  const currentUser = user;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    getUserRole();
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  

  return (
    <div className={active ? "navbar active": "navbar"}>
      <div className='container'>
        <div className='logo'>
          <Link href="/#" className='text'>SLIGHT</Link>
        </div>
        <div className='menu'>
          <Link className='menu__item' href="/#howto">How to</Link>
          <Link className='menu__item' href="/#upgrade">Upgrade</Link>
          <Link className='menu__item' href="/#about">About us</Link>
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
                        currentUser.isPremium && (
                          <span className="flex items-stretch">
                            <Link href={"/editor"}>Editor</Link>
                            <div class="music-waves mb-1 ml-2">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          </span>
                        )
                      }
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