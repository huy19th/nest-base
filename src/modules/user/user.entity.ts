import { AfterLoad, BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
import { compare, hash } from 'bcrypt'
import { BaseEntity } from '../../common/base';

@Entity()
export class User extends BaseEntity {
    @Column({
        type: 'text'
    })
    email: string;

    @Column({
        type: 'text',
    })
    password: string;

    @Column({
        type: 'text'
    })
    username?: string;

    private currentPassword: string

    @AfterLoad()
    private loadCurrentPassword() {
        console.log('loadCurrentPassword')
        this.currentPassword = this.password
    }

    @BeforeInsert()
    @BeforeUpdate()
    private async hashPassword() {
        const shouldHash = !this.currentPassword || !(await compare(this.password, this.currentPassword));
        console.log('shouldHash', shouldHash)
        if (shouldHash) {
            this.password = await hash(this.password, 10);
        }
        else {
            this.password = this.currentPassword
        }
    }
}