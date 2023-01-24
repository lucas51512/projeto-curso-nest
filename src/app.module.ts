import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StartupModule } from './startup/startup.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Usuario do xampp padrão
      password: '', // Senha do xampp padrão
      database: 'projeto_pronto', // Alterar para o nome do seu banco de dados local
      entities: [
        __dirname + '**/*.entity.{.ts,.js}' // Mapeamento das entidades
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    StartupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
