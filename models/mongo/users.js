'use strict';

module.exports = mongoose => {
	const Schema = mongoose.Schema;

	const modelSchema = new Schema({
		username: { type: String, required: true },
		password: { type: String, required: true },
		name: { type: String, required: true },
		status: { type: String, enum: ['ACTIVE', 'DELETED'], required: true, default: 'ACTIVE' },
		created: { type: Date, default: Date.now },
	});
	modelSchema.set('toJSON', { getters: true, virtuals: true });
	return mongoose.model('users', modelSchema);
};
