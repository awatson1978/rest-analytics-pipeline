
Template.databaseCollection.helpers({
  readings: function(){
    return Readings.find({},{limit: 10, sort: {createdAt: 1}});
  },
  getCreatedAt: function(){
    return moment(this.createdAt).format("YYYY-MM-DD hh:mm:ss");
  }
});
