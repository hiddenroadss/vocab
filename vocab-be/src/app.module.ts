import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WordsModule } from './words/words.module';
import { ListsModule } from './lists/lists.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { IamModule } from './iam/iam.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    WordsModule,
    ListsModule,
    PrismaModule,
    UsersModule,
    IamModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
