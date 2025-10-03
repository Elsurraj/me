import React from 'react';
// If you uncomment the image, ensure the path is correct.
// import locationImg from '../../assests/images/myLoc1.png';


const Contact = () => {
    return (
        <section id='contact' className='pb-16 bg-white dark:bg-gray-900 transition-colors duration-300'>
           <div className='container'>
           <h2 className='text-headingColor dark:text-white font-[700] text-[2.5rem] mb-8'>Get in touch</h2>
            <div className='md:flex justify-between items-stretch gap-4'>
              <div className='w-full md:w-1/2 mb-8 md:mb-0'>
              
              <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.270669807179!2d8.898859574076662!3d9.911400374554942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10537364b76874f3%3A0x9825ba962f90efae!2sNababa%20Car%20Wash!5e0!3m2!1sen!2sng!4v1749797554266!5m2!1sen!2sng'
                  className='w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]'
                  style={{ border: 0 }} 
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location">
              </iframe>
              </div>
              <div className='w-full md:w-1/2 bg-indigo-100 dark:bg-gray-800 px-4 lg:px-8 py-8 rounded-lg md:rounded-none'>
                                 
               <form className='w-full' action="mailto:elsurraj@gmail.com" method="post" encType="text/plain">
                <div className='mb-5'>
                  <input
                      type='text'
                      name='name' // Added name attribute
                      placeholder='Enter your name'
                      className='w-full p-3 focus:outline-none rounded-[5px] bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400'
                      />
                </div>
                <div className='mb-5'>
                  <input
                      type='email'
                      name='email' // Added name attribute
                      placeholder='Enter your email'
                      className='w-full p-3 focus:outline-none rounded-[5px] bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400'
                      />
                </div>
                <div className='mb-5'>
                  <input
                      type='text'
                      name='subject' // Added name attribute
                      placeholder='Subject'
                      className='w-full p-3 focus:outline-none rounded-[5px] bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400'
                      />
                </div>
                <div className='mb-5'>
                  {/* **CRITICAL FIX**: Changed <input type='textarea'> to actual <textarea> tag */}
                  <textarea
                      name='body' // Changed to 'body' for mailto forms to correctly populate the email body
                      rows={3}
                      placeholder='Write your message'
                      className='w-full p-3 focus:outline-none rounded-[5px] bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 resize-none'
                  ></textarea>
                </div>
                <button
                    type='submit' // Changed type to 'submit' for form submission
                    className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor dark:bg-blue-600 text-white hover:bg-headingColor dark:hover:bg-blue-700 text-center transition-colors duration-150 '>
                  Send Message
                </button>
               </form>
              </div>
            </div>
           </div>
        </section>
    );
};

export default Contact;