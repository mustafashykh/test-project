const express = require('express');
const router = express.Router();

let users = [
  {
    name: 'Ahsan',
    age: 47,
    occupation: 'Business',
    relationship: 'Married'
  },
  {
    name: 'Ahmad',
    age: 23,
    occupation: 'Freelancer',
    relationship: 'Shadeed Single'
  }
]

router.get('/', async (req, res) => {
  return res.send(users)
})

router.get('/:name', async (req, res) => {
  const { name } = req.params;
  
  users.forEach(user => {
    if(user.name === name ){
      return res.send(user).status(200);
    }
  })
  return res.send('No user found').status(404);
  
})

router.post('/', async(req, res) => {
  const { user } = req.body;

  users.push(user) 

  return res.send(user).status(200);
})

router.put('/', async(req, res) => {
  const { updatedUser } = req.body;

  try {
    users.forEach( user => {
      if( user.name === updatedUser.name){
        users = users.filter((x) => {
          return x != updatedUser
        })
        
        users.push(updatedUser);
        return res.send(updatedUser).status(200);
      }
    })
    return res.send("no user was found").status(404);
  }catch(e) {
    return res.send("something went wrong").status(403);
  }
   
})



router.delete('/' , async(req, res) => {
  const { user } = req.body;
  try{
    users = users.filter((x) => {
      return x.name != user.name
    })
    return res.send(user).status(200);
  }
  catch(e){
    return res.send('something went wrong').status(403);
  }
})


module.exports = router;