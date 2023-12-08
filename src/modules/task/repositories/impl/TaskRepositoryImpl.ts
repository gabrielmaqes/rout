import {TaskRepository} from '../api/TaskRepository';
import {tasks} from '../mock/tasks';
import {TaskModel} from 'models/TaskModel';

export class TaskRepositoryImpl implements TaskRepository {
  async listTasks(): Promise<TaskModel[]> {
    return tasks;
  }
}
