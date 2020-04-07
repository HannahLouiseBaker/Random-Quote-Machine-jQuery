$(document).ready(() => {
  /*ON LOAD*/
  /*Function to generate quote*/

  let quoteString = "";
  let authorString = "";
  let tweetString = "";
  let tumblrString = "";
  let regex = /\s/g;

  let generateQuote = () => {
    let quoteArr = [["It’s not the years in your life that count. It’s the life in your years.", "Abraham Lincoln"], ["Winning isn’t everything, but wanting to win is.", "Vince Lombardi"], ["If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.", "Oprah Winfrey"], ["You miss 100% of the shots you don’t take.", "Wayne Gretzky"], ["The most common way people give up their power is by thinking they don’t have any.", "Alice Walker"], ["If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.", "Vincent Van Gogh"], ["Life isn’t about getting and having, it’s about giving and being.", "Kevin Kruse"], ["Do what you can, where you are, with what you have.", "Teddy Roosevelt"], ["Remember no one can make you feel inferior without your consent.", "Eleanor Roosevelt"], ["Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.", "Mark Twain"], ["Teach thy tongue to say, “I do not know,” and thous shalt progress.", "Maimonides"], ["If you do what you’ve always done, you’ll get what you’ve always gotten.", "Tony Robbins"], ["The only way to do great work is to love what you do.", "Steve Jobs"], ["Every child is an artist. The problem is how to remain an artist once he grows up.", "Pablo Picasso"], ["The only person you are destined to become is the person you decide to be.", "Ralph Waldo Emerson"], ["I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "Maya Angelou"], ["When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.", "John Lennon"], ["It does not matter how slowly you go as long as you do not stop.", "Confucius"], ["Whether you think you can or you think you can’t, you’re right.", "Henry Ford"], ["There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", "Aristotle"], ["When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", "Henry Ford"], ["Believe you can and you’re halfway there.", "Theodore Roosevelt"], ["Certain things catch your eye, but pursue only those that capture the heart.", "Ancient Indian Proverb"], ["Everything you’ve ever wanted is on the other side of fear.", "George Addair"], ["Too many of us are not living our dreams because we are living our fears.", "Les Brown"], ["Fall seven times and stand up eight.", "Japanese Proverb"], ["Challenges are what make life interesting and overcoming them is what makes life meaningful.", "Joshua J. Marine"], ["I didn’t fail the test. I just found 100 ways to do it wrong.", "Benjamin Franklin"], ["Your time is limited, so don’t waste it living someone else’s life.", "Steve Jobs"], ["If you want to lift yourself up, lift up someone else.", "Booker T. Washington"], ["I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.", "Leonardo da Vinci"], ["Build your own dreams, or someone else will hire you to build theirs.", "Farrah Gray"], ["You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.", "Unknown"], ["Change your thoughts and you change your world.", "Norman Vincent Peale"], ["I have learned over the years that when one’s mind is made up, this diminishes fear.", "Rosa Parks"], ["The best time to plant a tree was 20 years ago. The second best time is now.", "Chinese Proverb"], ["You may be disappointed if you fail, but you are doomed if you don’t try.", "Beverly Sills"], ["Remember that not getting what you want is sometimes a wonderful stroke of luck.", "Dalai Lama"]];
    let index = Math.floor(Math.random() * quoteArr.length);
    quoteString = '"' + quoteArr[index][0] + '"';
    authorString = "- " + quoteArr[index][1];
    tweetString = "https://twitter.com/intent/tweet?hashtags=quotes&text=" + ('"' + quoteArr[index][0] + '" ' + quoteArr[index][1]).replace(regex, '%20');
    tumblrString = "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=" + (quoteArr[index][1]).replace(regex, '%20') + "&content=" + (quoteArr[index][0]).replace(regex, '%20') + "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com";
    }

  generateQuote();

  /*Show initial quote, author etc*/

  $('#quote-text').html(() => {
    return quoteString;
  });

  $('#author-text').html(() => {
    return authorString;
  });

  $('#tweet-quote').attr("href", tweetString);

  $('#tumblr-quote').attr("href", tumblrString);

  $('#new-quote').show();


  /*Assign random color to variable on load*/
  let color = "";

  let generateColor = () =>  {
    let coloursArr = ["#A64253", "#EC4E20", "#861657", "#BBDBB4", "#F6AE2D", "#33658A", "#86BBD8", "#F991CC", "#23CE6B", "#FB9F89", "#21A179", "#119DA4", "#13505B", "#A3CEF1", "#8338EC", "#EE964B", "#444554", "#5B7553", "#D84A05"];
    let index = Math.floor(Math.random() * coloursArr.length);
    color = coloursArr[index];
  }

  generateColor();

  $(".bg-color").css("background-color", color);
  $(".main-color").css("color", color);

  /*BUTTON FUNCTION*/
  /*Change the color and quote/author etc when the New Quote button is clicked*/
  $("#new-quote").on("click", () => {
    generateColor();
    $(".bg-color").css("background-color", color);
    $(".main-color").css("color", color);

    generateQuote();

    $("#quote-text").html(() => {
      return quoteString;
    });

    $("#author-text").html(() => {
      return authorString;
    });

    $("#tweet-quote").attr("href", tweetString);

    $("#tumblr-quote").attr("href", tumblrString);
  });
});
