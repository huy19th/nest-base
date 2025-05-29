import { Field, ObjectType } from '@nestjs/graphql';
import {
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    BaseEntity as TypeOrmEntity
} from 'typeorm';

@ObjectType()
export class BaseEntity extends TypeOrmEntity {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @CreateDateColumn()
    createdAt: Date;

    @Field()
    @UpdateDateColumn()
    updatedAt: Date;

    @Field({ nullable: true })
    @DeleteDateColumn()
    deletedAt: Date;
}
