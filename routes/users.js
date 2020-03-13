const service = require('../service/userService')

var express = require('express');
var router = express.Router();

/* GET users listing. */

router.post('/login',(req, res, next) =>{ 
  service.login(req.body).then(result => {
    res.send(result)  
  })
});

router.post('/add',(req, res, next) =>{ 

  service.addUser(req.body).then(result => {
      res.send(result)  
  })
});


router.get('/list',(req, res, next) =>{
  service.userList(req, res, next).then(result =>{
    res.json(result)
  })

});

router.get('/:id',(req, res, next) =>{
  const lastIndexOf = req.path.lastIndexOf("/")
  const id = Number(req.path.substr(lastIndexOf + 1))

  service.queryById(id).then(result =>{
    res.send(JSON.stringify(result))
  })

});


router.delete('/delete/:id',(req, res, next) =>{
  const lastIndexOf = req.path.lastIndexOf("/")
  const id = req.path.substr(lastIndexOf + 1)
  console.log('物理删除',id)
  service.deleteUser(id).then(result =>{
    res.send(JSON.stringify(result))
  })

});



router.put('/delete/:id',(req, res, next) =>{

  const lastIndexOf = req.path.lastIndexOf("/")
  const id = req.path.substr(lastIndexOf + 1)
  console.log('逻辑删除',id)
  service.updateUserStatu(id).then(result =>{
    res.send(JSON.stringify(result))
  })

});



router.get('/cool', (req, res, next) => {
  res.send('你好酷');
});



module.exports = router;
