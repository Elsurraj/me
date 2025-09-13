import React,{useRef, useEffect} from 'react'

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const stickyHeaderFunc = () =>{
    window.addEventListener('scroll', () =>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }
      else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect( () =>{
      stickyHeaderFunc()
      return window.removeEventListener('scroll', stickyHeaderFunc)
  },
  [])

  const handleClick = e =>{
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop

    // Fix for window.screenTop - should be window.scrollTo
    window.scrollTo({
      top: location - 80,
      left: 0,
      behavior: 'smooth' // Added for smooth scrolling
    });
  };

  const handleLetsTalkClick = () => {
    window.location.href = 'mailto:elsurraj@gmail.com';
  };

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

    return (
        <header
              ref={headerRef }
              className='w-full h-[80px] leading-[80px] flex items-center '>
           <div className='container' >
            <div className='flex items-center justify-between'>
             { /*======= logo =========  */ }
             <div className='flex items-center gap-[10px]'>
                <span className=' w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>
                SA
                </span>

                <div className='leading-[20px]'>
                  <h2 className='text-xl text-smallTextColor font-[700]'>Suraj</h2>
                  <p className='text-smallTextColor text-[13px] font-[500]'> Personal</p>
                </div>
             </div>

             { /*======= logo end=========  */ }
               { /*======= menu start =========  */ }
               <div
                   className='menu'
                   onClick={toggleMenu}
                   ref={menuRef}
                   >
                   <ul className='flex items-center gap-10'>
                      <li>
                        <a
                        onClick={handleClick}
                        className='text-smallTextColor font-[600] '
                        href='#services'
                        >
                        Services
                        </a>
                      </li>
                      <li>
                        <a
                         onClick={handleClick}
                         className='text-smallTextColor font-[600]' href='#portfolio'>Portfolio</a>
                      </li>
                      <li>
                        <a
                        onClick={handleClick}
                        className='text-smallTextColor font-[600]' href='#about'>About</a> 
                      </li>
                      <li>
                        <a
                         onClick={handleClick}
                         className='text-smallTextColor font-[600]' href='#contact'>Contact</a>
                      </li>
                   </ul>
                 </div>
               { /*======= menu end =========  */ }

               { /*======= menu right =========  */ }
                 <div className='flex items-center gap-4'>
                   <button
                     onClick={handleLetsTalkClick} // Added onClick handler for the button
                     className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallSmallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white  ease-in duration-300 '>
                    <i className='ri-send-plane-line'></i> Let's Talk
                   </button>
                    {/* <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] '>
                      <i className="ri-whatsapp-line"></i>
                        Let's Chart 
                    </button> */}
                   <span
                       onClick={toggleMenu}
                       className='text-2xl text-smallTextColor md:hidden cursor-pointer '>
                     <i className='ri-menu-line'></i>
                   </span>
                 </div>
            </div>
           </div>
        </header>
    )
}

export default Header