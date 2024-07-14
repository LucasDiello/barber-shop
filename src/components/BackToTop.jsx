import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const BackToTop = () => {
  return (
    <a href="#top" class="back-top-btn" aria-label="back to top" >
    
    <IoIosArrowUp name="chevron-up" aria-hidden="true"></IoIosArrowUp>
  </a>
  )
}

export default BackToTop