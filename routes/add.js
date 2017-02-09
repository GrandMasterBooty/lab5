var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
  var name = req.query.name;
  var desc = req.query.description;

  var friend = {
      'imageURL' : 'http://lorempixel.com/500/500/people',
      'name' : name,
      'description' : desc,
  };

  data.friends.push(friend);
  res.render('index',data);
 }
