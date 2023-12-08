import {DIContainer} from 'core/di/api/DIContainer';
import {DIMapper} from 'core/di/api/DIMapper';
import {TaskRepositoryImpl} from '../impl/TaskRepositoryImpl';

export function provideRepository(container: DIMapper & DIContainer) {
  container.single('TaskRepository', () => new TaskRepositoryImpl());
}
