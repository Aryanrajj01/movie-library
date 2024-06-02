const mongoose = require('mongoose');
const passport = require('passport');

exports.connectMongoose = () => {


     
    mongoose.connect('mongodb+srv://ayushpal5432:2Ep3VZ*x*vMag2z@cluster0.fiemtf7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
     .then(e=>console.log("Mongodb Connected"))
     .catch(e=>console.log(`${e} error`));

};

const userSchema = new mongoose.Schema({

    email : {
        type : String,
        required : true,
    },
    username: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      movies: [
        {
          type: mongoose.Types.ObjectId,
          ref: 'Movie'
        }
      ],
      isPrivate: {
        type : Boolean,
        default: false,
    },
    },
     {
      timestamps: true
})

exports.User = mongoose.model("User",userSchema);