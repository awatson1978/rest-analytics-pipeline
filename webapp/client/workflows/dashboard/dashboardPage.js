
Session.setDefault('selected_campaign_record', false);


//------------------------------------------------
// HELPERS

Template.dashboardPage.helpers({
  getMostRecentDate:function(){
    
    var record = Readings.find({},{sort:{dateIncrement: -1}}).fetch()[0];
    if(record){
      var date = moment(record.date);
      return date.add('days',1).format('MM-DD-YYYY');
    }else{
      return "";
    }
  },
  resized: function() {
    // this functions get run as side effects
    dataLineGraph();

    // the resized helper function gets rerun when the reactive
    // resize variable gets updated
    return Session.get('resize');
  },
  destroyed: function() {
    this.handle && this.handle.stop();
    $('#dataLineChart').html('<svg id="dataLineChartCanvas"></svg>');
  }
});
