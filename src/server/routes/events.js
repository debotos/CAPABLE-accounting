const router = require('express').Router()

const Events = require('../models/Events')
const auth = require('../middleware/auth')

// @route   GET api/${version}/events
// @desc    get Events
// @access  Public

router.get('/', auth, async (req, res) => {
	try {
		const events = await Events.find(req.query)
		return res.send(events)
	} catch (error) {
		console.log(error)
		return res.send({ error: true, msg: error.message })
	}
})

// @route   POST api/${version}/events
// @desc    Add a Event
// @access  Public

router.post('/', auth, async (req, res) => {
	try {
		const event = new Events(req.body)
		const response = await event.save()
		return res.send(response)
	} catch (error) {
		console.log(error)
		return res.send({ error: true, msg: error.message })
	}
})

// @route   POST api/${version}/events/:id
// @desc    Update a Event
// @access  Public

router.post('/:id', auth, async (req, res) => {
	try {
		const id = req.params.id
		const response = await Events.findByIdAndUpdate(id, { $set: req.body }, { new: true })
		return res.send(response)
	} catch (error) {
		console.log(error)
		return res.send({ error: true, msg: error.message })
	}
})

// @route   DELETE api/${version}/events/:id
// @desc    Delete a Event
// @access  Public

router.delete('/:id', auth, async (req, res) => {
	try {
		const id = req.params.id
		await Events.findByIdAndDelete(id)
		return res.send({ success: true })
	} catch (error) {
		console.log(error)
		return res.send({ error: true, msg: error.message })
	}
})

module.exports = router
