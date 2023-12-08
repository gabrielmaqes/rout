import {TaskRepository} from 'modules/task/repositories/api/TaskRepository';
import {TaskController} from '../api/TaskController';
import {TaskModel} from 'models/TaskModel';

export class TaskControllerImpl implements TaskController {
  constructor(private taskRepository: TaskRepository) {}

  async listTasks(): Promise<TaskModel[]> {
    try {
      const tasks = await this.taskRepository.listTasks();
      return tasks;
    } catch (error) {
      throw new Error(
        'Erro ao buscar lista de tarefas. Tente novamente em alguns instantes',
      );
    }
  }
}
