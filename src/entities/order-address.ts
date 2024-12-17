import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { User } from './user';
import { Order } from './order';
import { BaseEntity } from './base';

@Entity()
export class OrderAddress extends BaseEntity {
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

    @OneToMany(
        () => Order,
        order => order.address
    )
    orders: Order[]
}