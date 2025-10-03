import React, { useEffect } from 'react'
import Data from '../../assests/data/Data'

const Modal = ({activeID, setShowModal}) => {
    const portfolio = Data.find(portfolio => portfolio.id === activeID)
    
    // Close modal on Escape key press
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setShowModal(false);
            }
        };
        
        document.addEventListener('keydown', handleEscape);
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [setShowModal]);
    
    // Handle click outside to close
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            setShowModal(false);
        }
    };
    return (
        <div 
            className='w-full h-full fixed top-0 left-0 z-50 bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 flex items-center justify-center p-4 backdrop-blur-sm'
            onClick={handleBackdropClick}
        >
           <div className='w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden transition-colors duration-300'>
             {/* Modal Content Container */}
             <div className='flex flex-col lg:flex-row overflow-hidden max-h-[90vh]'>
               {/* Image Section */}
               <div className='lg:w-1/2 p-4 lg:p-6'>
                 <figure className='w-full h-48 sm:h-64 lg:h-full min-h-[300px] overflow-hidden rounded-lg'>
                   <img 
                     className='w-full h-full object-cover rounded-lg' 
                     src={portfolio.image} 
                     alt={portfolio.title || 'Portfolio item'} 
                   />  
                 </figure>
               </div>
               
               {/* Content Section */}
               <div className='lg:w-1/2 p-4 lg:p-6 flex flex-col justify-between overflow-y-auto'>
                 <div>
                   <h2 className='text-xl sm:text-2xl lg:text-3xl text-headingColor dark:text-white font-bold mb-4'>
                     {portfolio.title}
                   </h2>
                   <p className='text-sm sm:text-base leading-relaxed text-smallTextColor dark:text-gray-300 mb-6'>
                     {portfolio.desc}
                   </p>
                   
                   <div className='mb-6'>
                     <h4 className='text-headingColor dark:text-white text-lg font-semibold mb-2'>
                       Technologies:
                     </h4>
                     <div className='flex flex-wrap gap-2'>
                       {portfolio.tech && portfolio.tech.split(',').map((tech, index) => (
                         <span 
                           key={index}
                           className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-sm font-medium'
                         >
                           {tech.trim()}
                         </span>
                       ))}
                       {!portfolio.tech && (
                         <span className='bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-sm font-medium'>
                           {portfolio.tech}
                         </span>
                       )}
                     </div>
                   </div>
                 </div>
                 
                 {/* Action Button */}
                 <div className='mt-auto pt-4'>
                   <a 
                     href={portfolio.URL}
                     target='_blank'
                     rel='noopener noreferrer'
                     className='inline-block w-full sm:w-auto'
                   >
                     <button className='w-full sm:w-auto bg-primaryColor hover:bg-headingColor dark:bg-blue-600 dark:hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2'>
                       <i className='ri-external-link-line'></i>
                       View Live Site
                     </button>
                   </a>
                 </div>
               </div>
             </div>
             {/* Close Button */}
             <button 
                onClick={() => setShowModal(false)} 
                className='absolute top-4 right-4 w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-xl transition-colors duration-200 z-10'
                aria-label='Close modal'
             >
               <i className='ri-close-line'></i>
             </button>
           </div>
        </div>
    )
}

export default Modal
