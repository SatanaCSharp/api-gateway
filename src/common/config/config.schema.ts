import { Injectable } from '@nestjs/common';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

@Injectable()
export class ConfigSchema {
  @IsPositive()
  readonly PORT!: number;

  @IsPositive()
  readonly DEBUG_PORT!: number;

  @IsNotEmpty()
  @IsString()
  readonly USERS_GRPC_URL!: string;
}
