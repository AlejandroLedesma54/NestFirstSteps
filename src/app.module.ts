import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Metodo forRoot para configurar la conexion a la base de datos
      type: 'mysql',
      host: 'bcihivlutai497dksafa-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'ucndsc2biidwlvo1',
      password: 'mqYO7V5yXQM92INLBYr2',
      database: 'bcihivlutai497dksafa',
      // autoLoadEntities: true, //busca todas las entidades en la base de datos.
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
