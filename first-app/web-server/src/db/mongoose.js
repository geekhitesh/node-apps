const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/task-manager',{
    useNewUrlParser: true,
    useCreateIndex: true,
});


const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        validate(value) {
            if(value < 0)
                throw new Error('Age must be positive number');
        }
    }
});


const user = new User({
    name: 'Hitesh',
    age: -27
});


user.save().then(()=> {
    console.log(user);
}).catch((error) => {
    console.log(error);
});