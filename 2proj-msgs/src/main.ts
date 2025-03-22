import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);

  // Pipes are used to validate requests.
  // Pipes are the first thing a request hits when request received into server app

  app.useGlobalPipes(
    new ValidationPipe()
  );
  /**
    Q:  Why ?? instead of ||
    A:  ?? only considers null and undefined as falsy values
        || considers all falsy values (0, '', false, null, undefined, NaN) as falsy
  */
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
