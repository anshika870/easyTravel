import { Link } from "react-router-dom"

function Home() {

  return (

    <div className="min-h-screen bg-gray-100">


      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md">

        <h1 className="text-3xl font-bold text-blue-600">
          EasyTravel
        </h1>

      </nav>



      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-24">

        <h1 className="text-6xl font-bold mb-6">
          Travel Made Easy
        </h1>

        <p className="text-xl">
          Smart transport for every journey.
        </p>

      </section>



      {/* Cards */}
      <section className="px-10 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">


          {/* School Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition">

            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-3xl font-bold text-yellow-600 mb-4">
                School Transport
              </h2>

              <p className="text-gray-600 mb-6">
                Safe and secure rides for students.
              </p>

              <Link to="/school">

                <button className="bg-yellow-500 text-white px-6 py-3 rounded-xl">
                  Explore
                </button>

              </Link>

            </div>

          </div>



          {/* Luxury Cars */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition">

            <img
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-3xl font-bold text-blue-600 mb-4">
                Luxury Cars
              </h2>

              <p className="text-gray-600 mb-6">
                Premium rides for special occasions.
              </p>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
                Explore
              </button>

            </div>

          </div>



          {/* Tours */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition">

            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-3xl font-bold text-purple-600 mb-4">
                Tour Packages
              </h2>

              <p className="text-gray-600 mb-6">
                Amazing travel experiences.
              </p>

              <button className="bg-purple-600 text-white px-6 py-3 rounded-xl">
                Explore
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>

  )

}

export default Home