'use strict';

module.exports = mongoose => {
    const Schema = mongoose.Schema;

    const modelSchema = new Schema({
        id: { type: String },
        name: { type: String },
        image: { type: String },
        link: { type: String },
        price: { type: String },
        currency: { type: String },
        description: { type: String }
    });

    modelSchema.set('toJSON', { getters: true, virtuals: true });
    return mongoose.model('products', modelSchema);
};