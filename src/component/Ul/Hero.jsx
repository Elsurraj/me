import React from 'react';
// import HeroImg from '../../assests/images/hero1.JPG';
import HrImg from '../../assests/images/Hr.jpg'
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <section className='pt-0' id='about'>
          <div className='container pt-14'>
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
             { /*======= hero left content=========  */ }
              <div className='w-full md:basis-1/2'>
               <h5
                   data-aos='fade-right'
                   data-aos-duration='1500'
                   className='text-headingColor font-[600] text-[15px] '
               >
               Hello welcome
               </h5>
               <h1
                   data-aos='fade-up'
                   data-aos-duration='1500'
                   className='text-headingColor font-[800] text-[1.6rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5 '
               >
               I'm Surraj Abubakhar <br/>
               Software Developer
               </h1>

               <div
                    data-aos='fade-up'
                    data-aos-duration='1800'
                    data-aos-delay='200'
                    className='flex items-center gap-6 mt-7'>
                     
                     <a href='/SURAJ-Professional_CV.pdf' download="Suraj_Abubakhar_CV.pdf"> 
                        <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                           <i className='ri-file-download-line'></i> Hire me 
                        </button>
                     </a>
                     <a href='#portfolio' className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor '> See Portfolio </a>
                   </div>
                     <p
                    data-aos='fade-left'
                    data-aos-duration='1500'
                    className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10 '
                   >
                   <span>
                      <i className='ri-apps-2-line'></i>
                   </span>
                   A passionate and creative Web Developer with a B.Tech in Computer Science, specialize
                   in crafting intuitive, user-friendly websites. My drive lies in transforming complex
                    challenges into simple, elegant solutions that enhance user engagement and drive success.
                    Beyond coding, I'm an avid fan of football, i enjoy reading, i love to travel,
                    and consistently explore new technologies.
                     </p>

                     <div className='flex items-center gap-9 mt-12'>
                       <span className='text-smallTextColor text-[15px] font-[600] '>Follow me:</span>
                       <span>
                         <a 
                          href='https://wa.me/2347061329623'
                          className='text-smallTextColor text-[18px] font-[600]'
                          >
                        <i className='ri-whatsapp-line'></i>
                           </a>
                       </span>
                       <span>
                         <a
                             href='https://github.com/Elsurraj/'
                              className='text-smallTextColor text-[18px] font-[600]'
                          >
                            <i className='ri-github-fill'></i>
                          </a>
                       </span>
                       <span>
                         <a 
                            href='https://www.facebook.com/surraj.ahmeed.abubakharHardo'
                              className='text-smallTextColor text-[18px] font-[600]'
                          >
                            <i className='ri-facebook-line'></i>
                          </a>
                       </span>
                       <span>
                         <a href='#'
                              className='text-smallTextColor text-[18px] font-[600]'
                          >
                            <i className='ri-instagram-line'></i>
                          </a>
                       </span>
                     </div>
              </div>
             { /*======= hero left end=========  */ }
             { /*======= hero img=========  */ }
            <div className='basis-1/3 mt-10 sm:mt-0'>
             <figure className='flex items-center justify-center rounded-full'>
                <img src={HrImg} alt='pix'/>
             </figure>
            </div>

             { /*======= hero img end=========  */ }
             { /*======= hero content right=========  */ }
                <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                  <div className='mb-10'>
                      <h2 className='text-headingColor font-[700] text-[24px] md:text-[32px]'>
                          <CountUp start={0} end={9} duration={2} suffix='+' />
                      </h2>
                      <h4 className='text-headingColor font-[600] text-[15px] md:text-[18px]'>Years of Experience</h4>
                  </div>
                  <div className='mb-10'>
                      <h2 className='text-headingColor font-[700] text-[24px] md:text-[32px]'>
                          <CountUp start={0} end={99} duration={2} suffix='%' />
                      </h2>
                      <h4 className='text-headingColor font-[600] text-[15px] md:text-[18px]'>Success Rate</h4>
                  </div>
                  <div className='mb-10'>
                      <h2 className='text-headingColor font-[700] text-[24px] md:text-[32px]'>
                          <CountUp start={0} end={150} duration={2} suffix='+' />
                      </h2>
                      <h4 className='text-headingColor font-[600] text-[15px] md:text-[18px]'>Happy Clients</h4>
                  </div>
                  <div className='mb-10'>
                      <h2 className='text-headingColor font-[700] text-[24px] md:text-[32px]'>
                          <CountUp start={70} end={90} duration={2} suffix='+' />
                      </h2>
                      <h4 className='text-headingColor font-[600] text-[15px] md:text-[18px]'>Project Completed</h4>
                  </div>
              </div>

               { /*======= hero content right=========  */ }
            </div>
          </div>
        </section>
    )
}

export default Hero;