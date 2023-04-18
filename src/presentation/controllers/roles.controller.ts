import { Body, Controller, Get, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { IRolesService } from '@business/interfaces';
import { GRPC_ROLES_SERVICE } from '@common/config';
import { Observable } from 'rxjs';
import { PaginateDto } from '@presentation/dto/common';
import { CreateRoleDto, ResponseRoleDto } from '@presentation/dto/roles';
import { UsersClientInject } from '@presentation/injects';

@Controller('roles')
export class RolesController implements OnModuleInit {
  private service: IRolesService;

  constructor(
    @UsersClientInject()
    private readonly client: ClientGrpc,
  ) {}

  public onModuleInit(): void {
    this.service = this.client.getService<IRolesService>(GRPC_ROLES_SERVICE);
  }

  @Get()
  findAll(): Observable<PaginateDto<ResponseRoleDto>> {
    return this.service.findAll({});
  }

  @Post()
  createRole(@Body() dto: CreateRoleDto): Observable<void> {
    return this.service.createRole(dto);
  }
}
