temperatureLineGraph = function(){
  console.log('temperatureLineGraph');

    var data = [{
      color: "#45b76f",
      key: "Total",
      values: Readings.find().fetch()
    }];


    var chart;
    nv.addGraph({
      generate: function(){
        console.log('generating temperatureLineChart...');

        var width = $('#temperatureLineChart').width();

        $('#temperatureLineChart').height($('#temperatureLineChartPanel').height() - 20);
        var height = $('#temperatureLineChart').height();
        if(height > 380){
          height = 380;
        }
        width = width - 40;

        chart = nv.models.lineChart()
          .x(function(d) { return moment(d.createdAt); })
          .y(function(d) { return d.value; })
          .forceY([0,100])
          .color(d3.scale.category20().range())
          .useInteractiveGuideline(true)
          .clipVoronoi(false);

        chart.xAxis
          .tickFormat(function(d) {
            return d3.time.format('%M:%S')(new Date(d));
            //return d3.time.format('%H:%M')(new Date(d));
          });

        chart.yAxis
          .tickFormat(d3.format(''));

        d3.select('#temperatureLineChart svg')
          .attr('width', width)
          .attr('height', height)
          .datum(data)
          .call(chart);

        nv.utils.windowResize(chart.update);

        //chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

        return chart;
      },
      callback: function(graph){
        window.onresize = function () {
          var width = $('#temperatureLineChart').width();
          var height =  $('#temperatureLineChart').height();
          var margin = graph.margin();

          if (width < margin.left + margin.right + 20){
            width = margin.left + margin.right + 20;
          }else{
            width = width - 40;
          }

          if (height < margin.top + margin.bottom + 20){
            height = margin.top + margin.bottom + 20;
          }
          if(height > 380){
            height = 380;
          }

          graph.width(width).height(height);

          d3.select('#temperatureLineChart svg')
            .attr('width', width)
            .attr('height', height)
            .call(graph);
        };
      }
    });
  //}
};
