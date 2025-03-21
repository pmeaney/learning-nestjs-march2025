import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {

  @Get()
  getRootRoute() {
    return 'hello, this is a GET route';
  }
}
