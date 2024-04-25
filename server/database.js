require('dotenv').config()
const mysql = require('mysql2/promise');

// Create the connection to database
const pool = mysql.createPool({
    host: process.env.DB_HOST_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

  async function query(sql, params) {
    const [rows, fields] = await pool.query(sql, params);
    return rows;
  }
  
  async function getAllUsers() {
    const sql = 'SELECT * FROM users';
    return await query(sql);
  }
  
  async function getUserById(userId) {
    const sql = 'SELECT * FROM users WHERE id = ?';
    return await query(sql, [userId]);
  }
  
  async function insertUser(id,first_name, last_name,age,height,gender,weight, email, password, active, insertData, updateData) {
    const sql = 'INSERT INTO users (id,first_name,last_name,age,height,gender,weight, email, password,active,insertData,updateData) VALUES (?, ?, ?, ?, ?, ?, ? ,? ,? ,? ,? ,? )';
    return await query(sql, [id,first_name, last_name,age,height,gender,weight, email, password, active, insertData, updateData]);
  }
  
  async function deleteUserById(userId){
    const sql = 'DELETE from users where id = ? ';
    return await query(sql, [userId]);
  }

  async function updateUserById(column, userId, newData){
    const sql = 'UPDATE users SET column_name = ? WHERE id = ? ';
    return await query(sql, [column , newData, userId ]);
  }

  async function query(sql, params) {
    const [rows, fields] = await pool.query(sql, params);
    return rows;
}

  async function showMenu(menuId){
    const sql = 'SELECT * FROM menu';
    return await query(sql, [menuId]);
  }

  async function deleteItemMenuById(menuId){
    const sql = 'DELETE from menu where id = ?' ;
    return await query (sql , [menuId]);
  }

  async function showPrograms(programsId){
    const sql = 'SELECT * FROM programs  ';
    return await query(sql, [programsId]);
  }  

  async function deleteItemProgramsById(programsId){
    const sql = 'DELETE from programs where id = ?' ;
    return await query (sql , [programsId]);
  }

  module.exports = {
    query,
    getAllUsers,
    getUserById,
    insertUser,
    deleteUserById,
    updateUserById,
    query,
    showMenu,
    deleteItemMenuById,
    showPrograms,
    deleteItemProgramsById
  }
