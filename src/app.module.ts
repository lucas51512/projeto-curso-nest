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
      username: 'root',
      password: 'casa1522',
      database: 'projeto_pronto',
      entities: [
        __dirname + '**/*.entity.{.ts,.js}'
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
