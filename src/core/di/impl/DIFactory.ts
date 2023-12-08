export class DIFactory {
  constructor(private instanceFactory: (...args: any[]) => any) {}

  create() {
    return this.instanceFactory();
  }
}

export class SingleDIFactory extends DIFactory {
  private instance: any | null = null;

  override create() {
    if (this.instance == null) {
      this.instance = super.create();
    }
    return this.instance;
  }
}
