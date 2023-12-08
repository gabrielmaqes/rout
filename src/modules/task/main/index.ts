import {AbstractDIProvider} from 'core/di/api/AbstractDIProvider';
import {provideController} from '../controllers/provider';
import {provideRepository} from '../repositories/provider';

export class TaskProvider extends AbstractDIProvider {
  provide(): void {
    provideRepository(this.container);
    provideController(this.container);
  }
}
