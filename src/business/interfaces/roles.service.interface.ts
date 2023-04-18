import { CreateRoleDto, ResponseRoleDto } from '@presentation/dto/roles';
import { Observable } from 'rxjs';
import { PaginateDto } from '@presentation/dto/common';

export interface IRolesService {
  createRole(dto: CreateRoleDto): Observable<void>;
  findAll(dto: unknown): Observable<PaginateDto<ResponseRoleDto>>;
}
