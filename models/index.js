var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripplanner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Place, Hotel, ThingsToDo, Restaurant;
var Schema = mongoose.Schema;

var placeSchema = new Schema({
 address: String,
 city: String,
 state: String,
 phone: String,
 location: [Number, Number]
});

var hotelSchema = new Schema({
 name: String,
 place: [placeSchema],
 num_stars: Number,
 amenities: String
});
var thingstodoSchema = new Schema({
 name: String,
 place: [placeSchema],
 age_range: String
});

var restaurantSchema = new Schema({
    name: String,
    place: [placeSchema],
    cuisine: String,
    price: Number
});

var daySchema = new Schema({
 dayNum: Number,
 hotel: [{type:Schema.Types.ObjectId, ref: 'Hotel'}],
 restaurant: [{type: Schema.Types.ObjectId, ref: 'Restaurant'}],
 thingsToDo: [{type:Schema.Types.ObjectId, ref:'ThingsToDo'}]

});


Place = mongoose.model('Place', placeSchema);
Hotel = mongoose.model('Hotel', hotelSchema);
ThingsToDo = mongoose.model('ThingsToDo', thingstodoSchema);
Restaurant = mongoose.model('Restaurant', restaurantSchema);
Day = mongoose.model('Day',daySchema);

module.exports = {"Day": Day, "Place": Place, "Hotel": Hotel, "ThingsToDo": ThingsToDo, "Restaurant": Restaurant};