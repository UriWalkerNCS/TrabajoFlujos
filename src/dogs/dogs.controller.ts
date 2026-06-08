import {Body,Controller,Delete,Get,Param,Patch,Post,} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
//El controlador DogsController maneja las solicitudes HTTP relacionadas con la entidad Dog.
//Utiliza los decoradores de NestJS para definir las rutas y los métodos HTTP correspondientes a cada acción (GET, POST, PATCH, DELETE).
@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}
//Cada método del controlador corresponde a una acción específica:
//GET devuelve todos los perros.
  @Get()
  findAll() {
    return this.dogsService.findAll();
  }
//GET con un parámetro de ID devuelve un perro específico.
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogsService.findOne(+id);
  }
//POST crea un nuevo perro utilizando los datos proporcionados en el cuerpo de la solicitud.
  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogsService.create(createDogDto);
  }
//PATCH actualiza un perro existente utilizando el ID proporcionado en la ruta y los datos de actualización en el cuerpo de la solicitud.
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDogDto: UpdateDogDto,
  ) {
    return this.dogsService.update(+id, updateDogDto);
  }
//DELETE elimina un perro específico utilizando el ID proporcionado en la ruta.
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogsService.remove(+id);
  }
}
//El controlador utiliza el servicio DogsService para realizar las operaciones de negocio relacionadas con los perros, como buscar, crear, actualizar y eliminar registros en la base de datos.