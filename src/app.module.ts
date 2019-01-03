import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {KudosModule} from './kudos/kudos.module';
import {KudosController} from "./kudos/controllers/kudos.controller";
import {ConfigModule} from "./config/config.module";
import {TypeOrmModule} from '@nestjs/typeorm';
import {TypeOrmConfigService} from "./config/type-orm-config.service";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmConfigService,
        }),
        KudosModule,
        ConfigModule
    ],
    controllers: [AppController, KudosController],
    providers: [AppService],
})
export class AppModule {
}
