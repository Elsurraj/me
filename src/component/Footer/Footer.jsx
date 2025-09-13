import React from 'react'

const Footer = () => {
   // const year = new Date().getFullYear

    return (        
        <footer className='bg-[#12141e] pt-12'>
          {/* ========== Footer top ============== */}
          <div className='container'>
           <div className='sm:flex items-center justify-between md:gap-8'>
            <div className='w-full sm:w-1/2'>
             <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem] '>
               do you want to make Beautiful WebSites?
             </h2>             
               <a href="https://wa.me/2347061329623" class="whatsapp-icon" target="_blank">
                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] '>
                <i className="ri-whatsapp-line"></i>
                     Let's Chart 
                </button>
             </a>
            </div>
            <div className='w-full sm:w-1/2'>
             <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>
             A versatile designer with a knack for blending creativity with functionality.
               I thrive on bringing ideas to life through innovative design solutions. From crafting 
               captivating visuals to optimizing user experiences, I'm committed to delivering results
                that resonate. Let's create something extraordinary together!
             </p>
             <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
              <span className='text-gray-300 font-[600] text-[15px] '>
               Follow Me:
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center '>
               <a 
                    href='https://github.com/Elsurraj/'
                    className='text-gray-300 font-[500] text-[18px]'
                    >
                  <i className='ri-github-line'></i>
               </a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center '>
               <a 
                    href='https://wa.me/2347061329623'
                    className='text-gray-300 font-[500] text-[18px]'
                    >
                  <i className='ri-whatsapp-line'></i>
               </a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center '>
               <a 
                    href='https://www.facebook.com/surraj.ahmeed.abubakharHardo'
                    className='text-gray-300 font-[500] text-[18px]'
                    >
                  <i className='ri-facebook-line'></i>
               </a>
              </span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center '>
               <a 
                    href='#'
                    className='text-gray-300 font-[500] text-[18px]'
                    >
                  <i className='ri-instagram-line'></i>
               </a>
              </span>
             </div>
            </div>
           </div>
            <div>
                 <ul className='flex items-center justify-center gap-10 mt-10'>
                   <li>
                     <a className='text-gray-400 font-[600] ' href='#about'>Services</a>
                   </li>
                   <li>
                     <a className='text-gray-400 font-[600]' href='#portfolio'>Portfolio</a>
                   </li>
                   <li>
                     <a className='text-gray-400 font-[600]' href='#about'>About</a>
                   </li>
                   <li>
                     <a className='text-gray-400 font-[600]' href='#contact'>Contact</a>
                   </li>
                 </ul>
                </div> 
          </div>
          {/* ========== Footer top end ============== */}
          {/* ========== Footer bottom ============== */}
            <div className='bg-[#1b1e29] py-5 mt-14'>
             <div className='container'>
              <div className='flex items-center justify-center sm:justify-between'>               
              <div className='hidden sm:block'>
                <div className='flex items-center gap-[10px]'>
                 <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center '>
                  M
                 </span>
                 <div className='leading-[20px]'>
                  <h2 className='text-gray-200 font-[500] text-[18px]'>SURAJ</h2>
                  <p className='text-gray-400 font-[500] text-[14px]'>Personal</p>
                 </div>
                </div>
               </div>
                <div>
                 <p className='text-gray-400 text-[14px]'>                 
                  &copy; {new Date().getFullYear()} Design & Developed by Suraj - All rights reserved.
                 </p>      
                </div>
              </div>
             </div>
            </div>

          {/* ========== Footer top end ============== */}
        </footer>
        
    )
}

export default Footer
 