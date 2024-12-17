import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { BaseEntity } from './base';
import { User } from './user';

export const PaymentTypeWithProvider = {
    Transfer: 'Transfer',
    EWallet: 'EWallet',
}

export const PaymentProvider = {
    PayPal: 'PayPal',
    Stripe: 'Stripe',
    ApplePay: 'ApplePay',
    Skrill: 'Skrill',
    Payoneer: 'Payoneer',
}

export const PaymentType = {
    Transfer: 'Transfer',
    EWallet: 'EWallet',
    COD: 'COD',
}

export const PaymentStatus = {
    Pending: 'Pending',
    Successful: 'Successful',
    Failed: 'Failed',
    CodPending: 'CodPending',
}

@Entity()
export class PaymentMethod extends BaseEntity {
    @Column({
        type: 'enum',
        enum: PaymentTypeWithProvider
    })
    type: string;

    @Column({
        type: 'enum',
        enum: PaymentProvider
    })
    provider: string;

    @Column({
        type: 'varchar',
        length: 50
    })
    accountId: string;

    @ManyToOne(
        () => User,
        user => user.paymentMethods
    )
    @JoinColumn({ name: 'userId' })
    user: User;
}