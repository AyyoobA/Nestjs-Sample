import { Controller, Inject } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(
    private readonly catService: CatService,
    @Inject('CAT_VALUE') private cat_value: string ) {
        console.log(cat_value);
    }
}
