
//--------------------------------------------------------------
// Routes

Router.configure({
  layoutTemplate: 'appLayout',
});

Router.route('/', {
  action:function(){
    this.render('dashboardPage');
  },
  onAfterAction: function() {
    dataLineGraph();
  }
});
