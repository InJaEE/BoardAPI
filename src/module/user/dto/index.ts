import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  readonly id: number;
  @IsString()
  readonly name: string;
  @IsString()
  readonly email: string;
}

/**
 * name?: string
 * email?: string
 */
export type UpdateUserDto = Omit<Partial<CreateUserDto>, 'id'>;
