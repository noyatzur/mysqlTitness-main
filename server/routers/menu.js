const express = require('express');
const router = express.Router();
const db = require('../database');



  router.get('/', async (req, res) => {
  try {
      var data = await db.showMenu();
      res.status(201).json({ message: 'you got a menu', data: data });

  } catch (error) {
      console.error('Error get menu:', error);
      res.status(500).json({ error: 'Error get menu' });
  }
});

router.delete('/:id', async (req, res) => {
  const menuId = req.params.id;
  try {
      var data = await db.deleteItemMenuById(menuId);
      res.status(201).json({ message: 'User deleted successfully', data: data });

  } catch (error) {
      console.error('Error deleted users:', error);
      res.status(500).json({ error: 'Error deleted users' });
  }
});

module.exports = router;

// GET /menu/:id
// router.get('/:id', async (req, res) => {
//   const menuItemId = req.params.id;
//   try {
//       var data = await db.getUserById(menuItemId);
//       res.status(201).json({ message: 'User added successfully', data: data });

//   } catch (error) {
//       console.error('Error get all users:', error);
//       res.status(500).json({ error: 'Error getting user by id' });
//   }
// });
  
// GET /menu/:id
// router.get('/:id', async (req, res) => {
//   const menuItemId = req.params.id;
//   try {
//       var data = await db.getUserById(menuItemId);
//       res.status(201).json({ message: 'User added successfully', data: data });

//   } catch (error) {
//       console.error('Error get all users:', error);
//       res.status(500).json({ error: 'Error getting user by id' });
//   }
// });


// router.get('/', async (req, res) => {
//   try {
//       var data = await db.showMenuBYId();
//       res.status(201).json({ message: 'you got a menu', data: data });

//   } catch (error) {
//       console.error('Error get menu:', error);
//       res.status(500).json({ error: 'Error get menu' });
//   }
// });

  // router.post('/' , async (req, res)=>{
  //   const { id, name, amount_of_grams, Calories, family }= req.body;
    
  //   if( !id|| !name || !amount_of_grams || !Calories || !family){
  //     return res.status(400).json({ error: 'need to check for empty required field' });
  //   }
  //   try{
  //     await db.showMenuBYId(id, name, amount_of_grams, Calories, family);
  //     res.status(201).json({ message: 'Menu showed successfully' });
  //   }catch (err){
  //     console.error('Error show menu:', err);
  //     res.status(500).json({ error: 'Error show menu' });

  //   }
  // });

  // router.delete('/:id' , async (req,res)=>{
  //   const menuId = req.params.id;
  //   try{
  //     var data= await db.deleteItemById(menuId);
  //     res.status(201).json({ message: 'item deleted successfully', data: data });
  //   } catch (error){
  //     console.error('Error deleted item:', error);
  //     res.status(500).json({ error: 'Error deleted item' });
  //   }
  // });