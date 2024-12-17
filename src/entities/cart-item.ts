import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from './base';
import { Cart } from './cart';
import { Product } from './product';

@Entity()
export class CartItem extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'integer'
    })
    quantity: number;

    @ManyToOne(
        () => Cart,
        cart => cart.items
    )
    @JoinColumn({ name: 'cartId' })
    cart: Cart;

    @ManyToOne(
        () => Product,
        product => product.cartItems
    )
    @JoinColumn({ name: 'productId' })
    product: Product;
}