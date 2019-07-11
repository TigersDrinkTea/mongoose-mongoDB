var mongoose = require ('mongoose');
// this is where we direct to the db we are using and create if not in use yet
mongoose.connect('mongodb://localhost/tiger_app',{ useNewUrlParser: true });


// mongoose is object modelling for the data going in to your Mongo Data Base.

// whats its allowing us to do here is to set out how we will model all future data additions with a schema.
//Schema is a pattern for the data, a structure/template for our data.
var tigerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperment: String
});

// this saves a new collection to the database of the plural of the first arguemnt, eg here its tiger collection in the tiger_app DB
var Tiger = mongoose.model('Tiger', tigerSchema);




// Add new tiger to the DB //

var cornelious = new Tiger({
    name: 'Cornelious',
    age: 26,
    temperment: 'Suspicious'
});



cornelious.save(function (error, savedTiger) {
if(error){
    console.log('ERROR');
    }else{
        console.log('SAVED');
        console.log(savedTiger);
    }
  });



// Above we created a new Tiger and then saved to db, whereas with Tiger.create can create and save all in one. 

Tiger.create({
    name: 'Smelly',
    age: 34,
    temperment: 'Stinky'
}, function (error, newTiger){
    if(error){
        console.log('ERROR');
        }else{
            console.log('SAVED');
            console.log(newTiger);
        }
      });





// Tiger.find({}, function (err,allTigers) {
//     if(err){
//     console.log('Error');
//     console.log(err);
//     }else{
//         console.log(allTigers);
//     }});