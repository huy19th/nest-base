import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    OneToOne,
} from 'typeorm';
import { BaseEntity } from './base';
import { CartItem } from './cart-item';
import { Category } from './category';
import { Inventory } from './inventory';
import { OrderItem } from './order-item';

@Entity()
export class Product extends BaseEntity {
    @Column({
        type: 'varchar',
        length: 100,
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 500,
    })
    description: string;

    @Column({
        type: 'integer',
    })
    price: number;

    @ManyToMany(() => Category)
    @JoinTable({name: 'product_category'})
    categories: Category[];

    @OneToOne(() => Inventory)
    inventory: Inventory;

    @OneToMany(
        () => CartItem,
        item => item.product
    )
    cartItems: CartItem[];

    @OneToMany(
        () => OrderItem,
        item => item.product
    )
    orderItems: OrderItem[];
}