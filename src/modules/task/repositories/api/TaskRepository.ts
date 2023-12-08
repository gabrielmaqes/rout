import {TaskModel} from 'models/TaskModel';

export interface TaskRepository {
  listTasks(): Promise<TaskModel[]>;
}
