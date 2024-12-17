import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { User } from './user';
import { BaseEntity } from './base';

@Entity()
export class UserAddress extends BaseEntity {
    @Column({
        type: 'varchar',
        length: 200
    })
    address: string;

    @Column({
        type: 'varchar',
        length: 100
    })
    city: string;

    @Column({
        type: 'varchar',
        length: 100
    })
    postalCode: string;

    @Column({
        type: 'varchar',
        length: 100
    })
    country: string;

    @Column({
        type: 'varchar',
        length: 100,
    })
    telephone: string;

    @ManyToOne(
        () => User,
        user => user.addresses
    )
    @JoinColumn({ name: 'userId' })
    user: User;
}