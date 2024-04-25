const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', async (req, res) => {
  try {
      var data = await db.showPrograms();
      res.status(201).json({ message: 'you got a programs', data: data });

  } catch (error) {
      console.error('Error get programs:', error);
      res.status(500).json({ error: 'Error get programs' });
  }
}); 

router.delete('/:id', async (req, res) => {
  const programsId = req.params.id;
  try {
      var data = await db.deleteItemProgramsById(programsId);
      res.status(201).json({ message: 'User deleted successfully', data: data });

  } catch (error) {
      console.error('Error deleted users:', error);
      res.status(500).json({ error: 'Error deleted users' });
  }
});



module.exports = router;
