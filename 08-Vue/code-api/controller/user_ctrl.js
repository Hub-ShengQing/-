import db from '../db/index.js'

export async function getAllUser(req, res) {
  const [result] = await db.query('select id, username, nickname from ev_users')

  res.send({
    status: 0,
    messsage: 'dsa',
    data: result,
  })
}

getAllUser()
