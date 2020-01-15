const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const user = {
    name: 'Ahsan',
    age: 47,
    occupation: 'Business',
    relationship: 'Married'
  }
  res.send(user)
})


module.exports = router;