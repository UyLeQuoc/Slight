import { useEffect, useState } from "react";

const Navbar = () => {
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  const currentUser1 = null;
  const currentUser = {
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
          <span className='menu__item'>Upgrade</span>
          <span className='menu__item'>How to</span>
          <span className='menu__item'>About us</span>
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
    </div>
  )
}

export default Navbar