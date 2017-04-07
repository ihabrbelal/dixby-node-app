console.log('this is loaded');


var twitter = require('twitter');
var config = {
    consumer_key: 'aFAFI4gUj22buW8eZe4XazBmk',
    consumer_secret: 'xQ4E8gq4Yv2nwDwOB6XjEeKfArDDJigAYF9QwW4M62fkyZbwsk',
    access_token_key: '849678238603522056-PSUhWPzPhXv23FfekEOusKcsRkbHc4T',
    access_token_secret: 'fsAlYgacAMqDqe79zJMLTROXhQbvGYOVmuk8oyGU7fxkm',
};
var client = new twitter(config);

/*
client.post('statuses/update', { status: 'testing ...  ' }, function(error, tweet, response) {
    if (!error) {
        console.log(tweet);
    }
});
*/

// client.get('statuses/user_timeline', { count: 19 }, function(error, tweet, response) {
//         if (!error) {
//             for (var i = 0; i < tweet.length; i++) {
//                 console.log((tweet)[i].text);

//             }
//         }
//     })
/*

twitter.get('search/tweets', { q: 'node.js' }, function(error, tweets, response) {
    console.log(tweets);
});
*/

module.exports.client = client;
