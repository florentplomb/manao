'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var MailSchema = new Schema({
	type: String,
	mails: [String]
});

module.exports = mongoose.model('Mail', MailSchema);