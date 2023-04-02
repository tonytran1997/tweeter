/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


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


const loadTweets = () => {
  $.ajax ({
    url:"/tweets",
    method: 'GET'
  })
  .then((data) => {
    renderTweets(data);
  })
};

$(document).ready(function() {
  loadTweets()
  $("#new-tweets").submit(function(event) {
    event.preventDefault();
    console.log("Tweeter!")
  })
});

const message = $(this).children("#tweet-text")  ;
  if (!message.val()) {
    alert("You haven't tweeted anything!")
    return false;
  }
  if (!message.val.length > 140) {
    alert("Your tweet is too long!")
    return false;
  }
  
