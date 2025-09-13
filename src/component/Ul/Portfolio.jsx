import React, {useState, useEffect} from 'react'
import Data from '../../assests/data/Data' // Ensure Data is correctly structured with a 'category' property
import Modal from './Modal'

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6)
  const [portfolios, setPortfolios] = useState(Data)
  const [selectTab, setSelectTab] = useState('all') // Initialized 'all' as the default active tab
  const [showModal, setShowModal] = useState(false)
  const [activeID, setActiveID] = useState(null)

  const loadMoreHandler = () =>{
    setNextItems(prev => prev + 3)
  }

  const showModalHandler = id =>{
    setShowModal(true)
    setActiveID(id)
  }

  // --- Filter portfolios based on selected tab ---
  // This useEffect will re-run whenever selectTab changes
  useEffect(() => {
    if(selectTab === 'all'){
      setPortfolios(Data) // If 'all' is selected, show all data
    } else {
      // Otherwise, filter Data based on the selected category
      const filteredData = Data.filter(item => item.category === selectTab)
      setPortfolios(filteredData)
    }
  }, [selectTab]) // Dependency array ensures this effect runs only when selectTab changes

    return (
        <section id='portfolio'>
          <div className='container'>
           <div className='flex items-center justify-between flex-wrap'>
            <div className='mb-7 sm:mb-0'>
             <h3 className='text-headingColor text-[2rem] font-[700]'>My Recent Projects</h3> {/* Corrected typo: Projets -> Projects */}
            </div>

            <div className='flex gap-3'>
              {/* --- All Button --- */}
              <button
                onClick={() => setSelectTab('all')}
                // **DEBUGGED**: Removed the extra single quote ' at the end of `hover:text-white`
                className={`text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-smallTextColor hover:text-white ${selectTab === 'all' ? 'active__btn-color' : ''}`}
              >
                All
              </button>
              {/* --- Web Design Button --- */}
              <button
                onClick={() => setSelectTab('webDesign')}
                // **DEBUGGED**: Removed the extra single quote ' at the end of `hover:text-white`
                className={`text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-smallTextColor hover:text-white ${selectTab === 'webDesign' ? 'active__btn-color' : ''}`}
              >
                Web Design
              </button>
              {/* --- UI-Design Button --- */}
              <button
                onClick={() => setSelectTab('UI')}
                // **DEBUGGED**: Removed the extra single quote ' AND corrected the `selectTab` comparison from 'webDesign' to 'UI'
                className={`text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px] hover:bg-smallTextColor hover:text-white ${selectTab === 'UI' ? 'active__btn-color' : ''}`}
              >
                UI-Design
              </button>
            </div>
           </div>

           <div className='flex items-center gap-4 flex-wrap mt-12'>
           {
             // Ensure your `Data` array (imported from Data.js) has an `id`, `image`, and `category` property for each item.
             // Changed `Data` to `item` for better clarity within the map function.
             portfolios?.slice(0, nextItems)?.map((item, index) =>(
               <div
               key={index} // `key` prop is essential for list rendering in React
               data-aos='fade-zoom-in' // **DEBUGGED**: Corrected typo `fade-zoon-in` to `fade-zoom-in`
               data-aos-delay='50'
               data-aos-duration='1000'
               // **DEBUGGED**: Corrected the border style from `border-solid-[9px]` to `border-solid`
               className='group max-w-full sm:w-[31.8%] lg:w-[32.2%] relative z-[1] '>
               <figure>
                <img className='rounded-[8px] border border-solid border-smallTextColor' src={item.image} alt='Project Thumbnail' /> {/* **DEBUGGED**: Changed alt text for accessibility */}
               </figure>

               <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                 <div className='w-full h-full flex items-center justify-center'>
                   <button
                       onClick={() => showModalHandler(item.id)}
                       className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 '>
                     See Details
                   </button>
                 </div>
               </div>
               </div>
              ))
            }
           </div>
           <div className='text-center mt-6'>
           {
             // **DEBUGGED**: Use `portfolios.length` (which is the filtered data length) instead of `Data.length`
             // This ensures "Load More" only appears if there are more items in the current filtered view.
             nextItems < portfolios.length && (
             <button
               onClick={loadMoreHandler}
               className='text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 '
               >
                 Load More
               </button>
             )
           }
            </div>
          </div>
          {
            // Only render Modal if showModal is true
            showModal && <Modal setShowModal={setShowModal} activeID={activeID} />
          }
        </section>
    )
}

export default Portfolio