var days = [];

days.addDay = function() {
 var newDay = new Day();
 this.push(newDay);
 return newDay;
};

var currentDay;

var switchDay = function(day) {
 if(currentDay) {
   currentDay.dayView.setMarkersVisible(false);
 }
 currentDay = day;
 currentDay.dayView.setMarkersVisible(true);
 $("#dayPanel").html(currentDay.dayView.$el);
}