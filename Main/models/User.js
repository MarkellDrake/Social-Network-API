const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
//user
// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique:true,
      match:[/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        }
      ]
    ,
    friends:[
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        }
      ]
    ,
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
