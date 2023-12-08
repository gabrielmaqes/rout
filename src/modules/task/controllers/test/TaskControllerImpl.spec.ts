import 'jest';
import {MockProxy, mock} from 'jest-mock-extended';
import {TaskController} from '../api/TaskController';
import {TaskControllerImpl} from '../impl/TaskControllerImpl';
import {TaskRepository} from 'modules/task/repositories/api/TaskRepository';
import {TaskModel} from 'models/TaskModel';

describe('TaskControllerImpl test: ', () => {
  let controller: TaskController;
  let repository: MockProxy<TaskRepository>;
  let taskList: MockProxy<TaskModel[]>;

  beforeEach(() => {
    repository = mock<TaskRepository>();
    taskList = mock<TaskModel[]>();
    controller = new TaskControllerImpl(repository);
  });

  describe('listTasks', () => {
    test('when successful, return TaskModel array', async () => {
      repository.listTasks.mockResolvedValue(taskList);

      const result = await controller.listTasks();

      expect(result).toBe(taskList);
      expect(repository.listTasks).toHaveBeenCalledTimes(1);
    });
  });
});
