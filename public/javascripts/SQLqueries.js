exports.getCountryCount = ''

exports.getPostCount = 'SELECT(SELECT count(*) FROM denmark_posts) + (SELECT count(*) from germany_posts) AS count'

exports.getLatestUpdate = 'SELECT(SELECT max(data_insert_timestamp)  FROM denmark_posts) AS date '