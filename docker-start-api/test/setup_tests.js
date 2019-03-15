function connectDB(callback){
  mongoClient.connect(dbConfig.testDBURL, function(err, db){
    assert.equal(null,err);
    reader_test_db = db;
    console.log("Connected correctly to server")
    callback(0);
  })
}
// function dropMetricsCollection(callback){
//   console.log("dropMetricsCollection");
//   metrics = reader_test_db.collections('metrics');
//   if (undefined != metrics){
//     metrics.drop(function(err,reply){
//       console.log("metrics collection dropped");
//       callback(0);
//     });
//   } else{
//     callback(0);
//   }
//   }
// }
function getApplication(callback){
  console.log("getApplication");
  client.getApplications({
      name: SP_APP_NAME
  }, function(err, applications){
      console.log(applications);
      if(err) {
        log("Error in getApplications");
        throw err;
      }
      app = applications.items[0];
      calback(0);

  });

},
  function deleteTestAccounts(callback) {
    app.getAccounts({
      email: TU_EMAIL_REGEX

    }, function(err, accounts){
        if(err) throw err;
        accounts.items.forEach(function deleteAccount(account){
          account.delete(function deleteError(err){
            if(err) throw err;
          });
        });
        calback(0);
    });
  }
function closeDB(callback){
  reader_test_db.close();
}

async.series([connectDB,getApplication,deleteTestAccounts,closeDB])
