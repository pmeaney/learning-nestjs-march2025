import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  // `imports` allow use of one module's services within anothers.
  // here, we want to use services in the PowerModule, so we import the PowerModule
  imports: [PowerModule],
  providers: [CpuService]
})
export class CpuModule { }
