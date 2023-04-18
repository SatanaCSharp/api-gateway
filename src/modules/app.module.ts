import { Module } from '@nestjs/common';
import { AppController } from '@presentation/controllers';
import { ConfigModule } from '@modules/config';
import { RolesModule } from '@modules/roles';

@Module({
  imports: [ConfigModule, RolesModule],
  controllers: [AppController],
})
export class AppModule {}
