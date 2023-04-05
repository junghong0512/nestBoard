import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';

// @EntityRepository(Board)
// 참고: https://greeng00se.tistory.com/57

//  참고: https://stackoverflow.com/questions/72549668/how-to-do-custom-repository-using-typeorm-mongodb-in-nestjs
// typeorm 3.0 --> https://stackoverflow.com/questions/72549668/how-to-do-custom-repository-using-typeorm-mongodb-in-nestjs
/* 
서비스 클래스에서 레포지토리 생성하려면

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

이런식으로 생성자에서 생성시키는데, 

이거 서비스 클래스 복사해서 

@Injectable()
export class UsersRepository extends repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

요런식으로 변경해서 사용하면 됩니다. 대신 이 클래스파일을 모델파일에서 프로바이더로 줘야 서비스에서 생성자로 불러올 수 있습니다.

super를 사용하는 이유는 this에 데이터소스객체를 바로 할당해서 사용할 수 있게 하기 위함입니다. 

공식문서 어디선가 봣엇는데 다시 찾아보니까 어딧는지 모르겠어서 코드납깁니다.
*/

// 2시간51분

export class BoardRepository extends Repository<Board> {}
