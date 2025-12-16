import ProfileCard from "./profilecard"

const Hero = () => {
  return (
    <section className="flex items-center min-h-[80vh] py-8 md:py-0">

      {/* Beige background block - hidden on mobile, visible on larger screens */}

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center w-full gap-6 md:gap-[4%] justify-center px-4 sm:px-8 md:px-12">

        {/* Left - Profile Card */}
        <ProfileCard />

        {/* Right - Hero Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Hello</h1>
          <p className="text-gray-600 mb-6 font-bold text-base sm:text-lg">Here's what I can do</p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 text-sm sm:text-base">
              My Resume
            </button>
            <button className="border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 text-sm sm:text-base">
              My Portfolio
            </button>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            I am a software developer who builds responsive and user-friendly web applications using modern technologies. 
            I also have experience developing applications using Unity and React Native. 
            I focus on clean design, accessibility, and performance, and I enjoy turning ideas into functional, 
            well-structured solutions.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Hero
