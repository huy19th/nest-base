import {
    Column,
    Entity,
    OneToMany,
    OneToOne,
} from 'typeorm';
import { BaseEntity } from './base';
import { Cart } from './cart';
import { Order } from './order';
import { OrderAddress } from './order-address';
import { OrderPayment } from './order-payment';
import { PaymentMethod } from './payment-method';
import { UserAddress } from './user-address';

@Entity()
export class User extends BaseEntity {
    @Column({
        type: 'varchar',
        length: 100,
    })
    username: string;

    @Column({
        type: 'varchar',
        length: 100,
    })
    password: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true,
    })
    fullName: string;

    @Column({
        type: 'varchar',
        length: 100,
        unique: true,
    })
    email: string;

    @OneToMany(
        () => UserAddress,
        address => address.user
    )
    addresses: UserAddress[];

    @OneToMany(
        () => OrderAddress,
        orderAddress => orderAddress.user
    )
    orderAddresses: OrderAddress[];

    @OneToMany(
        () => PaymentMethod,
        paymentMethod => paymentMethod.user
    )
    paymentMethods: PaymentMethod[];

    @OneToMany(
        () => OrderPayment,
        orderPayment => orderPayment.user
    )
    orderPayments: OrderPayment[];

    @OneToOne(
        () => Cart,
        cart => cart.user
    )
    cart: Cart;

    @OneToMany(
        () => Order,
        order => order.user
    )
    orders: Order[];
}