import { DIContainerImpl } from 'core/di/impl/DIContainerImpl';
import { TaskProvider } from 'modules/task/main';

export class AppProvider {
    static provideDependencies() {
        const container = DIContainerImpl.getDefault()
        new TaskProvider(container).provide()
    }
}
