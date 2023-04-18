import { Inject } from '@nestjs/common';
import { GRPC_USERS_CLIENT_SERVICE } from '@common/config';

export const UsersClientInject = () => Inject(GRPC_USERS_CLIENT_SERVICE);
