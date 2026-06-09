import {Body,Controller, Delete,Get,Param,Patch,Post,}from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

// Decorador que define la ruta base para este controlador: /cats
@Controller('cats')
export class CatsController {
   // Inyecta el servicio CatsService para manejar la lógica de negocio relacionada con los gatos
  constructor(private readonly catsService: CatsService) {}
  
  // GET:Maneja peticiones GET a /cats
  // Retorna todos los gatos registrados
  @Get()
  findAll() {
    return this.catsService.findAll();
  }
  // GET:Maneja peticiones GET a /cats/:id
  // Retorna un gato específico según su ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }
 // POST: Maneja peticiones POST a /cats
  // Crea un nuevo gato con los datos del cuerpo de la petición
  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  // PATCH: Maneja peticiones PATCH a /cats/:id
  // Actualiza un gato específico según su ID
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ) {
    return this.catsService.update(+id, updateCatDto);
  }
  // DELETE: Maneja peticiones DELETE a /cats/:id
  // Elimina un gato específico
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}