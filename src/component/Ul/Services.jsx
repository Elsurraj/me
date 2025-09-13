import React from 'react'
import FrontendImg from '../../assests/images/frontend.png' 
import backendImg from '../../assests/images/frontend.png' 
import UIImg from '../../assests/images/frontend.png' 
import AppsImg from '../../assests/images/frontend.png' 
//import Img from '../../assests/images/frontend.png' 

const Services = () => {
    return (
        <section id='services'>
         <div className='container lg:pt-5'>
          <div className='text-center'>
           <h2 className='text-headingColor font-[800] text-[2.3rem] mb-5 '>
              What do I help
           </h2>
            <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 '>
            Welcome! I'm here to assist you in bringing your digital visions to life. With a blend of creativity, 
            technical expertise, and a passion for innovation, I specialize in ...
            </p>
          </div>

          <div className='flex flex-col justify-center sm:py-12'>
           <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
             <div className='relative text-gray-700 antialiased text-sm font-semibold '>
              
              { /*========= vertical line running thru the middle =========  */ } 
              <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2'></div>
              
              { /*========= left card =========  */ } 
               <div className='mt-6 sm:mt-0 sm:mb-12 '>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                   <div className='w-full sm:w-1/2 sm:pr-8'>
                    <div 
                        data-aos='fade-right'
                        data-aos-duration='1200'
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'
                    >
                     <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[700] text-xl '>
                      Frontend Development
                     </h3>
                     <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[700] leading-7 '>
                     I excel in crafting intuitive user interfaces and seamless experiences for websites and 
                     web applications. Proficient in HTML, CSS, and JavaScript, I leverage frameworks like 
                     React and Vue.js to create dynamic and responsive designs. With a keen focus on 
                     accessibility and cross-browser compatibility, I ensure optimal user experiences
                      across all devices.                 
                     </p>
                    </div>
                   </div>
                  </div>

                  <div className='rounded-full bg-primaryColor border-white border-4 w-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  <figure>
                    <img src={FrontendImg} alt='frontend' />
                  </figure>
                </div>
                </div>                
               </div>
              
            { /*========= right card =========  */ } 
             <div className='mt-6 sm:mt-0 sm:mb-12 '>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-end w-full mx-auto items-center'>
                   <div className='w-full sm:w-1/2 sm:pl-8'>
                    <div 
                        data-aos='fade-left'
                        data-aos-delay='50'
                        data-aos-duration='1300'
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'
                    >
                     <h3 className='text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[700] text-xl '>
                     Backend Development
                     </h3>
                     <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[700] leading-7 '>
                     Proficient in building robust server-side applications and APIs to power dynamic web experiences.
                      Skilled in languages like Python, Node.js, and PHP, along with frameworks such as Django,
                       Express, and Laravel. Experience in database management, authentication, and optimizing
                        server performance for scalability and reliability.             
                     </p>
                    </div>
                   </div>
                  </div>

                  <div className='rounded-full bg-primaryColor border-white border-4 w-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  <figure>
                    <img src={backendImg} alt='frontend' />
                  </figure>
                </div>
                </div>                
               </div>
               
               { /*========= left card =========  */ } 
               <div className='mt-6 sm:mt-0 sm:mb-12 '>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                   <div className='w-full sm:w-1/2 sm:pr-8'>
                    <div 
                        data-aos='fade-right'
                        data-aos-delay='100'
                        data-aos-duration='1400'
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'
                    >
                     <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[700] text-xl '>
                      UI/UX Design
                     </h3>
                     <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[700] leading-7 '>
                     Crafting intuitive and visually appealing interfaces to enhance user engagement and 
                     satisfaction. Proficient in wireframing, prototyping, and user testing to create seamless 
                     experiences. Expertise in Adobe XD, Sketch, and Figma, with a focus on user research and 
                     data-driven design decisions.             
                     </p>
                    </div>
                   </div>
                  </div>

                  <div className='rounded-full bg-primaryColor border-white border-4 w-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  <figure>
                    <img src={UIImg} alt='frontend' />
                  </figure>
                </div>
                </div>                
               </div>
              
            { /*========= right card =========  */ } 
             <div className='mt-6 sm:mt-0 sm:mb-12 '>
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-end w-full mx-auto items-center'>
                   <div className='w-full sm:w-1/2 sm:pl-8'>
                    <div 
                        data-aos='fade-left'
                        data-aos-duration='1500'
                        className='bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'
                    >
                     <h3 className='text-primaryColor font-[600] mb-3 group-hover:text-white group-hover:font-[700] text-xl '>
                     Apps Development
                     </h3>
                     <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[700] leading-7 '>
                     Specializing in building innovative mobile applications for iOS and Android platforms.
                      Proficient in languages along with frameworks.
                     Experienced in full-stack app development, from UI design to backend integration and deployment.                
                     </p>
                    </div>
                   </div>
                  </div>

                  <div className='rounded-full bg-primaryColor border-white border-4 w-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                  <figure>
                    <img src={AppsImg} alt='frontend' />
                  </figure>
                </div>
                </div>                
               </div>

             
               </div>
             </div>
           </div>
          </div>
         
            
        </section>
    )
}

export default Services
