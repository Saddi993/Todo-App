'use strict';


module.exports = mongoose => {
	const Schema = mongoose.Schema;

	const modelSchema = new Schema({
		name: { type: String },
		status: { type: String, enum: ['ACTIVE', 'DONE'], required: true, default: 'ACTIVE' },
		created_at: { type: Date, default: Date.now }
	});

	modelSchema.set('toJSON', { getters: true, virtuals: true });
	return mongoose.model('tasks', modelSchema);
};