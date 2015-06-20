/**
* Quiz.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	status:{
		type:'boolean',
		defaultsTo:1
	},
	user:{
		model:'user',
		required:true
	},
	questions:{
		collection:'question',
		via:'quiz',
		required:true
	}
  }
};

