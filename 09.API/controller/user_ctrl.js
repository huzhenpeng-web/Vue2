import db from '../db/index.js'

export async function getAllUser(req, res) {
  try {
    const [rows] = await db.query('select id ,username,nickname from ev_users')
    console.log(rows);
    res.send({
      status: 0,
      message: '获取列表数据成功',
      data: rows
    })
  } catch (error) {
    res.send({
      status: 1,
      message: '获取用户失败',
      data: err.message
    })
  }
}