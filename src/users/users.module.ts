import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // sirve para registrar entidades y proover repositorios en el contexto de un modelo en especifico, lo que facilita la inyeccion de depndencias y uso de estas entidades dentro de los modulos
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
