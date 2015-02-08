initializeDatabase = true;

Meteor.startup(function(){
  if(RestStatistics.find().count() == 0){
    RestStatistics.insert({
      _id: 'configuration',
      total_count: 0,
      list_count: 0,
      update_count: 0,
      delete_count: 0,
      get_count: 0,
      insert_count: 0
    });
  }

  // http://www.json-generator.com/
  if((Readings.find().count() == 0) && initializeDatabase) {
    var data = [
      {
        "value": 68.8368
      },
      {
        "value": 68.9271
      },
      {
        "value": 80.4775
      },
      {
        "value": 79.0063
      },
      {
        "value": 82.455
      },
      {
        "value": 80.6577
      },
      {
        "value": 61.2646
      },
      {
        "value": 90.0704
      },
      {
        "value": 75.0605
      },
      {
        "value": 69.6443
      },
      {
        "value": 83.6623
      },
      {
        "value": 94.8371
      },
      {
        "value": 88.1846
      },
      {
        "value": 95.0631
      },
      {
        "value": 98.8258
      },
      {
        "value": 99.6709
      },
      {
        "value": 64.771
      },
      {
        "value": 79.7637
      },
      {
        "value": 76.1018
      },
      {
        "value": 76.0168
      },
      {
        "value": 65.2173
      },
      {
        "value": 68.7665
      },
      {
        "value": 89.5114
      },
      {
        "value": 90.563
      },
      {
        "value": 62.8888
      },
      {
        "value": 99.2078
      },
      {
        "value": 86.3897
      },
      {
        "value": 72.1729
      },
      {
        "value": 83.5099
      },
      {
        "value": 70.093
      },
      {
        "value": 99.4983
      },
      {
        "value": 99.5106
      },
      {
        "value": 60.0971
      },
      {
        "value": 67.6064
      },
      {
        "value": 90.9309
      },
      {
        "value": 79.7052
      },
      {
        "value": 83.3845
      },
      {
        "value": 64.0147
      },
      {
        "value": 68.8303
      },
      {
        "value": 94.6587
      },
      {
        "value": 70.1734
      },
      {
        "value": 80.8573
      },
      {
        "value": 93.7016
      },
      {
        "value": 94.542
      },
      {
        "value": 67.8585
      },
      {
        "value": 81.611
      },
      {
        "value": 98.5902
      },
      {
        "value": 98.7609
      },
      {
        "value": 89.5927
      },
      {
        "value": 99.4818
      },
      {
        "value": 64.2987
      },
      {
        "value": 92.9006
      },
      {
        "value": 77.7313
      },
      {
        "value": 81.3384
      },
      {
        "value": 87.1267
      },
      {
        "value": 94.3847
      },
      {
        "value": 60.1974
      },
      {
        "value": 60.84
      },
      {
        "value": 90.2749
      },
      {
        "value": 82.8175
      },
      {
        "value": 74.231
      },
      {
        "value": 70.7578
      },
      {
        "value": 93.6314
      },
      {
        "value": 83.5588
      },
      {
        "value": 85.5241
      },
      {
        "value": 61.2866
      },
      {
        "value": 72.4518
      },
      {
        "value": 99.9516
      },
      {
        "value": 64.0234
      },
      {
        "value": 94.684
      },
      {
        "value": 80.5285
      },
      {
        "value": 86.3068
      },
      {
        "value": 75.7402
      },
      {
        "value": 92.9875
      },
      {
        "value": 93.4883
      },
      {
        "value": 97.6606
      },
      {
        "value": 96.6065
      },
      {
        "value": 73.829
      },
      {
        "value": 95.9604
      },
      {
        "value": 90.6292
      },
      {
        "value": 71.9941
      },
      {
        "value": 63.419
      },
      {
        "value": 68.734
      },
      {
        "value": 91.3617
      },
      {
        "value": 96.3111
      },
      {
        "value": 61.9261
      },
      {
        "value": 75.3907
      },
      {
        "value": 87.1813
      },
      {
        "value": 64.8564
      },
      {
        "value": 87.0247
      },
      {
        "value": 61.6674
      },
      {
        "value": 80.676
      },
      {
        "value": 86.787
      },
      {
        "value": 82.003
      },
      {
        "value": 94.7362
      },
      {
        "value": 88.4486
      },
      {
        "value": 89.8421
      },
      {
        "value": 67.4932
      },
      {
        "value": 99.1968
      },
      {
        "value": 66.4391
      }
    ];

    data.forEach(function(datum){
      datum.createdAt = new Date();
      Readings.insert(datum);
    });

  };
});
