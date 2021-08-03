import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isEmail } from '../utils';

@Injectable()
export class IsEmailPipe implements PipeTransform {
  transform(value: any) {
    if (!isEmail(value)) {
        throw new BadRequestException()
    }
    return value;
  }
}
