import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
According to Stephen Grider, there's a convention
to just call this "User" instead of "UserEntity"
but that it's not a requirement... just community convention.
Either way is fine */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}