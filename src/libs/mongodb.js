import mongoose from 'mongoose';

const connectMongoDb = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDb;
