/**
 * Created by intern07 on 16/12/9.
 */
var MonkeyOpencv = require('monkey-opencv').MonkeyOpencv;
var robot = require("robotjs");
var images = require("images");
var Constants = require ('monkey-opencv').Constants;
var fs = require ('fs');
var screenshot = require('desktop-screenshot');

screenshot("screenshot.png", {width:1920,x:0,y:0,w:800,h:400}, function(error, image) {
  if (error)
    console.log("Screenshot failed", error);
  else {
    console.log("Screenshot succeeded", image);
    MonkeyOpencv.findSubImage({
      source: image,
      templates: ['template2.png'],
      matchPercent: 70,
      maximumMatches: 1,
      downPyramids: 1,
      searchExpansion: 15,
      method: Constants.TM_CCORR_NORMED,
    }, function(matches){
      var screenSize = robot.getScreenSize();
      console.log('robot got screen: ',screenSize);
      console.log('Matches with callback: ',matches[0].position);
      robot.setMouseDelay(2);
      //robot.moveMouse(841/2,181/2);
      robot.moveMouse((matches[0].position.x),(matches[0].position.y));
    })
  }
});

// Speed up the mouse.
// var screenSize = robot.getScreenSize();
// robot.setMouseDelay(2);
// robot.moveMouse(65,80);
// robot.moveMouse(65+314,80+86);
//robot.moveMouse(25, screenSize.height-40);
// robot.setMouseDelay(500);
//setTimeout(robot.mouseClick,100)
// robot.mouseToggle("down");
// robot.mouseToggle("up");
//
// robot.setMouseDelay(2);
// for(var i = 1; i<20;i++){
//   robot.moveMouse(15,10+i)
// }
