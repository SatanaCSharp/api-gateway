import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  ConfigService,
  GRPC_USERS_CLIENT_SERVICE,
  USERS_PROTOBUF_PACKAGE,
} from '@common/config';
import { RolesController } from '@presentation/controllers';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: GRPC_USERS_CLIENT_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.GRPC,
          options: {
            url: configService.getOrThrow('USERS_GRPC_URL'),
            package: USERS_PROTOBUF_PACKAGE,
            protoPath: 'node_modules/cpm-proto/users/root.proto',
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [RolesController],
})
export class RolesModule {}
