const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-[72px] py-6">
      <h1 className="font-bold text-base sm:text-lg">
        Lawrence Babelonia <span className="hidden sm:inline font-normal text-gray-500">/ Software Developer</span>
      </h1>

      <ul className="flex gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600">
        <li className="cursor-pointer hover:text-black">ABOUT</li>
        <li className="cursor-pointer hover:text-black">RESUME</li>
        <li className="cursor-pointer hover:text-black">PORTFOLIO</li>
      </ul>
    </nav>
  )
}

export default Navbar
