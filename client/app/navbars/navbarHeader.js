Template.navbarHeader.events({
  'click #navbarBrandLink':function(){
    $('#westPanel').sidebar('toggle');
  },
  'click #eastPanelToggleLink':function(){
    $('#eastPanel').sidebar('toggle');
  }
});
