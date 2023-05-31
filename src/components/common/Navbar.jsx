import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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

  const currentUser = null;
  const currentUser1 = {
    id: 1,
    username: 'John Doe',
    email: 'johndue@gmail.com',
    isPremium: true
  }

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
            <button className='menu__item'>Login</button>
          )}
          {
            currentUser && (
              <div className="user" onClick={() => setShowMenu(!showMenu)}>
                <img src="https://picsum.photos/200" alt="user" />
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
                      <span>Logout</span>
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