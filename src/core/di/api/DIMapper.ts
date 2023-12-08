export interface DIMapper {
  single(token: string, instance: (...args: any[]) => any): void;
  factory(token: string, instance: (...args: any[]) => any): void;
}
