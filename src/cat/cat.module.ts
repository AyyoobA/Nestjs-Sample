import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { MockCatsService } from './mock.cats.service';
import { ConfigModule } from '@nestjs/config';

const configServiceProvider = {
  provide: CatService,
  useClass:
    process.env.NODE_ENV === 'development' ? MockCatsService : CatService,
};

const value = 'custom_cat_value';

@Module({
  imports: [ConfigModule.forRoot({})],
  controllers: [CatController],
  providers: [
    {
      provide: CatService,
      useClass: MockCatsService // prints: Mock Cats Service has been instantiated
    }, 
    {
      provide: "CAT_VALUE",
      useValue: value
    },
    configServiceProvider
  ],
})
export class CatModule {}
