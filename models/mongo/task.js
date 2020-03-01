'use strict';


module.exports = mongoose => {
	const Schema = mongoose.Schema;

	const modelSchema = new Schema({
		task: { type: String },
		status: { type: String, default: 'ACTIVE' },
		created_at: { type: Date, default: Date.now }
	});

	modelSchema.set('toJSON', { getters: true, virtuals: true });
	return mongoose.model('messages', modelSchema);
};