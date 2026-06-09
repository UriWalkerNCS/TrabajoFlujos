import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
//El módulo DogsModule agrupa el controlador DogsController y
//El servicio DogsService relacionados con la entidad Dog. 
//En NestJS, un módulo es una forma de organizar el código en unidades cohesivas, facilitando la gestión de dependencias y la modularización de la aplicación.
@Module({
  controllers: [DogsController],
  providers: [DogsService]
})
export class DogsModule {}
