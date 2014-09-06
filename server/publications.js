
Meteor.startup(function(){
  Meteor.publish('readings', function(){
    return Readings.find();
  });
  Meteor.publish("restStatistics", function () {
    return RestStatistics.find({_id: 'configuration'});
  });

});
