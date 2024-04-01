import { Footer } from 'flowbite-react'

function BFooter() {
  return (
    <Footer container className='py-8 bg-gray-900 text-gray-300'>
      <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
        <div className='text-center md:text-left'>
          <h3 className='text-xl font-semibold'>Company Name</h3>
          <p className='mt-2'>123 Main Street, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className='mt-6 md:mt-0'>
          <h3 className='text-xl font-semibold'>Quick Links</h3>
          <ul className='mt-2'>
            <li>
              <a href='#' className='hover:text-gray-400 transition duration-300'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-400 transition duration-300'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-400 transition duration-300'>
                Services
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-400 transition duration-300'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='mt-6 md:mt-0'>
          <h3 className='text-xl font-semibold'>Follow Us</h3>
          <div className='flex mt-2 space-x-4'>
            <a href='#' className='text-gray-400 hover:text-gray-200 transition duration-300'>
              <i className='fab fa-facebook'></i>
            </a>
            <a href='#' className='text-gray-400 hover:text-gray-200 transition duration-300'>
              <i className='fab fa-twitter'></i>
            </a>
            <a href='#' className='text-gray-400 hover:text-gray-200 transition duration-300'>
              <i className='fab fa-instagram'></i>
            </a>
          </div>
        </div>
      </div>
      <p className='mt-8 text-center text-sm'>&copy; 2024 Company Name. All rights reserved.</p>
    </Footer>
  )
}

export default BFooter
