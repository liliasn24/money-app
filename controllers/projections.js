const Projection = require('../models/projection');
const router = require('express').Router();


//  CREATE
router.post('/', async(req, res) => {
  try{
    const createdProjection = await Projection.create(req.body)
    res.status(200).json(createdProjection)
  }catch(error){
    console.error(error)
    res.status(400).json({ message: error.message})
  }
})


//  READ
//  index

  router.get('/', async(req, res) => {
    try{
      const foundProjection = await Projection.find({})
      res.status(200).json(foundProjection)
    }catch(error){
      console.error(error)
      res.status(400).json({ message: error.message})
    }
  })


// show

  router.get('/:id', async(req, res) => {
  try{
    const foundProjection = await Projection.findById(req.params.id)
    res.status(200).json(foundProjection)
  }catch(error){
    console.error(error);
    res.status(400).json({message: error.message})
  }
})


//  UPDATE
//  update projection

router.put('/:id', async(req, res) => {
    try{
      const updatedProjection = await Projection.findByIdAndUpdate(req.params.id, req.body, { new: true})
      res.status(200).json(updatedProjection)
    }catch(error){
      console.error(error);
      res.status(400).json({ message: error.message })
    }
  })


//  DELETE

router.delete('/:id', async(req, res) => {
  try{
    const deletedProjection = await Projection.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedProjection)
  }catch(error){
    console.error(error);
    res.status(400).json({ message: error.message})
  }
})

module.exports = router;
