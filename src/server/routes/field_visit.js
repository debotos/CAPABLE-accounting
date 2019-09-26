const router = require('express').Router()

const FieldVisit = require('../models/FieldVisit')
const auth = require('../middleware/auth')

// @route   GET api/${version}/field_visit
// @desc    get Field Visits
// @access  Public

router.get('/', auth, async (req, res) => {
	try {
		const field_visits = await FieldVisit.find(req.query)
		return res.send(field_visits)
	} catch (error) {
		console.log(error)
		return res.send({ error: true, msg: error.message })
	}
})

// @route   POST api/${version}/field_visit
// @desc    Add a FieldVisit
// @access  Public

router.post('/', auth, async (req, res) => {
	try {
		const field_visit = new FieldVisit(req.body)
		const response = await field_visit.save()
		return res.send(response)
	} catch (error) {
		console.log(error)
		return res.send({ error: true, msg: error.message })
	}
})

// @route   POST api/${version}/field_visit/:id
// @desc    Update a FieldVisit
// @access  Public

router.post('/:id', auth, async (req, res) => {
	try {
		const id = req.params.id
		const response = await FieldVisit.findByIdAndUpdate(id, { $set: req.body }, { new: true })
		return res.send(response)
	} catch (error) {
		console.log(error)
		return res.send({ error: true, msg: error.message })
	}
})

// @route   DELETE api/${version}/field_visit/:id
// @desc    Delete a FieldVisit
// @access  Public

router.delete('/:id', auth, async (req, res) => {
	try {
		const id = req.params.id
		await FieldVisit.findByIdAndDelete(id)
		return res.send({ success: true })
	} catch (error) {
		console.log(error)
		return res.send({ error: true, msg: error.message })
	}
})

module.exports = router
