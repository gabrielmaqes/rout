import { DIContainer } from "./DIContainer";
import { DIMapper } from "./DIMapper";

export abstract class AbstractDIProvider {
    constructor (
        protected container: DIMapper & DIContainer
    ) {}

    abstract provide(): void
}
