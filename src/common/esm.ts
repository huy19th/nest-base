import { loadEsm } from 'load-esm';

class EsmModules {
    'file-type': typeof import ('file-type') = undefined;

    async load() {
        for (const module in this) {
            this[module] = await loadEsm(module);
        }
    }
}

export const esmModules = new EsmModules();