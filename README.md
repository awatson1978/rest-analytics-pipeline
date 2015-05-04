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
meteor
````

==========================
#### Running Acceptance Tests

````sh
# optional:  you may want to reset your application data
terminal-a$ meteor reset

# optional: install starrynight utility (test runner)
terminal-a$ npm install starrynight -g

# run your application as usual
terminal-a$ meteor

# run nightwatch
terminal-b$ starrynight run-framework nightwatch
````

==========================
#### Licensing  

MIT License.
