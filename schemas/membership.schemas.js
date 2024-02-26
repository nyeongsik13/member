import mongoose from 'mongoose';

const membershipSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    pw: { type: String, required: true }
})

membershipSchema.set('toJSON', {
    transform: function(doc, ret, options) {
    ret.userId = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
    }
});

export default mongoose.model('memberSchema', membershipSchema)