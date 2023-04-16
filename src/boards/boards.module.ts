import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';

// @Module({
//   // imports: [TypeOrmModule.forFeature([BoardRepository])],
//   imports: [
//     TypeOrmModule.forFeature([Board]), // 추가
//   ],
//   controllers: [BoardsController],
//   providers: [BoardsService, BoardRepository],
//   exports: [BoardsService],
// })

@Module({
  imports: [TypeOrmModule.forFeature([Board])],
  providers: [BoardsService, BoardRepository],
  controllers: [BoardsController],
  exports: [BoardsService, BoardRepository],
})
export class BoardsModule {}
