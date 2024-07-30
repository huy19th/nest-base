import {
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Entity,
    DeleteDateColumn,
} from 'typeorm';

@Entity()
export class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}