const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', async (req, res) => {
    try {
        var data = await db.getAllUsers();
        res.status(201).json({ message: 'you got a users', data: data });

    } catch (error) {
        console.error('Error get all users:', error);
        res.status(500).json({ error: 'Error getting users' });
    }
});
router.get('/:email', async (req, res) => {
    const email = req.params.email;
    const newData = req.body; 
    console.log('email:', email, 'newData:', newData);
    try {
        var data = await db.getUserByEmail(email);
        console.log('users.js data:', data);
        res.status(201).json({ message: 'you got a users throw email', data: data });
       
    } catch (error) {
        console.error('Error get all users:', error);
        res.status(500).json({ error: 'Error getting users' });
    }
});

router.post('/', async (req, res) => {   // callback
    const { first_name, last_name, Birth_day, height, gender, weight, email, password, insertData, updateData } = req.body; //distructure way
    // סוגריים מסולסלים מייצגים אובייקט

    // Check if name and email are provided
      if(!first_name || !last_name || !Birth_day || !height || !gender || !weight || !email || !password || !insertData || !updateData) {
        return res.status(400).json({ error: 'need to check for empty required field' });
    }

    // Insert the user into the database
    try {
        await db.insertUser( first_name, last_name, Birth_day, height, gender,weight, email, password,  insertData, updateData);
        res.status(201).json({ message: 'User added successfully' });
    } catch (err) {
        console.error('Error inserting user:', err);
        res.status(500).json({ error: 'Error inserting user' });
    }
});

// router.delete('/:id', async (req, res) => {
//     const usersId = req.params.id;
//     try {
//         var data = await db.deleteUserById(usersId);
//         res.status(201).json({ message: 'User deleted successfully', data: data });

//     } catch (error) {
//         console.error('Error deleted users:', error);
//         res.status(500).json({ error: 'Error deleted users' });
//     }
// });

router.put('/:id',async(req,res)=>{
    const usersId = req.params.id;
    const newData = req.body; 
    try {
        await updateUserById(usersId,newData);
        res.json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Error updating user' });
    }
});


module.exports = router;
