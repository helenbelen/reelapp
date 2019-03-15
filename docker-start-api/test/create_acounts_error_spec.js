TU_EMAIL_REGEX = 'testuser*';
SP_APP_NAME = "reelapp";
TEST_MOVIE = "video-0";
SAMPLE_DATETIME = "";
var frisby = require('frisby');
var tc = require('./config/test_config');
frisby.create("POST video request")
  .post(tc.url + '/watch/', { 'video-name': TEST_MOVIE})
  .expectStatus(200)
  .expectHeader('Contect-Type','application/json; charset=utf-8')
  .expectJSONTypes({'success': String})
  .toss()

  frisby.create("POST watch metrics")
    .post(tc.url + '/metrics/', { 'video-name': TEST_MOVIE, 'datetime' : SAMPLE_DATETIME})
    .expectStatus(200)
    .expectHeader('Contect-Type','application/json; charset=utf-8')
    .expectJSONTypes({'success': String})
    .toss()
