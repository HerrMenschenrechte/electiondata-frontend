let db = require('./db')
let sql = require('./SQLqueries')
let moment = require('moment')


exports.loadTiles = async function () {

    let data = []

    let connection = await db.createPool().catch(err => console.log(err))

    //  await loadLocation(connection)
    let postCount = await loadPostCount(connection).catch(err => console.log(err))
    let lastUpdate = await loadUpdate(connection).catch(err => console.log(err))
    let date = moment(lastUpdate[0].date).format('MMMM Do YYYY')
    data.push(postCount[0].count, date)

    return data

}


async function loadPostCount(connection) {

    let data = await connection.query(sql.getPostCount).catch(err => console.log(err))

    return data

}

async function loadUpdate(connection) {

    let update = await connection.query(sql.getLatestUpdate).catch(err => console.log(err))

    return update


}

