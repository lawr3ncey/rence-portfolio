import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-md p-6 w-[22rem] text-center">
      <img
        src="../images/profile.jpg"
        alt="profile"
        className="w-[196px] h-[196px] rounded-full mx-auto mb-[2rem]"
      />

      <h2 className="font-bold text-2xl">Lawrence Babelonia</h2>
      <p className="text-sm text-gray-500 mb-4">Software Developer</p>

      <div className="w-10 h-1 bg-blue-500 mx-auto mb-4"></div>

      <p className="text-xs text-gray-400 uppercase tracking-widest mb-[3rem]">
        Developer Portfolio
      </p>

      {/* Icon section */}
      <div className="flex justify-center gap-2">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition"
        >
          <FaLinkedinIn className="text-lg" />
        </a>

        <a
          href="https://facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition"
        >
          <FaFacebookF className="text-lg" />
        </a>

        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="
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
