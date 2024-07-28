import React from 'react'
import linkedin from "../assets/linkedin.webp"
import github from "../assets/Github.jpg"
import leetcode from "../assets/leetcode.webp"
import codechef from "../assets/codechef_new.png"
import MY_LOGO from "../assets/my_logo-new.png"

const Footer = () => {
  return (
    <div>
           <footer className="bg-gradient-to-b from-gray-800
     to-black w-full ">
      <div className="w-full mflex flex-col md:flex-row gap-5 justify-center items-center md:justify-between text-center py-5 md:text-right bg-gray-800ax-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-gray-50 text-md md:mr-2 font-bold">Created by Aarti ☘️</p>
          <div className="flex flex-row gap-5 justify-center items-center ml-5">
              <a href="https://www.linkedin.com/in/aarti-sushmesh" className="hover:underline me-4 md:me-6">
                <img src={linkedin} alt="LinkedIn" width="30"
                height="30"
                className="hover:scale-125 transition-all duration-100"  />
              </a>
              <a href="https://github.com/Aartisushmesh29/" className="hover:underline me-4 md:me-6">
                <img src={github} alt="GitHub" width="30"
                height="30"
                className="hover:scale-125 transition-all duration-100" />
              </a>
              <a href="https://leetcode.com/u/aartisushmesh/" className="hover:underline me-4 md:me-6">
                <img src={leetcode} alt="LeetCode"  width="30"
                height="30"
                className="hover:scale-125 transition-all duration-100"  />
              </a>
              <a href="https://www.codechef.com/users/aartii_sushh" className="hover:underline">
                <img src={codechef} alt="CodeChef"  width="30"
                height="30"
                className="hover:scale-125 transition-all duration-100"  />
              </a>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </div>
    </footer>
    </div>
  )
}

export default Footer
