//==============================================================================
// Grove Labs Readings API
//
// http://api.grovelabs.io/readings
// http://api.grovelabs.io/reading/new
// http://api.grovelabs.io/reading/:id
// http://api.grovelabs.io/reading/delete/:id
// http://api.grovelabs.io/reading/update/:id


debugLogging = false;

Router.map(function () {
  this.route("listReadingRoute", {path: "/readings/",
    where: "server",
    action: function(){
      debugLogging && console.log('################################################');
      debugLogging && console.log(this.request.method);
      debugLogging && console.log(this.request.headers);
      debugLogging && console.log('this.params.id: ' + this.params.id);

      debugLogging && console.log('------------------------------');
      debugLogging && console.log(this.request.body);
      debugLogging && console.log('------------------------------');

      this.response.statusCode = 200;
      this.response.setHeader("Content-Type", "application/json");
      this.response.setHeader("Access-Control-Allow-Origin", "*");
      this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

      if (this.request.method == 'GET') {
        // LIST
        RestStatistics.update({_id: "configuration"},{$inc:{
          total_count: 1,
          list_count: 1
        }});
        this.response.end(JSON.stringify(
          Readings.find().fetch()
        ));
      }else if (this.request.method == 'OPTIONS') {
        // OPTIONS
        this.response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS");
        this.response.end("OPTIONS Response");
      }
    }
  });

  this.route("newReadingRoute", {path: "/reading/new",
    where: "server",
    action: function(){
      debugLogging && console.log('################################################');
      debugLogging && console.log(this.request.method);
      debugLogging && console.log(this.request.headers);

      debugLogging && console.log('------------------------------');
      debugLogging && console.log(this.request.body);
      debugLogging && console.log('------------------------------');

      this.response.statusCode = 200;
      this.response.setHeader("Content-Type", "application/json");
      this.response.setHeader("Access-Control-Allow-Origin", "*");
      this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

      if (this.request.method == 'POST') {
        // INSERT
        RestStatistics.update({_id: "configuration"},{$inc:{
          total_count: 1,
          insert_count: 1
        }});

        // TODO: this is where we could add validation and testing
        // this is where we enforce a schema if we want
        // Grove.checkSchema(this.request.body);

        this.request.body.createdAt = new Date();
        this.response.end(JSON.stringify(
          Readings.insert(this.request.body)
        ));
      }else if (this.request.method == 'OPTIONS') {
        // OPTIONS
        this.response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS");
        this.response.end("OPTIONS Response");
      }
    }
  });

  this.route("getReadingRoute", {path: "/reading/:id",
    where: "server",
    action: function(){
      debugLogging && console.log('################################################');
      debugLogging && console.log(this.request.method);
      debugLogging && console.log(this.request.headers);
      debugLogging && console.log('this.params.id: ' + this.params.id);

      debugLogging && console.log('------------------------------');
      debugLogging && console.log(this.request.body);
      debugLogging && console.log('------------------------------');

      this.response.statusCode = 200;
      this.response.setHeader("Content-Type", "application/json");
      this.response.setHeader("Access-Control-Allow-Origin", "*");
      this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

      if (this.request.method == 'GET') {
        // FIND
        RestStatistics.update({_id: "configuration"},{$inc:{
          total_count: 1,
          get_count: 1
        }});
        this.response.end(JSON.stringify(
          Readings.findOne({_id: this.params.id })
        ));
      }else if (this.request.method == 'OPTIONS') {
        // OPTIONS
        this.response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS");
        this.response.end("OPTIONS Response With Parameter");
      }
    }
  });

  this.route("deleteReadingRoute", {path: "/reading/delete/:id",
    where: "server",
    action: function(){
      debugLogging && console.log('################################################');
      debugLogging && console.log(this.request.method);
      debugLogging && console.log(this.request.headers);
      debugLogging && console.log('this.params.id: ' + this.params.id);

      debugLogging && console.log('------------------------------');
      debugLogging && console.log(this.request.body);
      debugLogging && console.log('------------------------------');

      this.response.statusCode = 200;
      this.response.setHeader("Content-Type", "application/json");
      this.response.setHeader("Access-Control-Allow-Origin", "*");
      this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

      if (this.request.method == 'DELETE') {
        // REMOVE
        RestStatistics.update({_id: "configuration"},{$inc:{
          total_count: 1,
          delete_count: 1
        }});
        this.response.end(JSON.stringify(
          Readings.remove({_id: this.params.id })
        ));
      }else if (this.request.method == 'OPTIONS') {
        // OPTIONS
        this.response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS");
        this.response.end("OPTIONS Response With Parameter");
      }
    }
  });


  this.route("updateReadingRoute", {path: "/reading/update/:id",
    where: "server",
    action: function(){
      debugLogging && console.log('################################################');
      debugLogging && console.log(this.request.method);
      debugLogging && console.log(this.request.headers);
      debugLogging && console.log('this.params.id: ' + this.params.id);

      debugLogging && console.log('------------------------------');
      debugLogging && console.log(this.request.body);
      debugLogging && console.log('------------------------------');

      this.response.statusCode = 200;
      this.response.setHeader("Content-Type", "application/json");
      this.response.setHeader("Access-Control-Allow-Origin", "*");
      this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

      //Access-Control-Allow-Origin: http://foo.example
      //Access-Control-Allow-Methods: POST, GET, OPTIONS
      //Access-Control-Allow-Headers: X-PINGOTHER


      if (this.request.method == 'PUT') {
        // UPDATE
        RestStatistics.update({_id: "configuration"},{$inc:{
          total_count: 1,
          update_count: 1
        }});
        this.response.end(JSON.stringify(
          Readings.update({_id: this.params.id },{$set:{
            title: this.request.body.title,
            text: this.request.body.text
          }})
        ));
        this.response.end("UPDATE Response");
      }else if (this.request.method == 'OPTIONS') {
        // OPTIONS
        this.response.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS");
        this.response.end("OPTIONS Response With Parameter");
      }
    }
  });


});
