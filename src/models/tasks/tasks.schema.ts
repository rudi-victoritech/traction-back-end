import { Schema } from "mongoose";

const TaskSchema = new Schema({
  dueDate: {
    type: Date,
    required: false,
  },
  completedDate: {
    type: Date,
    required: false,
  },
  createdDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
  title: {
    type: String,
    required: true,
  },
});

export default TaskSchema;
