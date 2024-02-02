import { PartialType } from '@nestjs/swagger';
import { CreatePersonaldatumDto } from './create-personaldatum.dto';

export class UpdatePersonaldatumDto extends PartialType(CreatePersonaldatumDto) {}
