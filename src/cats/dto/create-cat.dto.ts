//Se crearon las propiedades de la clase CreateCatDTO que se utilizara para crear un nuevo gato en la aplicacion.
//Es de suma importante que se creen correctamente las propiedades de la clase CreateCatDTO
export class CreateCatDto {
  nombre!: string;
  edad!: number;
  raza!: string;
  color!: string;
  peso!: number;
  vacunado!: boolean;
}