import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

// Decorador que define este archivo como un módulo de NestJS
// Los módulos organizan la aplicación en bloques funcionales cohesivos
@Module({
  // controllers: Lista de controladores que manejan las rutas HTTP dentro de este módulo
  controllers: [CatsController],
  // providers: Lista de servicios que contienen la lógica de negocio y pueden ser inyectados en los controladores
  providers: [CatsService]
})
export class CatsModule {}
