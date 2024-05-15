const express = require('express');
const cors = require('cors');
// import routers 
const usersRouter = require('./routers/users');
const menuRouter = require('./routers/menu');
const programsRouter = require('./routers/programs');

const app = express()
const port = 3002

app.use(express.json());
app.use(cors())

app.use('/users', usersRouter);
app.use('/menu', menuRouter);
app.use('/programs', programsRouter);

// app.use('/',async(req,res)=>{
//   try {
//     var data = await db.getAllUsers();
//      res.status(201).json({ message: 'User added successfully' , data:data});
//  } catch (error) {
//      console.error('Error get all users:', error);
//      res.status(500).json({ error: 'Error getting users' });
//  }
// });


app.get('/', async(req, res)=>{
  res.status(202).json({message: 'welcome my friend'});
  // res.status(404).json({message: 'error login'});
} )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})