
Readings = new Meteor.Collection("readings");
Readings.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});


RestStatistics = new Meteor.Collection("statistics");
RestStatistics.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return true;
  }
});
