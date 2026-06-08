
//Se definen las propiedades de la entidad Dog con sus tipos de datos correspondientes
//El símbolo "!" se utiliza para indicar que estas propiedades serán asignadas posteriormente, evitando así errores de compilación.

export class Dog {
  id!: number;
  nombre!: string;
  edad!: number;
  raza!: string;
  color!: string;
  peso!: number;
  vacunado!: boolean;
}