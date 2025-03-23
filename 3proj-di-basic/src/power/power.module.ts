import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  // Adding `exports` allows such services to be available to other modules in the project
  exports: [PowerService]
})
export class PowerModule { }
