import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  // Whenever Nest creates an instance of CpuService,
  // it firsts makes sure to create an instance of the PowerService
  // and provide it to the CpuService constructor
  // So, now in the CpuService we can define methods which make use of the PowerService
  constructor(private powerService: PowerService) { };

  compute(a: number, b: number) {
    console.log(`Drawing 10 watts of power from Power service`);
    this.powerService.supplyPower(10);
    return a + b;
  }
}
