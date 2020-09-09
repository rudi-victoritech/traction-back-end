import { model } from "mongoose";
import { ITaskDocument } from "./tasks.types";
import TaskSchema from "./tasks.schema";

export const TaskModel = model<ITaskDocument>("task", TaskSchema);
