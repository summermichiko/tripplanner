var DaysView = function() {
   this.$el = $( this.render() );
   this.$addDay = this.$el.find('.addDay');
   this.$daysBtnContainer = this.$el.find('.daysBtnContainer');
   $("#daysContainer").prepend(this.$el);

   var self = this;

   this.$addDay.on('click',function() {
     var newDay = days.addDay();
     self.$daysBtnContainer.append(newDay.dayBtnView.$el);
   })
 }

 DaysView.prototype.render = function() {
   return "<div>" +
     "<div class='daysBtnContainer'></div>" +
     "<button class='btn addDay'>+</button>" +
   "</div>"
 }
 