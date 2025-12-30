import React from 'react';
import { FaGithub, FaFacebookF, FaInstagram } from "react-icons/fa";

const ProfileCard: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-md px-[45px] py-2 w-full max-w-[22rem] text-center">
      <img
        src="/images/profile.jpg"
        alt="profile"
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-[196px] md:h-[196px] rounded-full mx-auto mb-6 mt-6 md:mb-[2rem]"
      />

      <h2 className="font-bold text-2xl">Lawrence Babelonia</h2>
      <p className="text-sm text-gray-500 mb-4">Software Developer</p>

      <div className="w-10 h-1 bg-blue-500 mx-auto mb-[31px]"> </div>

      <p className="text-xs text-gray-400 uppercase tracking-widest mb-[1rem]">
        CONNECT WITH ME
      </p>

      {/* Icon section */}
      <div className="flex justify-center gap-2">
        <a
          href="https://github.com/lawr3ncey"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4b5563] w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-black hover:text-white transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4b5563] w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition"
        >
          <FaFacebookF className="text-lg" />
        </a>

        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="
          text-[#4b5563]
            group
            w-10 h-10
            flex items-center justify-center
            rounded-full
            bg-gray-100
            transition
            hover:bg-gradient-to-tr
            hover:from-yellow-400
            hover:via-pink-500
            hover:to-purple-600
          "
        >
          <FaInstagram className="text-lg group-hover:text-white transition" />
        </a>
      </div>

    </div>
  )
}

export default ProfileCard
