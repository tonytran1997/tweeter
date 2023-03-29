/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
  for (let obj of tweets) {
    $('#container').prepend(createTweetElement(obj));
  }
};

const createTweetElement = function(tweet) {
  let $tweet = `
    <article>
      <header>
        <div class="tweet-avatar-name">
          <img src=${tweetData.user.avatars}>
          <h3>${tweetData.user.name}</h3>
        </div>
        <h4>${tweetData.user.handle}</h4>
      </header>
      <div class="tweet-content">
        ${tweetData.content.text} 
      </div>
      <footer>
        <div>${moment(tweetData.created_at).fromNow()}</div>
        <div class="icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article>`;
  return $tweet; 
};

renderTweets(data);

$(document).ready(function() {
  $("#new-tweets").submit(function(event) {
    event.preventDefault();
    console.log("Tweeter!")
  })
});