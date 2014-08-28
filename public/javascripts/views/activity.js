//printing out name of activity under headings in panel
//generating markers on map
var ActivityView = function(activity) {
  this.activity = activity;
  this.$el = $(  this.render()  );
  this.generateMarker()
}

ActivityView.prototype.render = function() {
  return "<p>" + this.activity.name + "</p>";
}

ActivityView.prototype.generateMarker = function() {
  this.marker = new google.maps.Marker({
    map: map,
    title: this.activity.name,
    position: this.getLatLng()
  })
}

ActivityView.prototype.getLatLng = function() {
  var latlngarr = this.activity.place[0].location;
  return new google.maps.LatLng(latlngarr[0],latlngarr[1]);
}