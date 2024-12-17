import {
    Column,
    Entity,
    OneToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import { BaseEntity } from './base';
import { CartItem } from './cart-item';
import { User } from './user';

@Entity()
export class Cart extends BaseEntity {
    @OneToOne(
        () => User,
        user => user.cart
    )
    @JoinColumn({ name: 'userId' })
    user: User;

    @Column({
        type: 'smallint',
        default: 0
    })
    totalItems: number;

    @OneToMany(
        () => CartItem,
        item => item.cart
    )
    items: CartItem[];
}