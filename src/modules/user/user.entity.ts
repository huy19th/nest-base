import { BaseEntity } from '../../common/base';

export class User extends BaseEntity {
    email: string;

    password: string;

    username?: string;
}