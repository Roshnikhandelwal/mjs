import {ProdEnvironment} from './prod.env.mjs';
import {DevEnvironment} from './dev.env.mjs';

export interface Environment {
    db_url: string,
}

export function getEnvironmentVariables() {
    if (process.env.NODE_ENV === 'production') {
        return ProdEnvironment;
    } else {
        return DevEnvironment;
    }
}
