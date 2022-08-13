const React = require('react')
const Def = require('./default')

function error404 () {
  return (
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <img src="images/wrong.jpg" alt="You've come to the wrong place" />
            <p>Oops, we can't find this page! LOL</p>
        </main>
    </Def>
  )
}


module.exports = error404
