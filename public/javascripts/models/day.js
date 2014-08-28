var Day = function() {
 this.hotel = [];
 this.restaurant = [];
 this.thingsToDo = [];
 this.dayNum = days.length + 1;
 this.dayView = new DayView(this);
 this.dayBtnView = new DayBtnView(this);
 this._id=null;
 this.save();
};

Day.prototype.addActivity = function(type,id) {

 for(var i = 0; i < data[type].length; i++) {
     if(data[type][i]._id === id) {
       var foundActivity = data[type][i];
       this[type].push(foundActivity);
       console.log(this.dayView.selectors[type]);
       var activityView = new ActivityView(foundActivity);
       this.dayView.markers.push(activityView.marker);
       this.dayView.selectors[type].append(activityView.$el);
       $.post("/days/" + selfID + "/attractions", {type: type, id: id });
       console.log(type, id);
       break;
       
     }
   }
};

var selfID;

Day.prototype.save = function() {

var self = this;
  $.post("/days", {"dayNum": this.dayNum}, function(serverDay) {
    self._id = serverDay._id;
    //console.log(self._id);
    selfID = self._id;
   });

};
