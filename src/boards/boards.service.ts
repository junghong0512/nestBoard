import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';

import { Board } from './board.entity';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardsService {
  constructor(private readonly boardRepository: BoardRepository) {}

  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard({
      title: createBoardDto.title,
      description: createBoardDto.description,
    });
  }
}
