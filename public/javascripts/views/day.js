var DayView = function(day) {
  this.day = day;
  this.$el = $(  this.render()  );
  this.markers = [];
  this.selectors = {
    hotel: this.$el.find('.hotelContainer'),
    thingsToDo: this.$el.find('.thingsToDoContainer'),
    restaurant: this.$el.find('.restaurantsContainer')
  }

}

DayView.prototype.setMarkersVisible = function(showing) {
  this.markers.forEach(function(m) {
    m.setVisible(showing);
  })
}

DayView.prototype.render = function() {
  return "<div>" +
            "<h2>Day " + this.day.dayNum + "</h2>" +
            "<strong>Hotels</strong>" +
            "<div class='hotelContainer'></div>" +
            "<strong>Things To Do</strong>" +
            "<div class='thingsToDoContainer'></div>" +
            "<strong>Restaurants</strong>" +
            "<div class='restaurantsContainer'></div>" +
          "</div>";
}