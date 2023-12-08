import {TaskModel} from 'models/TaskModel';

export interface TaskController {
  listTasks(): Promise<TaskModel[]>;
}
