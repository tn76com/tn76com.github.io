
var http =require('http');
var express = require('express');
var app = express();
var port =9000;
var api_key = "key-73f4ce599344ef4ba7916cf615b2eb49";
var domain = "impactanalytics.co";
var mailgun = require('mailgun-js')({apiKey:api_key, domain: domain});
var Firebase = require("firebase");
http.createServer(function (req, res){
        res.writeHead(200,{'Content-Type' :'text/plain'});
        res.end('Welcome to InsideInsight! \n');
}).listen(port);
console.log('Listening on port', port);
var completedSurveyRef = new Firebase('https://insideinsightdev.firebaseio.com/IA/submittedSurvey');
        completedSurveyRef.on('child_added',function(snapshotCompleted){
                var obj = snapshotCompleted.val();
                var surveyId = obj['surveyId'];
                console.log("surveyId:"+surveyId);
                var userId = obj['userId'];
                console.log("userId:"+userId+"surveyId:"+surveyId);
                var userpendingSurveyRef = new Firebase('https://insideinsightdev.firebaseio.com/IA/UserPendingSurvey/Users');
                userpendingSurveyRef.child(userId).child("Surveys").child(surveyId).remove();
                snapshotCompleted.ref().remove();
        })

var surveyAssignRef = new Firebase('https://insideinsightdev.firebaseio.com/IA/sendSurveyAssignMail');
                surveyAssignRef.once("child_added",function(snapshot){
                     setTimeout(sendMail(snapshot),1000);
 });

function sendMail(snapshot){
       var surveyId = snapshot.key();
                        console.log("survey id:"+ surveyId);
var obj = snapshot.val();
console.log("obj:"+obj);

for(var i in obj){
    (function(i){
        setTimeout(sendingMail(obj[i],i),0);
    })(i);
}
}

function sendingMail(obj,i) {
    console.log("user key:"+i+"    userId:"+obj);
   
                                var url = 'https://insideinsightdev.firebaseio.com/Users/'+obj;
                        
                                var userRef = new Firebase(url);
                                userRef.on("value",function(userSnap){
                                console.log("userSnap:"+userSnap.val());
                                if(!!userSnap.val()){
console.log("not null");
                                        var emailId = userSnap.val().email;
                        console.log("emailiD:"+emailId);
                var firstName = userSnap.val().firstName;
console.log("firstName:"+firstName);
                                        var password = emailId.split("@")[0]+"@123";
                                        console.log("emailId:"+emailId+"firstName:"+firstName);
                                        var msg = "";
  msg += "Hi "+firstName+",\n\n";
                                        msg += "We have observed that you have not had a chance to try the Inside Insight app for completing your company’s survey on Promotions,which expires on 10th March (GMT).\n\n";
                                        msg += "In case you have missed our earlier mail, here is all the information you need to get started.\n\n";
                                        msg += "Please download the app from the links below and submit the assigned survey.\n\n";
                                        msg += "On your iPhone from iTunes\n";
                                        msg += "https://itunes.apple.com/in/app/inside-insight/id1064883406?mt=8\n\n";
                                        msg += "On your Android phone from Play Store\n\n";
                                        msg +="https://play.google.com/store/apps/details?id=com.impactanalytics.insideinsight\n\n";
                                        msg +="Your login credentials to the app are given below:\n\n";
                                        msg +="Username:   "+emailId+"\n";
                                        msg += "Password:   "+password+"\n\n";
                                        msg += "If you have any difficulties with our app, please do not hesitate to reach out to us. We are just an email away at insideinsight@impactanalytics.co.\n\n";
                                        msg += "Warm Regards,\n";
                                        msg += "Team Inside Insight";
                                        var data = {
                                        from: "insideinsight@impactanalytics.co",
                                                                        to: emailId,
                                                                        subject: "Survey Assignment",
                                                                        text: msg
                                        }
                                        mailgun.messages().send(data, function(error, body){
                                                if (undefined != error) {
                                                        console.log('error'+error);
                                                } else {
                                                        console.log('email send successfully');
                                                     var urlFirebaseRef = new Firebase(surveyAssignRef + "/" + surveyId + "/" + i);
                            
                            urlFirebaseRef.remove();
                                                        //obj[i].remove();
                                                        //snapshot.ref().remove();      
                                                }
                                        });
                                } else {
                                                console.log("error error :");
                                }
                        }, function (errorObject) {
                                                console.log("The read failed failed: " + errorObject.code);
                        });
}

                 