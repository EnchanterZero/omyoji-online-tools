/**
 * Created by intern07 on 16/12/9.
 */
var MonkeyOpencv = require('monkey-opencv').MonkeyOpencv;
var robot = require("robotjs");
var images = require("images");
var Constants = require ('monkey-opencv').Constants;
var fs = require ('fs');

var img = robot.screen.capture();
console.log(img.image);
fs.writeFile('output.dib',img.image);
//var buffer = images(img.image).encode("output.png", {operation:50});
//images(buffer)
MonkeyOpencv.findSubImage({
  source: 'test1.png',
  templates: ['template2.png'],
  matchPercent: 5,
  maximumMatches: 1,
  downPyramids: 1,
  searchExpansion: 15,
  method: Constants.TM_CCORR_NORMED,
}, function(matches){
  console.log('Matches with callback: ',matches[0].position);
  var screenSize = robot.getScreenSize();
  robot.setMouseDelay(2);
  robot.moveMouse(65,80);
  robot.moveMouse(65+matches[0].position.x,80+matches[0].position.y);
})


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
