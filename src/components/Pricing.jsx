import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <section className='py-[128px] bg-white'>
      <div className='containerb'>
        <h1 className='text-#282938 text-center text-5xl font-semibold leading-[64px] mb-4'>Our Pricing Plans</h1>
        <p className='text-center text-#282938 text-base font-medium leading-7 mb-16'>When you’re ready to go beyond prototyping in Figma, Webflow is <br /> ready to help you bring your designs to life — without coding them.</p>
        <ul className='grid grid-cols-1 tabletmax:grid-cols-3 gap-8'>
          <li className='w-full max-w-[406px] mx-auto tabletmax:mx-0 py-10 aaa:py-[64px] px-6 aaa:px-12  bg-#F4F6FC rounded-xl'>
            <div className='aaa:flex block items-center mb-5'>
              <h3 className='text-#282938 text-[38px] font-semibold mr-2'>$299</h3>
              <p className='text-#2405F2 text-base0'>Per Design</p>
            </div>

            <p className='text-#282938 text-2xl font-medium leading-9 mb-2'>Landing Page </p>
            <p className='text-#282938 text-base font-medium leading-7 mb-20'>When you’re ready to go beyond prototyping in Figma,</p>
            <ul className='space-y-5 mb-20'>
              <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                  <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_174_502)" stroke-width="3" />
                  <defs>
                    <linearGradient id="paint0_linear_174_502" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className='text-#282938 text-base leading-7 ml-3'>All limited links</p>
              </li>
              <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                  <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_174_502)" stroke-width="3" />
                  <defs>
                    <linearGradient id="paint0_linear_174_502" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className='text-#282938 text-base leading-7 ml-3'>Own analytics platform</p>
              </li>
              <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                  <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_174_502)" stroke-width="3" />
                  <defs>
                    <linearGradient id="paint0_linear_174_502" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className='text-#282938 text-base leading-7 ml-3'>Chat support</p>
              </li>
              <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                  <g>
                    <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#282938" />
                    <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" stroke="url(#paint0_linear_174_512)" stroke-width="3" />
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_174_512" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className='text-#282938 text-base leading-7 ml-3 '>Optimize hashtags</p>
              </li>
              <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                  <g >
                    <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#282938" />
                    <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" stroke="url(#paint0_linear_174_512)" stroke-width="3" />
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_174_512" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className='text-#282938 text-base leading-7 ml-3 '>Unlimited users</p>
              </li>
            </ul>
            <Link to="/contact" className='aaa:py-4 py-2 aaa:px-[51px] px-5 bg-#282938 w-full max-w-[150px] aaa:max-w-[254px] block mx-auto text-center rounded-[41px] text-#F4F6FC aaa:text-lg text-sm font-semibold leading-8'>Get started</Link>
          </li>
          <li className='w-full max-w-[406px] mx-auto tabletmax:mx-0 py-10 aaa:py-[64px] px-6 aaa:px-12  bg-#1C1E53 rounded-xl'>
            <div className='aaa:flex block items-center mb-5'>
              <h3 className='text-white  text-[38px] font-semibold mr-2'>$399</h3>
              <p className='text-#FCD980 text-base0'>Multi Design</p>
            </div>

            <p className='text-white text-2xl font-medium leading-9 mb-2'>Website Page </p>
            <p className='text-white text-base font-medium leading-7 mb-[50px]'>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.</p>
            <ul className='space-y-5 mb-20'>
              <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                  <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_174_502)" stroke-width="3" />
                  <defs>
                    <linearGradient id="paint0_linear_174_502" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className='text-white text-base leading-7 ml-3'>All limited links</p>
              </li>
              <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                  <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_174_502)" stroke-width="3" />
                  <defs>
                    <linearGradient id="paint0_linear_174_502" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className='text-white text-base leading-7 ml-3'>Own analytics platform</p>
              </li>
              <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                  <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_174_502)" stroke-width="3" />
                  <defs>
                    <linearGradient id="paint0_linear_174_502" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className='text-white text-base leading-7 ml-3'>Chat support</p>
              </li>
              <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                  <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_174_408)" stroke-width="3" />
                  <defs>
                    <linearGradient id="paint0_linear_174_408" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className='text-white text-base leading-7 ml-3 '>Optimize hashtags</p>
              </li>
              <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                  <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_174_411)" stroke-width="3" />
                  <defs>
                    <linearGradient id="paint0_linear_174_411" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className='text-white  text-base leading-7 ml-3 '>Unlimited users</p>
              </li>
            </ul>
            <Link to="/contact" className='aaa:py-4 py-2 aaa:px-[51px] px-5 bg-#FCD980 w-full max-w-[150px] aaa:max-w-[254px] block mx-auto text-center rounded-[41px] text-#282938 aaa:text-lg text-sm font-semibold leading-8'>Get started</Link>
          </li>
          <li className='w-full max-w-[406px] mx-auto tabletmax:mx-0 py-10 aaa:py-[64px] px-6 aaa:px-12  bg-#F4F6FC rounded-xl'>
            <div className='aaa:flex block items-center mb-5'>
              <h3 className='text-#282938 text-[38px] font-semibold mr-2'>$499 +</h3>
              <p className='text-#2405F2 text-base0'>Per Design</p>
            </div>

            <p className='text-#282938 text-2xl font-medium leading-9 mb-[10px]'>Complex Project</p>
            <p className='text-#282938 text-base font-medium leading-7 mb-11'>When you’re ready to go beyond prototyping in Figma, </p>
            <ul className='space-y-5 mb-[65px]'>
              <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                  <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_174_502)" stroke-width="3" />
                  <defs>
                    <linearGradient id="paint0_linear_174_502" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className='text-#282938 text-base leading-7 ml-3'>All limited links</p>
              </li>
              <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                  <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_174_502)" stroke-width="3" />
                  <defs>
                    <linearGradient id="paint0_linear_174_502" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className='text-#282938 text-base leading-7 ml-3'>Own analytics platform</p>
              </li>
              <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                  <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_174_502)" stroke-width="3" />
                  <defs>
                    <linearGradient id="paint0_linear_174_502" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className='text-#282938 text-base leading-7 ml-3'>Chat support</p>
              </li>
              <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                  <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_174_408)" stroke-width="3" />
                  <defs>
                    <linearGradient id="paint0_linear_174_408" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className='text-#282938 text-base leading-7 ml-3 '>Optimize hashtags</p>
              </li>
              <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                  <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_174_411)" stroke-width="3" />
                  <defs>
                    <linearGradient id="paint0_linear_174_411" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className='text-#282938  text-base leading-7 ml-3 '>Unlimited users</p>
              </li>
              <li className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                  <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_174_411)" stroke-width="3" />
                  <defs>
                    <linearGradient id="paint0_linear_174_411" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className='text-#282938  text-base leading-7 ml-3 '>Assist and Help</p>
              </li>
            </ul>
            <Link to="/contact" className='aaa:py-4 py-2 aaa:px-[51px] px-5 bg-#282938 w-full max-w-[150px] aaa:max-w-[254px] block mx-auto text-center rounded-[41px] text-white aaa:text-lg text-sm font-semibold leading-8'>Get started</Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Pricing