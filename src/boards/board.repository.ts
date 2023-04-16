import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';

export class BoardRepository extends Repository<Board> {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {
    super(
      boardRepository.target,
      boardRepository.manager,
      boardRepository.queryRunner,
    );
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;
    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.save(board);
    return board;
  }
}
