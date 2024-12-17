import {
    Column,
    Entity,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import { BaseEntity } from './base';
import { Product } from './product';

@Entity()
export class Inventory extends BaseEntity {
    @Column({
        type: 'integer',
        nullable: false,
        default: 0,
    })
    quantity: number;

    @OneToOne(() => Product)
    @JoinColumn({ name: 'productId' })
    product: Product;
}