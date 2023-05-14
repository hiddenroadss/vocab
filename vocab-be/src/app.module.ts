import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WordsModule } from './words/words.module';
import { ListsModule } from './lists/lists.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [WordsModule, ListsModule, PrismaModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
