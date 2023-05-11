import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordsModule } from './words/words.module';
import { ListsModule } from './lists/lists.module';

@Module({
  imports: [WordsModule, ListsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
