import { Injectable } from '@nestjs/common';
import { Cat } from './types/cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
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

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return this.cats.find((cat) => cat.id === id);
  }

  create(createCatDto: CreateCatDto) {
    const newCat: Cat = {
      id: this.cats.length + 1,
      ...createCatDto,
    };

    this.cats.push(newCat);
    return newCat;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    const cat = this.findOne(id);

    if (cat) {
      Object.assign(cat, updateCatDto);
    }

    return cat;
  }

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