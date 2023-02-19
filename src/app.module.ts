import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViewContoller } from './views/view.controller';
import { UserModule } from './user/user.module';
import { PlaceModule } from './place/place.module';
import { ConfigurationModule } from './config/configuration.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPlace } from './entities/user-place.entity';
import { ViewModule } from './views/view.module';

@Module({
  imports: [
    UserModule,
    PlaceModule,
    ConfigurationModule,
    TypeOrmModule.forRoot({
      entities: [UserPlace],
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true,
      logging: true,
    }),
    ViewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
