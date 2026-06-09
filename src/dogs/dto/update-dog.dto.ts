//Se definen las propiedades de la entidad Dog con sus tipos de datos correspondientes para la actualización de un perro. 
// El símbolo "?" se utiliza para indicar que estas propiedades son opcionales.

export class UpdateDogDto {
  nombre?: string;
  edad?: number;
  raza?: string;
  color?: string;
  peso?: number;
  vacunado?: boolean;
}