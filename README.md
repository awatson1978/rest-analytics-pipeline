# rest-analytics-pipeline

Real-time analytics pipeline for sensors via a RESTful interface.  


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
# In the same way that we run 'meteor mongo' in a separate terminal while our application is already running,
# we want to open up a new terminal, and run nightwatch
terminal-b$ cp .meteor/local/build/programs/server/assets/packages/clinical_nightwatch/launch_nightwatch_from_app_root.sh run_nightwatch.sh
terminal-b$ sudo chmod +x run_nightwatch.sh
terminal-b$ sudo ./run_nightwatch.sh

# you might want to do something clever like pass in arguments and run specific tests
terminal-b$ sudo ./run_nightwatch.sh -t tests/nightwatch/leaderboard.js
````

==========================
#### Licensing  

MIT License.
