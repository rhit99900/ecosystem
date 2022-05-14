import { Get, Post, Controller} from '@nestjs/common'

@Controller('tasks')
export class TaskController {

  @Post()
  create(): any{

  }

}