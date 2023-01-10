import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Startup {
    @PrimaryGeneratedColumn()
    idStartup: number;

    @Column({ length: 500 })
    nomeEmpresa: string;

    @Column({ length: 100 })
    tipoEmpresa: string;

    @Column('int')
    cnpj: number;

    @Column('boolean')
    indicadorIncubacao: boolean;
}
