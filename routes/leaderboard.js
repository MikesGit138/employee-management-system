const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

const connection = require('../database/db')

router.get('/leaderboard', (req, res) =>{
   let sql = "select * from friends group by first_name order by min(points) desc"
   let sql2 = 'SELECT COUNT(id) AS friendCount FROM friends'
   let query = connection.query(sql, (err, rows) =>{
      let countQuery = connection.query(sql2, (err, count) =>{
         res.render('leaderboard',{
            table: 'Friends',
            friends: rows,
            count : count[0].friendCount 
         })
      })
})
})

module.exports = router