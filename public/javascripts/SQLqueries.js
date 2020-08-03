exports.getCountryCount = ''

exports.getPostCount = 'SELECT (SELECT count(*) FROM india_posts) + (SELECT count(*) FROM  us_posts) + (SELECT count(*) FROM australia_posts) + (SELECT count(*) FROM denmark_posts) + (SELECT count(*) from germany_posts) + (SELECT count(*) from uk_posts) + (SELECT count(*) from france_posts) + (SELECT count(*) from hungary_posts) + (SELECT count(*) from slovakia_posts) AS count'

exports.getLatestUpdate = 'SELECT(SELECT max(data_insert_timestamp)  FROM india_posts) AS date '