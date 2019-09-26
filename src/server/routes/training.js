const router = require('express').Router()

const Training = require('../models/Training')
const auth = require('../middleware/auth')

// @route   GET api/${version}/training
// @desc    get Training List
// @access  Public

router.get('/', auth, async (req, res) => {
	try {
		const training = await Training.find(req.query)
		return res.send(training)
	} catch (error) {
		console.log(error)
		return res.send({ error: true, msg: error.message })
	}
})

// @route   POST api/${version}/training
// @desc    Add a Training
// @access  Public

router.post('/', auth, async (req, res) => {
	try {
		const training = new Training(req.body)
		const response = await training.save()
		return res.send(response)
	} catch (error) {
		console.log(error)
		return res.send({ error: true, msg: error.message })
	}
})

// @route   POST api/${version}/training/:id
// @desc    Update a Training
// @access  Public

router.post('/:id', auth, async (req, res) => {
	try {
		const id = req.params.id
		const response = await Training.findByIdAndUpdate(id, { $set: req.body }, { new: true })
		return res.send(response)
	} catch (error) {
		console.log(error)
		return res.send({ error: true, msg: error.message })
	}
})

// @route   DELETE api/${version}/training/:id
// @desc    Delete a Training
// @access  Public

router.delete('/:id', auth, async (req, res) => {
	try {
		const id = req.params.id
		await Training.findByIdAndDelete(id)
		return res.send({ success: true })
	} catch (error) {
		console.log(error)
		return res.send({ error: true, msg: error.message })
	}
})

module.exports = router
