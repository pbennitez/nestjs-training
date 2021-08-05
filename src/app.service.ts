import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
import { ConfigType } from '@nestjs/config';
import config from './config'

@Injectable()
export class AppService {
    constructor(
        @Inject('BY_VALUE')
        private readonly value: string,
        @Inject('TODOS')
        private readonly todos: any[],
        private readonly configService: ConfigService,
        @Inject(config.KEY)
        private readonly configType: ConfigType<typeof config>
    ) {}

    getHello(): string {
      return `Hello World!
        ${this.value}
        ${this.configService.get<number>('DATABASE_PORT')}
        ${this.configType.byValue}
      `;
    }

    getTodos() {
      return this.todos;
    }
}
