import ProfileCard from "./profilecard"

const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden min-h-[91vh]">

      {/* Beige background block */}
      <div className="absolute h-full w-[38%] bg-[#e9dfd3]"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center w-full gap-[4%] justify-center">

        {/* Left */}
        <ProfileCard />

        {/* Right */}
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold mb-2">Hello</h1>
          <p className="text-gray-600 mb-6 font-bold">Here's what I can do</p>

          <div className="flex gap-4 mb-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              My Resume
            </button>
            <button className="border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100">
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
