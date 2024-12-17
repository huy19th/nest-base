import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm';
import { BaseEntity } from './base';
import { OrderAddress } from './order-address';
import { OrderItem } from './order-item';
import { OrderPayment } from './order-payment';
import { User } from './user';
import { PaymentStatus } from './payment-method';

@Entity()
export class Order extends BaseEntity {
    @Column({
        type: 'smallint',
        nullable: false,
    })
    totalItems: number;

    @OneToMany(
        () => OrderItem,
        item => item.order
    )
    items: OrderItem[];

    @Column({
        type: 'integer',
        nullable: false,
    })
    totalMoney: number;

    @Column({
        type: 'enum',
        enum: PaymentStatus,
        default: PaymentStatus.Pending,
    })
    paymentStatus: string;

    @ManyToOne(
        () => User,
        user => user.orders
    )
    @JoinColumn({ name: 'userId' })
    user: User;

    @ManyToOne(
        () => OrderPayment,
        payment => payment.orders
    )
    @JoinColumn({ name: 'paymentId' })
    payment: OrderPayment;

    @ManyToOne(
        () => OrderAddress,
        address => address.orders
    )
    @JoinColumn({ name: 'addressId' })
    address: OrderAddress;
}