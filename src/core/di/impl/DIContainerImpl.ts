import {DIContainer} from '../api/DIContainer';
import {DIMapper} from '../api/DIMapper';
import {DIFactory, SingleDIFactory} from './DIFactory';

export class DIContainerImpl implements DIContainer, DIMapper {
  private static defaultContainer = new DIContainerImpl();
  private readonly container = new Map<string, DIFactory>();

  get<T>(token: string): T {
    if (this.container.has(token)) {
      const instance = this.container.get(token);
      return instance!.create() as T;
    }
    throw new Error(`dependency '${token}' not found`);
  }

  single(token: string, instanceFactory: (...args: any[]) => any): DIMapper {
    this.container.set(token, new SingleDIFactory(instanceFactory));
    return this;
  }

  factory(token: string, instanceFactory: (...args: any[]) => any): DIMapper {
    this.container.set(token, new DIFactory(instanceFactory));
    return this;
  }

  static getDefault() {
    return this.defaultContainer;
  }
}
