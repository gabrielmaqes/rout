export interface DIContainer {
    get<T>(token: string): T
}
