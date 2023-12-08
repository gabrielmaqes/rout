import {DIMapper} from 'core/di/api/DIMapper';
import {TaskControllerImpl} from '../impl/TaskControllerImpl';
import {DIContainer} from 'core/di/api/DIContainer';
import {TaskRepository} from 'modules/task/repositories/api/TaskRepository';

export function provideController(container: DIMapper & DIContainer) {
  const taskRepository = container.get<TaskRepository>('TaskRepository');
  container.single(
    'TaskController',
    () => new TaskControllerImpl(taskRepository),
  );
}
