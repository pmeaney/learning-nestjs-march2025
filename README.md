# Learning NestJS - March 2025

Learned some NestJS in 2023.  Decided to return to explore it again, as a potential framework for crafting a serverside app.

Resources:
- Stephen Grider's NestJS course on Udemy: https://www.udemy.com/course/nestjs-the-complete-developers-guide/
  - I'm a big fan of both Udemy & Stephen Grider

## Project generation
- Nest CLI (like many CLI scaffolders) auto-gen a .git dir.  use the `--skip-git` flag to avoid that: `nest new project-name --skip-git`

## Commonly used Design Patterns in NestJS to be familiar with:

- **Dependency Injection** - Core to NestJS, used via `@Injectable()` decorators and constructor injection
- **Module Pattern** - Organizing code into modules with `@Module()` decorators that encapsulate related components
- **Decorator Pattern** - Heavily used for route configuration, middleware, validation, etc. (`@Controller()`, `@Get()`, `@Post()`)
- **Factory Pattern** - As seen in `NestFactory.create()` for application bootstrapping
- **Repository Pattern** - Often used with TypeORM or Mongoose for data access abstraction
- **Provider Pattern** - Services and other injectables that follow the provider pattern
- **Interceptor Pattern** - For implementing cross-cutting concerns using `@UseInterceptors()`
- **Middleware Pattern** - For request processing using `@UseMiddleware()`
- **Pipe Pattern** - For input validation and transformation using `@UsePipes()` 
- **Filter Pattern** - For exception handling via `@UseFilters()`
- **Guard Pattern** - For authentication and authorization using `@UseGuards()`
- **Observer Pattern** - Used in event-based features and microservices
- **Strategy Pattern** - Often used for different validation strategies or authentication methods
- **Singleton Pattern** - The default scope for providers in NestJS

## Nest CLI

- `npm run start:dev`
- `nest new projName`
- `nest generate module moduleName`
- `nest generate controller folderName/className --flat`
  - ![Alt nest generate controller explaination](./docs/cli-example--controller.png)


## Nest Decorators

- Class decorators - e.g. @Controller()
- Method decorators - e.g. @Get(), @Post(), etc.
- Argument decorators - e.g. @Body(), @Param()
- Validation decorator or a Property decorator - e.g. @IsString() in a Dto
  >More specifically, it belongs to a category that could be called:
  >- Validation decorators - Because it validates that a property meets certain criteria (in this case, being a string)
  >- Type validation decorators - Since it's specifically validating the type of the property
  >- Class-validator decorators - Named after the library it comes from
---
#### Decorator Examples

Argument Decorator Example:
```js
@Controller('messages')
export class MessagesController {
    @Post()
  createMessage(@Body() body: any) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
```

## the Injectable decorator

The @Injectable() decorator in NestJS is a key part of its dependency injection system. 

- **What @Injectable() Does** - When you mark a class with @Injectable(), you're telling NestJS that this class can:
  - Have its own dependencies injected (in this case, MessagesRepository)
  - Be injected into other classes (like controllers or other services)

## Class constructor verbose vs shorthand example

The public modifier automatically:
- Creates a class property with the same name
- Assigns the constructor parameter value to that property

**Example:**

```ts
export class MessagesService { ...
// This verbose approach:
  messagesRepo: MessagesRepository;
  constructor(messagesRepo: MessagesRepository) {
    this.messagesRepo = messagesRepo;
  }

// Is equivalent to this shorthand:
  constructor(public messagesRepo: MessagesRepository) {}
```



## TypeORM

I'm new to TypeORM, so I'll keep in mind these aspects it provides:

- Auto-generates:
  - Repository for a given module (Note: It won't generate any sort of visible repository file, it's done behind the scenes)
  - Migration files


# NestJS Files Guide

> ## Core Module Files

#### Module File (example.module.ts)
This is the organizational unit that brings all components together. It uses the `@Module` decorator to define:
- Which controllers belong to the module
- Which providers (services) should be instantiated
- Which modules are imported/exported

The module file establishes the boundaries of your feature and manages dependencies.

#### Controller File (example.controller.ts)
Controllers handle incoming HTTP requests and return responses to the client:
- Use `@Controller()` decorator to define routes
- Handle specific HTTP methods using decorators like `@Get()`, `@Post()`, etc.
- Extract data from requests using `@Body()`, `@Param()`, etc.
- Usually don't contain business logic, delegating that to services

#### Service File (example.service.ts)
Services contain the business logic of your application:
- Marked with `@Injectable()` decorator so they can be injected
- Implement data manipulation, validation, and transformation
- Interact with repositories/databases
- Encapsulate complex operations and reusable logic
- Follow the Single Responsibility Principle

#### Entity File (example.entity.ts)
Entities represent data structures in your database:
- Define properties corresponding to database columns
- Use decorators (often from TypeORM) like `@Entity()`, `@Column()`, etc.
- Map JavaScript/TypeScript objects to database tables
- May include validation constraints and relationship definitions

#### Repository File (example.repository.ts)
Repositories handle database operations for specific entities:
- Extend TypeORM's `Repository` class or implement custom repository patterns
- Provide methods for CRUD operations
- Include complex queries specific to the entity
- Abstract away database interactions from services
- Custom repositories are often created by extending TypeORM's repository

>## Other Common NestJS Files

#### DTOs (Data Transfer Objects)
**example.dto.ts**
- Define the shape of data for requests and responses
- Help with validation using class-validator decorators
- Provide type safety across your application
- Example: `CreateUserDto`, `UpdateUserDto`

#### Interfaces
**example.interface.ts**
- Define custom TypeScript interfaces for your domain
- Typically used for return types and complex object structures
- Example: `User`, `ConfigOptions`

#### Guards
**example.guard.ts**
- Determine if a request should proceed or be denied
- Often used for authentication and authorization
- Implement the `CanActivate` interface
- Example: `AuthGuard`, `RolesGuard`

#### Interceptors
**example.interceptor.ts**
- Transform data returned from route handlers
- Modify the response before it's sent to the client
- Implement timing logic or logging
- Implement the `NestInterceptor` interface

#### Pipes
**example.pipe.ts**
- Transform input data to the expected form
- Validate input data
- Can be global, controller-level, or route-level
- Example: `ValidationPipe`, `ParseIntPipe`

#### Filters
**exception.filter.ts**
- Handle exceptions that occur during request processing
- Transform error responses
- Implement the `ExceptionFilter` interface
- Example: `HttpExceptionFilter`

#### Middleware
**example.middleware.ts**
- Run before route handlers
- Access request and response objects
- Modify request/response or execute side effects
- Example: `LoggerMiddleware`, `CorsMiddleware`

#### Configuration
**config.ts** or **.env**
- Environment-specific settings
- Usually combined with the `@nestjs/config` package
- Helps with application configuration management

#### Testing Files
**example.spec.ts** or **example.e2e-spec.ts**
- Unit tests and integration tests
- Often created alongside the component they test
- Follow naming convention of the file they test with `.spec` or `.e2e-spec` suffix