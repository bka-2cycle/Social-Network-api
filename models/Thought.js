const { Schema, model } = require('mongoose');
const User = require('./User');

// Schema to create Thought model
const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return value.length >= 1 && value.length <= 280;
      },
      message: "Thought text must be between 1 and 280 characters"
    }
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function(createdAt) {
      return createdAt.toLocaleString();
    }
  },
  userName: {
    type: String,
    required: true
  },
  reactions: [ReactionSchema]
});

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const ReactionSchema = new Schema({
  reactionId: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  reactionBody: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return value.length <= 280;
      },
      message: "Reaction body must be less than or equal to 280 characters"
    }
  },
  userName: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function(createdAt) {
      return createdAt.toLocaleString();
    }
  }
});


// Initialize our models
const User = mongoose.model('User', UserSchema);
const Thought = mongoose.model('Thought', ThoughtSchema);

module.exports = { User, Thought };

