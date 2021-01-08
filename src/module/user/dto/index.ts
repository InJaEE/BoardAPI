export class CreateUserDto {
  readonly id: number;
  readonly name: string;
  readonly email: string;
}

/**
 * name?: string
 * email?: string
 */
export type UpdateUserDto = Omit<Partial<CreateUserDto>, 'id'>;
