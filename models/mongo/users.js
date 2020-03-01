'use strict';

module.exports = mongoose => {
	const Schema = mongoose.Schema;

	const modelSchema = new Schema({
		workspace_id: { type: Number, required: true },
		uid: { type: Number, required: true },
		username: { type: String, required: false },
		first_name: { type: String, required: true },
		last_name: { type: String, required: false },
		name: { type: String, required: true },
		bio: { type: String, required: false },
		theme: { type: Object, required: false },
		image: { type: Object, required: false },
		cover: { type: Object, required: false },
		status: { type: String, enum: ['ACTIVE', 'DELETED'], required: true, default: 'ACTIVE' },
		created: { type: Date },
		updated: { type: Date },
		deleted_at: { type: Date }
	});
	modelSchema.set('toJSON', { getters: true, virtuals: true });
	return mongoose.model('users', modelSchema);
};
