const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
        <main>
            <h1>HOME</h1>
            <div>
              <img src="/images/burritos.jpg" alt="Taco Bell" />
              <div>
                Photo by Me
              </div>
            </div>
        </main>
    </Def>
  )
}


module.exports = home