const { Schema, model, Types } = require("mongoose");
const User = require("./User");

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (createdAt) {
      return createdAt.toLocaleString();
    },
  },
});

// Schema to create Thought model
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return value.length >= 1 && value.length <= 280;
        },
        message: "Thought text must be between 1 and 280 characters",
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function (createdAt) {
        return createdAt.toLocaleString();
      },
    },
    userName: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema],
  },

  {
    // Here we are indicating that we want virtuals to be included
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize our models

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
