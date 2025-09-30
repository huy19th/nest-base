import { Transform } from "class-transformer";

export const Trim = Transform(({value}) => typeof value === 'string' ? value.trim() : value);

export const Uppercase = Transform(({value}) => typeof value === 'string' ? value.toUpperCase() : value);

export const Lowercase = Transform(({value}) => typeof value === 'string' ? value.toLowerCase() : value);
