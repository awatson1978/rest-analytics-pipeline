# rest-analytics-pipeline

Real-time analytics pipeline for sensors via a RESTful interface.  

![travis-build](https://travis-ci.org/awatson1978/rest-analytics-pipeline.svg?branch=master)  

==========================
#### Installation


````sh
# Should be as simple as cloning the repository...  
git clone https://github.com/grovelabs/rest-analytics-pipeline.git

# And then running it...
cd rest-analytics-pipeline
sudo meteor
````

==========================
#### Running Acceptance Tests

````sh
# optional:  you may want to reset your application data
terminal-a$ meteor reset

# run your application as usual
terminal-a$ meteor

# install the nightwatch script
terminal-b$ cp .meteor/local/build/programs/server/assets/packages/clinical_nightwatch/launch_nightwatch_from_app_root.sh run_nightwatch.sh
terminal-b$ sudo chmod +x run_nightwatch.sh

# run nightwatch
terminal-b$ sudo ./run_nightwatch.sh

# you might want to do something clever like pass in arguments and run specific tests
terminal-b$ sudo ./run_nightwatch.sh -t tests/nightwatch/analytics.walkthrough.js
````

==========================
#### Licensing  

MIT License.
