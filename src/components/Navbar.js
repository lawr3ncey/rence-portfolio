const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <h1 className="font-bold text-lg">
        Lawrence Babelonia <span className="font-normal text-gray-500">/ Software Developer</span>
      </h1>

      <ul className="flex gap-6 text-sm text-gray-600">
        <li className="cursor-pointer hover:text-black">ABOUT</li>
        <li className="cursor-pointer hover:text-black">RESUME</li>
        <li className="cursor-pointer hover:text-black">PORTFOLIO</li>
      </ul>
    </nav>
  )
}

export default Navbar
