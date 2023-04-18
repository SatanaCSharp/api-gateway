import { NestFactory } from '@nestjs/core';
import { AppModule } from '@modules/index';
import { ConfigService } from '@common/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  await app.listen(configService.getOrThrow('PORT'));
}
bootstrap();
