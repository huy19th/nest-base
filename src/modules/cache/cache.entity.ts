import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Cache {
    @PrimaryColumn()
    key: string;

    @Column({ type: 'jsonb' })
    value: any;

    @Column({ type: 'timestamptz' })
    expiresAt: Date;
}
