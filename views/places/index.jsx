const React = require('react')
const Def = require('./default')

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2 className="text-center">{place.name}</h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} className="center" width="100%" />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>Places to go crazy for!</h1>
            <div className="row">
              {placesFormatted}
            </div>
        </main>
    </Def>
)
}

module.exports = index