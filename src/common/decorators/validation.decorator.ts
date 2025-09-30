import { ValidateIf, ValidationOptions } from 'class-validator';

// skip validation if allowOptional function return true or the field is null|undefined
export function IsOptionalIf(
    allowOptional: (obj: any, value: any) => boolean,
    options?: ValidationOptions,
) {
    // If required, do validate. Otherwise if null|undefined, don't validate
    return ValidateIf(
        (obj, value) => !allowOptional(obj, value) || value != null,
        options,
    )
}
