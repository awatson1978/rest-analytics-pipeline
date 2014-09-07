initializeDatabase = false;

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
        "value": 68.8368,
        "sensorType": "temperature"
      },
      {
        "value": 68.9271,
        "sensorType": "temperature"
      },
      {
        "value": 80.4775,
        "sensorType": "temperature"
      },
      {
        "value": 79.0063,
        "sensorType": "temperature"
      },
      {
        "value": 82.455,
        "sensorType": "temperature"
      },
      {
        "value": 80.6577,
        "sensorType": "temperature"
      },
      {
        "value": 61.2646,
        "sensorType": "temperature"
      },
      {
        "value": 90.0704,
        "sensorType": "temperature"
      },
      {
        "value": 75.0605,
        "sensorType": "temperature"
      },
      {
        "value": 69.6443,
        "sensorType": "temperature"
      },
      {
        "value": 83.6623,
        "sensorType": "temperature"
      },
      {
        "value": 94.8371,
        "sensorType": "temperature"
      },
      {
        "value": 88.1846,
        "sensorType": "temperature"
      },
      {
        "value": 95.0631,
        "sensorType": "temperature"
      },
      {
        "value": 98.8258,
        "sensorType": "temperature"
      },
      {
        "value": 99.6709,
        "sensorType": "temperature"
      },
      {
        "value": 64.771,
        "sensorType": "temperature"
      },
      {
        "value": 79.7637,
        "sensorType": "temperature"
      },
      {
        "value": 76.1018,
        "sensorType": "temperature"
      },
      {
        "value": 76.0168,
        "sensorType": "temperature"
      },
      {
        "value": 65.2173,
        "sensorType": "temperature"
      },
      {
        "value": 68.7665,
        "sensorType": "temperature"
      },
      {
        "value": 89.5114,
        "sensorType": "temperature"
      },
      {
        "value": 90.563,
        "sensorType": "temperature"
      },
      {
        "value": 62.8888,
        "sensorType": "temperature"
      },
      {
        "value": 99.2078,
        "sensorType": "temperature"
      },
      {
        "value": 86.3897,
        "sensorType": "temperature"
      },
      {
        "value": 72.1729,
        "sensorType": "temperature"
      },
      {
        "value": 83.5099,
        "sensorType": "temperature"
      },
      {
        "value": 70.093,
        "sensorType": "temperature"
      },
      {
        "value": 99.4983,
        "sensorType": "temperature"
      },
      {
        "value": 99.5106,
        "sensorType": "temperature"
      },
      {
        "value": 60.0971,
        "sensorType": "temperature"
      },
      {
        "value": 67.6064,
        "sensorType": "temperature"
      },
      {
        "value": 90.9309,
        "sensorType": "temperature"
      },
      {
        "value": 79.7052,
        "sensorType": "temperature"
      },
      {
        "value": 83.3845,
        "sensorType": "temperature"
      },
      {
        "value": 64.0147,
        "sensorType": "temperature"
      },
      {
        "value": 68.8303,
        "sensorType": "temperature"
      },
      {
        "value": 94.6587,
        "sensorType": "temperature"
      },
      {
        "value": 70.1734,
        "sensorType": "temperature"
      },
      {
        "value": 80.8573,
        "sensorType": "temperature"
      },
      {
        "value": 93.7016,
        "sensorType": "temperature"
      },
      {
        "value": 94.542,
        "sensorType": "temperature"
      },
      {
        "value": 67.8585,
        "sensorType": "temperature"
      },
      {
        "value": 81.611,
        "sensorType": "temperature"
      },
      {
        "value": 98.5902,
        "sensorType": "temperature"
      },
      {
        "value": 98.7609,
        "sensorType": "temperature"
      },
      {
        "value": 89.5927,
        "sensorType": "temperature"
      },
      {
        "value": 99.4818,
        "sensorType": "temperature"
      },
      {
        "value": 64.2987,
        "sensorType": "temperature"
      },
      {
        "value": 92.9006,
        "sensorType": "temperature"
      },
      {
        "value": 77.7313,
        "sensorType": "temperature"
      },
      {
        "value": 81.3384,
        "sensorType": "temperature"
      },
      {
        "value": 87.1267,
        "sensorType": "temperature"
      },
      {
        "value": 94.3847,
        "sensorType": "temperature"
      },
      {
        "value": 60.1974,
        "sensorType": "temperature"
      },
      {
        "value": 60.84,
        "sensorType": "temperature"
      },
      {
        "value": 90.2749,
        "sensorType": "temperature"
      },
      {
        "value": 82.8175,
        "sensorType": "temperature"
      },
      {
        "value": 74.231,
        "sensorType": "temperature"
      },
      {
        "value": 70.7578,
        "sensorType": "temperature"
      },
      {
        "value": 93.6314,
        "sensorType": "temperature"
      },
      {
        "value": 83.5588,
        "sensorType": "temperature"
      },
      {
        "value": 85.5241,
        "sensorType": "temperature"
      },
      {
        "value": 61.2866,
        "sensorType": "temperature"
      },
      {
        "value": 72.4518,
        "sensorType": "temperature"
      },
      {
        "value": 99.9516,
        "sensorType": "temperature"
      },
      {
        "value": 64.0234,
        "sensorType": "temperature"
      },
      {
        "value": 94.684,
        "sensorType": "temperature"
      },
      {
        "value": 80.5285,
        "sensorType": "temperature"
      },
      {
        "value": 86.3068,
        "sensorType": "temperature"
      },
      {
        "value": 75.7402,
        "sensorType": "temperature"
      },
      {
        "value": 92.9875,
        "sensorType": "temperature"
      },
      {
        "value": 93.4883,
        "sensorType": "temperature"
      },
      {
        "value": 97.6606,
        "sensorType": "temperature"
      },
      {
        "value": 96.6065,
        "sensorType": "temperature"
      },
      {
        "value": 73.829,
        "sensorType": "temperature"
      },
      {
        "value": 95.9604,
        "sensorType": "temperature"
      },
      {
        "value": 90.6292,
        "sensorType": "temperature"
      },
      {
        "value": 71.9941,
        "sensorType": "temperature"
      },
      {
        "value": 63.419,
        "sensorType": "temperature"
      },
      {
        "value": 68.734,
        "sensorType": "temperature"
      },
      {
        "value": 91.3617,
        "sensorType": "temperature"
      },
      {
        "value": 96.3111,
        "sensorType": "temperature"
      },
      {
        "value": 61.9261,
        "sensorType": "temperature"
      },
      {
        "value": 75.3907,
        "sensorType": "temperature"
      },
      {
        "value": 87.1813,
        "sensorType": "temperature"
      },
      {
        "value": 64.8564,
        "sensorType": "temperature"
      },
      {
        "value": 87.0247,
        "sensorType": "temperature"
      },
      {
        "value": 61.6674,
        "sensorType": "temperature"
      },
      {
        "value": 80.676,
        "sensorType": "temperature"
      },
      {
        "value": 86.787,
        "sensorType": "temperature"
      },
      {
        "value": 82.003,
        "sensorType": "temperature"
      },
      {
        "value": 94.7362,
        "sensorType": "temperature"
      },
      {
        "value": 88.4486,
        "sensorType": "temperature"
      },
      {
        "value": 89.8421,
        "sensorType": "temperature"
      },
      {
        "value": 67.4932,
        "sensorType": "temperature"
      },
      {
        "value": 99.1968,
        "sensorType": "temperature"
      },
      {
        "value": 66.4391,
        "sensorType": "temperature"
      }
    ];

    data.forEach(function(datum){
      datum.createdAt = new Date();
      Readings.insert(datum);
    });

  };
});
