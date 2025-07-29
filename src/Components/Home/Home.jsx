import { FaFigma } from 'react-icons/fa'
import { LuLightbulb } from 'react-icons/lu'
import { FaArrowRightLong } from 'react-icons/fa6'
import { MdFileDownload } from 'react-icons/md'
import { cv, pp } from '../../image/image'
import { Link } from 'react-router'

const Button = ({ children, href, download, ...props }) => {
  const baseClasses =
    'px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
  const secondaryClasses =
    'border-2 border-gray-400 hover:border-gray-600 text-gray-700 hover:text-gray-900 flex items-center justify-center gap-2 focus-visible:ring-gray-500'

  if (href) {
    return (
      <a
        href={href}
        download={download}
        {...props}
        className="flex items-center justify-center px-5 py-3 rounded-lg gap-2 border-2 hover:bg-gray-400 w-full sm:w-auto text-center"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`${baseClasses} ${secondaryClasses}`}
      {...props}
    >
      {children}
    </button>
  )
}

const Home = () => {
  return (
    <div className="flex mt-[80px]">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-[100px] items-center">
          {/* Left Content */}
          <section className="space-y-6" aria-label="Introduction and call to action">
            <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
              Aspiring UI/UX Designer
            </span>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm Prabal Aryal
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-teal-600">
                UI/UX Designer
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              A passionate beginner designer focused on creating intuitive and engaging digital experiences. Currently
              learning and growing in the field of UI/UX design.
            </p>

            {/* Updated button layout */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 pt-4 w-full max-w-md">
              <Link
                to="/projects"
                className="flex items-center justify-center px-5 py-3 rounded-lg gap-3 bg-[#0D9488] text-white hover:bg-[#0D9488]/80 w-full sm:w-auto text-center"
              >
                View My Projects <FaArrowRightLong />
              </Link>
              <Button download href={cv}>
                <MdFileDownload /> Download Resume
              </Button>
            </div>
          </section>

          {/* Right Content - Profile Photo */}
          <aside className="p-6 bg-[#D6EFF9] rounded-3xl w-fit" aria-label="Profile photo">
            <div className="relative backdrop-blur-sm rounded-3xl">
              <img
                src={pp}
                alt="Prabal Aryal - UI/UX Designer"
                className="rounded-2xl object-cover w-[400px] h-[500px]"
              />

              {/* Decorative Icons */}
              <div
                className="absolute -top-4 -right-4 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center"
                aria-hidden="true"
              >
                <FaFigma className="w-6 h-6 text-current" />
              </div>

              <div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-yellow-100 shadow-lg rounded-full flex items-center justify-center"
                aria-hidden="true"
              >
                <LuLightbulb className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

export default Home
