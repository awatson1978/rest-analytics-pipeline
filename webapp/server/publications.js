
Meteor.startup(function(){
  Meteor.publish('readings', function(groveId){
    if(groveId){
      return Readings.find({groveId: groveId});
    }else{
      return Readings.find();
    }
  });
  Meteor.publish("restStatistics", function () {
    return RestStatistics.find({_id: 'configuration'});
  });

});
