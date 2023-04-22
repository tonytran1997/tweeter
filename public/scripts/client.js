/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const renderTweets = function(tweets) {
  for (let obj of tweets) {
    $('.tweet-container').prepend(createTweetElement(obj));
  }
};

const createTweetElement = function(tweetData) {
  const $tweet = `
    <article>
      <header class="tweet-head">
        <div>
          <img src=${tweetData.user.avatars}/>
          <span>${tweetData.user.name}</span>
        </div>
        <div>
          <span>${tweetData.user.handle}</span>
        </div>
      </header>
      <div>
        <span>${tweetData.content.text}</span>
      </div>
      <footer class="tweet-foot">
        <div>
          <span>${timeago.format(tweetData.created_at)}</span>
        </div>
        <div class="tweet-reactions"> 
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article>
  `;
  return $tweet;
};

//GET tweets from /tweets
const loadTweets = () => {
  $.ajax ({
    url:"/tweets",
    method: 'GET'
  })
  .then((data) => {
    console.log(data),
    renderTweets(data);
  })
};

$(document).ready(function() {

  loadTweets()

  //Submit the form data without the page to refresh
  $("form").submit(function(event) {
    event.preventDefault();
    const tweetText = $('#tweet-text').val().length;
    const message = $(this).children("#tweet-text");
    if (tweetText == 0) {
      $('#errorMessage').css('visibility', 'visible');
      $('#errorMessage').val("You haven't tweeted anything!");
    }
    else if (tweetText > 140) {
      $('#errorMessage').css('visibility', 'visible');
      $('#errorMessage').val("Your tweet is too long!");
    } else {
      $('#errorMessage').css('visibility', 'hidden');  
      $.ajax ({
        url:"/tweets",
        method: 'POST',
        data: $(this).serialize()
      })
      .then((data) => {
        $.get("/tweets", (server) => {
          const newTweets = server.slice(-1)
          renderTweets(newTweets);
        })
        $('#tweet-text').value = "";
      })
      $(this)
        .closest(".new-tweet")
        .find(".counter")
        .removeClass("negative-count")
        .text(140)

      console.log("Tweeter!")
    }
  })
});
