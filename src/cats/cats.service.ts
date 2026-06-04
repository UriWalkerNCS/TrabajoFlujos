import { Injectable } from '@nestjs/common';
import { Cat } from './types/cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

// Decorador que marca esta clase como un proveedor que puede ser inyectado en otros componentes (como controladores).
// Los servicios contienen la lógica de negocio y son consumidos por controladores
@Injectable()
 // Base de datos en memoria (arreglo de gatos)
  // Datos de ejemplo iniciales para probar la funcionalidad del servicio
export class CatsService {
  private cats: Cat[] = [
    {
      id: 1,
      nombre: 'Michi',
      edad: 2,
      raza: 'Persa',
      color: 'Blanco',
      peso: 4.5,
      vacunado: true,
    },
    {
      id: 2,
      nombre: 'Pelusa',
      edad: 3,
      raza: 'Siamés',
      color: 'Gris',
      peso: 5,
      vacunado: false,
    },
  ];

   // Este metodo obtiene todos los gatos
  findAll() {
    return this.cats;
  }
  // Busca un gato por su ID
  findOne(id: number) {
    return this.cats.find((cat) => cat.id === id);
  }
 // Crea un nuevo gato
  create(createCatDto: CreateCatDto) {
    const newCat: Cat = {
      id: this.cats.length + 1,
      ...createCatDto,
    };
//Se agrega el nuevo gato al arreglo de gatos
    this.cats.push(newCat);
    return newCat;
  }
//Actualiza un gato existente por su ID después de encontrarlo. Si el gato existe, se actualizan 
//sus propiedades con los datos proporcionados en updateCatDto.
  update(id: number, updateCatDto: UpdateCatDto) {
    const cat = this.findOne(id);

    if (cat) {
      Object.assign(cat, updateCatDto);
    }
// Se devuelve el gato actualizado (o undefined si no se encontró el gato)
    return cat;
  }
//Se elimina un gato por su ID despues de encontrarlo. Si el gato existe
//Se elimina del arreglo de gatos y se devuelve un mensaje de confirmación.
  remove(id: number) {
    const index = this.cats.findIndex((cat) => cat.id === id);

    if (index !== -1) {
      this.cats.splice(index, 1);
    }
 
    return {
      mensaje: 'Gato eliminado correctamente',
    };
  }
}