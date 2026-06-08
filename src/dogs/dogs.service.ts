import { Injectable } from '@nestjs/common';
import { Dog } from './types/dog.entity';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
//El servicio DogsService maneja la lógica de negocio relacionada con la entidad Dog.
@Injectable()
export class DogsService {
  //Se define un arreglo privado de perros para simular una base de datos en memoria.
  private dogs: Dog[] = [
    {
      id: 1,
      nombre: 'Max',
      edad: 3,
      raza: 'Labrador',
      color: 'Dorado',
      peso: 25,
      vacunado: true,
    },
    {
      id: 2,
      nombre: 'Rocky',
      edad: 5,
      raza: 'Pastor Aleman',
      color: 'Negro',
      peso: 30,
      vacunado: false,
    },
  ];
  /*
   * Este método busca un perro específico utilizando su identificador.
   * El método find() recorre el arreglo y devuelve el primer elemento
   * cuyo id coincida con el valor recibido como parámetro.
   * Si no encuentra ninguna coincidencia, retornará undefined.
   */
  findAll() {
    return this.dogs;
  }

  findOne(id: number) {
    return this.dogs.find((dog) => dog.id === id);
  }
 /*
   * Este método permite crear un nuevo registro de perro.
   * Recibe un objeto CreateDogDto que contiene los datos enviados
   * por el cliente. Posteriormente se genera un identificador único,
   * se construye el nuevo objeto y finalmente se agrega al arreglo.
   * El método retorna el perro recién creado.
   */
  create(createDogDto: CreateDogDto) {
    const newDog: Dog = {
      id: this.dogs.length + 1,
      ...createDogDto,
    };

    this.dogs.push(newDog);
    return newDog;
  }

  /*
   * Este método permite actualizar un registro de perro existente.
   * Recibe un identificador y un objeto UpdateDogDto que contiene los datos a actualizar.
   * Busca el perro por su identificador y, si lo encuentra, actualiza sus propiedades.
   * El método retorna el perro actualizado o undefined si no se encuentra.
   */
  update(id: number, updateDogDto: UpdateDogDto) {
    const dog = this.findOne(id);

    if (dog) {
      Object.assign(dog, updateDogDto);
    }

    return dog;
  } /*
   * Este método actualiza la información de un perro existente.
   * Primero se busca el registro mediante su id. Si el perro existe,
   * Object.assign() copia únicamente los campos enviados desde
   * UpdateDogDto, permitiendo realizar actualizaciones parciales
   * sin modificar los demás atributos del objeto.
   */

  remove(id: number) {
    const index = this.dogs.findIndex(
      (dog) => dog.id === id,
    );

    if (index !== -1) {
      this.dogs.splice(index, 1);
    }

    return {
      mensaje: 'Perro eliminado correctamente',
    };
  }
}