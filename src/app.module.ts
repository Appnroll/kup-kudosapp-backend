import {Module} from '@nestjs/common';
import {KudosModule} from './kudos/kudos.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from "nestjs-config";
import { PoolModule } from './pool/pool.module';
import * as path from 'path';

const pathToConfiguration = process.env.NODE_ENV == 'production' ? 'config/**/*.js' : 'config/**/*.{ts,js}';

@Module({
  imports: [
    KudosModule,
    ConfigModule.load(path.resolve(__dirname, pathToConfiguration)),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    PoolModule,
  ],
  providers: [],
})
export class AppModule {
}
