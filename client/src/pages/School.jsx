import axios from "axios"
import { useEffect, useState } from "react"

function School() {

  const [schools, setSchools] = useState([])
  const [search, setSearch] = useState("")



  useEffect(() => {

    axios.get("http://localhost:5000/schools")
      .then((res) => {
        setSchools(res.data)
      })

  }, [])



  const filteredSchools = schools.filter((school) => {

    const searchText = search.toLowerCase()
  
    return (
  
      school.schoolName?.toLowerCase().includes(searchText) ||
  
      school.city?.toLowerCase().includes(searchText)
  
    )
  
  })
  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-center text-yellow-600 mb-10">
        Search Your School
      </h1>



      <div className="flex justify-center mb-16">

        <input
          type="text"
          placeholder="Enter School Name or City..."
          className="w-full max-w-2xl p-5 rounded-2xl border text-xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {filteredSchools.map((school, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-8"
          >

            <h2 className="text-3xl font-bold text-blue-600 mb-8">
              {school.schoolName}
            </h2>



            {school.vehicles.map((vehicle, i) => (

              <div
                key={i}
                className="border rounded-2xl p-5 mb-5"
              >

                <h3 className="text-2xl font-bold mb-3">
                  {vehicle.name}
                </h3>

                <p className="text-gray-600">
                  Seats: {vehicle.seats}
                </p>

                <p className="text-gray-600 mb-4">
                  Price: ₹{vehicle.price}
                </p>

                <button className="bg-blue-600 text-white px-5 py-2 rounded-xl">
                  Book Now
                </button>

              </div>

            ))}

          </div>

        ))}

      </div>

    </div>

  )

}

export default School