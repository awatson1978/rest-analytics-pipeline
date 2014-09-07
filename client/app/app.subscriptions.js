Session.setDefault('groveId', false);

Deps.autorun(function(){
  Meteor.subscribe('readings', Session.get('groveId'));
  Meteor.subscribe('restStatistics');
});
