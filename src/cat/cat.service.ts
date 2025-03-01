import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  constructor(){
    console.log(
      console.log("Cat service has been initiated")
    )
  }
}
