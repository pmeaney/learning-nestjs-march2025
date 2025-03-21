# Learning NestJS - March 2025

Learned some NestJS in 2023.  Decided to return to explore it again, as a potential framework for crafting a serverside app.

Resources:
- Stephen Grider's NestJS course on Udemy: https://www.udemy.com/course/nestjs-the-complete-developers-guide/
  - I'm a big fan of both Udemy & Stephen Grider


# Commonly used Design Patterns in NestJS to be familiar with:

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