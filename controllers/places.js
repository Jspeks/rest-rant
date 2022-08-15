const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/', (req, res) => {
    let places = [{
        name: 'Mitsuwa',
        city: 'Edgewater',
        state: 'NJ',
        cuisines: 'Japanese',
        pic: '/images/omuRice.jpg'
        }, {
        name: 'Jimmy Johns',
        city: 'Herriman',
        state: 'UT',
        cuisines: 'Sandwich, Bakery',
        pic: '/images/jimmyJohns.jpg'
        }]
        
    res.render('places/index', { places })
})

module.exports = router