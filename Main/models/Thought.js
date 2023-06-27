const { Schema, model } = require('mongoose');
//thought
// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength:280
    },
    Username: {
      type: String,
      required: true,
    },
    reactions:[
      {

        type: Schema.Types.DocumentArray,
        ref: 'reactionSchema',
    }
    ],
    createdAt:{
      type: Date,
      // Sets a default value of 12 weeks from now
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

