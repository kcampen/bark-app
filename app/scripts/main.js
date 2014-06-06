console.log('\'Allo \'Allo!');

var Userprofile = {
    name: "Moon Unit",
    location: "Table Top Rock",
    avatar: "images/bird.png",
};

var Tweet = function(Userprofile) {
    this.tweetID = _.uniqueId('tweet');
    this.name = Userprofile.name;
    this.location = $('.sharelocation').val();
    this.msg = $('.share').val();
    this.avatar = Userprofile.avatar;
    this.time = 'Feb 4, 2014'
    this.isFavorite = false;
};

var postTemplate = _.template($('.tweet-template').text());


$('.tweetbutton').click(function(){
    var tweet = new Tweet(Userprofile);
    $('.stream').prepend(postTemplate(tweet));
});

tweetArray=[];


function setCurrentUser(user) {
    currentUser = user;
    $('.tweetnum > .num').text(user.numTweets);
    $('.following > .num').text(user.following.length);
    $('.locations > .num').text(user.trails.length);
    $('.profpic img').attr("src", user.avatar);
    $('.profname').text(user.name);
    $('.proflocation').text(user.location);
    $('.sharelocation').val(user.location);
    $('.profile-chooser > .avatar > img').attr("src", user.avatar);
    $('.profile-chooser > .name').text(user.name);
    return user;
}