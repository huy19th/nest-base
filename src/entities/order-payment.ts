import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { BaseEntity } from './base';
import { Order } from './order';
import { User } from './user';
import { PaymentType, PaymentProvider } from './payment-method';

@Entity()
export class OrderPayment extends BaseEntity {
    @Column({
        type: 'enum',
        enum: PaymentType
    })
    type: string;

    @Column({
        type: 'enum',
        enum: PaymentProvider,
        nullable: true
    })
    provider: string;

    @Column({
        type: 'varchar',
        length: 50
    })
    accountId: string;

    @ManyToOne(
        () => User,
        user => user.orderPayments
    )
    @JoinColumn({ name: 'userId' })
    user: User;

    @OneToMany(
        () => Order,
        order => order.payment
    )
    orders: Order[];
}