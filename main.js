//for actualAestheticValue, enter a number between 1 and 10
function hypeSong() {
  var currentYear = document.getElementById('current_year').value;
  var actualAestheticValue = document.getElementById('rating').value;
  var YearOfOriginalRelease = document.getElementById('orig_year').value;
  var numberOfYearsSinceOriginalRelease = currentYear - YearOfOriginalRelease;
  var decade = String(YearOfOriginalRelease - Number(String(YearOfOriginalRelease)[3])) + "'s ";
  var value = actualAestheticValue;
  for (x = 0; x < numberOfYearsSinceOriginalRelease; x++) {
    value = actualAestheticValue * numberOfYearsSinceOriginalRelease;
} 
 if ((value > 0) && (value <=75)) {
        var html = "Oh my God, music in the " + decade + "was so much better than today; I would give anything to go back to the " + decade + ". This song is unbelievable."}
   else if ((value > 75) && (value <=150)) {
        var html = "Oh my God, music in the " + decade + "was incredible; I would give anything to go back to the " + decade + ". This song is so good I want to cry."}
   else if ((value > 150) && (value <=225)) {
        var html = "Oh my God, music in the " + decade + "was so much better than today; I would give anything to go back to the " + decade + ". I just want to bash my head against a brick wall, this song is so good."}
   else {
        var html = "[head literally explodes]"}

document.write(html);
}
