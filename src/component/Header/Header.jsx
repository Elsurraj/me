import React,{useRef, useEffect} from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

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
              className='w-full h-[80px] leading-[80px] flex items-center bg-white dark:bg-gray-900 transition-colors duration-300'>
           <div className='container' >
            <div className='flex items-center justify-between'>
             { /*======= logo =========  */ }
             <div className='flex items-center gap-[10px]'>
                <span className=' w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>
                SA
                </span>

                <div className='leading-[20px]'>
                  <h2 className='text-xl text-smallTextColor dark:text-gray-200 font-[700]'>Suraj</h2>
                  <p className='text-smallTextColor dark:text-gray-400 text-[13px] font-[500]'> Personal</p>
                </div>
             </div>

             { /*======= logo end=========  */ }
               { /*======= menu start =========  */ }
               {/* Desktop Menu */}
               <div className='hidden md:block'>
                   <ul className='flex items-center gap-10 md:gap-6 lg:gap-10'>
                      <li>
                        <a
                        onClick={handleClick}
                        className='text-smallTextColor dark:text-gray-300 font-[600] hover:text-primaryColor dark:hover:text-blue-400 transition-colors duration-200'
                        href='#services'
                        >
                        Services
                        </a>
                      </li>
                      <li>
                        <a
                         onClick={handleClick}
                         className='text-smallTextColor dark:text-gray-300 font-[600] hover:text-primaryColor dark:hover:text-blue-400 transition-colors duration-200' href='#portfolio'>Portfolio</a>
                      </li>
                      <li>
                        <a
                        onClick={handleClick}
                        className='text-smallTextColor dark:text-gray-300 font-[600] hover:text-primaryColor dark:hover:text-blue-400 transition-colors duration-200' href='#about'>About</a> 
                      </li>
                      <li>
                        <a
                         onClick={handleClick}
                         className='text-smallTextColor dark:text-gray-300 font-[600] hover:text-primaryColor dark:hover:text-blue-400 transition-colors duration-200' href='#contact'>Contact</a>
                      </li>
                   </ul>
                 </div>

                 {/* Mobile Menu */}
                 <div
                     className='menu'
                     ref={menuRef}
                     onClick={(e) => {
                       if (e.target === e.currentTarget) {
                         toggleMenu();
                       }
                     }}
                 >
                     <div className='menu-close md:hidden' onClick={toggleMenu}>
                       <i className='ri-close-line'></i>
                     </div>
                     <ul className='flex items-center gap-10'>
                        <li>
                          <a
                          onClick={(e) => {handleClick(e); toggleMenu()}}
                          className='text-smallTextColor dark:text-gray-300 font-[600] hover:text-primaryColor dark:hover:text-blue-400 transition-colors duration-200'
                          href='#services'
                          >
                          Services
                          </a>
                        </li>
                        <li>
                          <a
                           onClick={(e) => {handleClick(e); toggleMenu()}}
                           className='text-smallTextColor dark:text-gray-300 font-[600] hover:text-primaryColor dark:hover:text-blue-400 transition-colors duration-200' href='#portfolio'>Portfolio</a>
                        </li>
                        <li>
                          <a
                          onClick={(e) => {handleClick(e); toggleMenu()}}
                          className='text-smallTextColor dark:text-gray-300 font-[600] hover:text-primaryColor dark:hover:text-blue-400 transition-colors duration-200' href='#about'>About</a> 
                        </li>
                        <li>
                          <a
                           onClick={(e) => {handleClick(e); toggleMenu()}}
                           className='text-smallTextColor dark:text-gray-300 font-[600] hover:text-primaryColor dark:hover:text-blue-400 transition-colors duration-200' href='#contact'>Contact</a>
                        </li>
                     </ul>
                   </div>
               { /*======= menu end =========  */ }

               { /*======= menu right =========  */ }
                 <div className='flex items-center gap-4'>
                   <ThemeToggle />
                   <button
                     onClick={handleLetsTalkClick}
                     className='hidden sm:flex items-center gap-2 text-smallTextColor dark:text-gray-300 font-[600] border border-solid border-smallTextColor dark:border-gray-600 py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white dark:hover:bg-gray-700 transition-colors duration-300'>
                    <i className='ri-send-plane-line'></i> Let's Talk
                   </button>
                    {/* <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] '>
                      <i className="ri-whatsapp-line"></i>
                        Let's Chart 
                    </button> */}
                   <button
                       onClick={toggleMenu}
                       className='text-2xl text-smallTextColor dark:text-gray-300 md:hidden cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200'
                       aria-label='Toggle menu'
                       type='button'
                   >
                     <i className='ri-menu-line'></i>
                   </button>
                 </div>
            </div>
           </div>
        </header>
    )
}

export default Header