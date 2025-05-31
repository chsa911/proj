import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    BMark: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    BBreite: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);
