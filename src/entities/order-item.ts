import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { BaseEntity } from './base';
import { Order } from './order';
import { Product } from './product';

@Entity()
export class OrderItem extends BaseEntity {
    @Column({
        type: 'smallint',
    })
    quantity: number;

    @ManyToOne(
        () => Order,
        order => order.items
    )
    @JoinColumn({ name: 'orderId' })
    order: Order;

    @ManyToOne(
        () => Product,
        product => product.orderItems
    )
    @JoinColumn({ name: 'productId' })
    product: Product;
}