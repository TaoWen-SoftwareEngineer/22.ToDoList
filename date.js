module.exports = getDate;

function getDate(){
  var today = new Date();
  var date=["Sunday","Monday","Tuesday","Wendesday","Thursday","Friday","Saturday"];
  var day=date[today.getDay()];
  // if (today.getDay()===6 || today.getDay()===0 ){
  //   day="weekend";
  //
  // }else{
  //   day="weekday";
  //
  // }
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  day=today.toLocaleDateString("en-US", options); // 9/17/2016

  return day;
}
