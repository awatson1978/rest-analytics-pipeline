
Meteor.startup(function(){
  Meteor.publish('readings', function(){
    return Readings.find();
  });
});
