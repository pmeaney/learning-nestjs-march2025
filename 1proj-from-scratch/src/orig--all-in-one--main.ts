import { Controller, Module, Get } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

// Activate this file with:
// `npx ts-node-dev src/main.ts`

// a module wraps a controller.
// a nestjs app has a minimum of a module & controller

// On startup, NestJS examines the Module, 
// and creates instances of each of the controllers contained in the module.


@Controller()
class AppController {

  @Get()
  getRootRoute() {
    return 'hello, this is a GET route';
  }
}

@Module({
  controllers: [AppController]
})
class AppModule {}

async function boostrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

boostrap();