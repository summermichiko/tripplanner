var ActivitiesView = function(type) {
 this.type = type;
 this.$el = $( this.render() );
 this.$select = this.$el.find('select');
 this.$button = this.$el.find('button');
 this.populate();
 $(".top-row").append( this.$el );

 var self = this;
 //events
 this.$button.on('click',function() {
   var id = self.$select.val();
   currentDay.addActivity(self.type,id);
  
 });
};

ActivitiesView.prototype.populate = function() {
 var self = this;
 data[this.type].forEach(function(datum) {
   self.$select.append("<option value='" + datum._id + "'>" + datum.name + "</option>");
 });
};

ActivitiesView.prototype.render = function() {
 return "<div class='col-sm-3'><select class='form-control'></select><button class='btn'>+</button></div>";
};

var types = ["hotel","thingsToDo","restaurant"];
types.forEach(function(type) {
 new ActivitiesView(type);
});