//----------------------------------------------------------
// NAVBAR FOOTER

Template.navbarFooter.helpers({
  getConfigurationRecord: function(){
    return RestStatistics.findOne({_id: 'configuration'});
  },
  getTotalCount: function(){
    if(this.total_count){
      return this.total_count;
    }else{
      return "---";
    }
  },
  getGetCount: function(){
    if(this.get_count){
      return this.get_count;
    }else{
      return "---";
    }
  },
  getListCount: function(){
    if(this.list_count){
      return this.list_count;
    }else{
      return "---";
    }
  },
  getInsertCount: function(){
    if(this.insert_count){
      return this.insert_count;
    }else{
      return "---";
    }
  },
  getUpdateCount: function(){
    if(this.update_count){
      return this.update_count;
    }else{
      return "---";
    }
  },
  getDeleteCount: function(){
    if(this.delete_count){
      return this.delete_count;
    }else{
      return "---";
    }
  }
});


Template.navbarFooter.events({
  "click #addRandomValue": function(event, template){
    alert('foo!'); 
  }
});
