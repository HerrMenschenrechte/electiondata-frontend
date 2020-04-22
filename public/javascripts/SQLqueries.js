exports.getCountryCount = ''

exports.getPostCount = 'SELECT(SELECT count(*) FROM denmark_posts) + (SELECT count(*) from germany_posts) + (SELECT count(*) from uk_posts) + (SELECT count(*) from france_posts) AS count'

exports.getLatestUpdate = 'SELECT(SELECT max(data_insert_timestamp)  FROM france_posts) AS date '