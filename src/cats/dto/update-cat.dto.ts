//Se crearon las propiedades de la clase UpdateCatDTO que se utilizara para actualizar un gato existente en la aplicacion.
//Es de suma importante que se creen correctamente las propiedades de la clase UpdateCatDTO,
//ya que se utilizara para actualizar los datos de un gato existente en la aplicacion.
export class UpdateCatDto {
  nombre?: string;
  edad?: number;
  raza?: string;
  color?: string;
  peso?: number;
  vacunado?: boolean;
}