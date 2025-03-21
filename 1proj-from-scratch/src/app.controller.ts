import { Controller, Get } from '@nestjs/common';

@Controller('/api')
export class AppController {

  @Get('/blah')
  getRootRoute() {
    return 'hello, this is a GET route';
  }

  @Get('/blah2')
  getSomeOtherRoute() {
    return 'you found getSomeOtherRoute';
  }
}
