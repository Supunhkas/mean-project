import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './controllers/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './controllers/movies/movies.module';
import { CommentsModule } from './controllers/comments/comments.module';
import { CategoryModule } from './controllers/category/category.module';
import { AuthModule } from './controllers/auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_URL),
    UsersModule,
    MoviesModule,
    CommentsModule,
    CategoryModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
