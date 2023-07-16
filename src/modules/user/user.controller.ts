import {
  Controller,
  Get,
  Param,
  Delete,
  UseGuards,
  Query,
  Patch,
  Req,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ListParamsDto } from 'src/base/dto/list-params.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Пользователи')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get('/list')
  // @ApiOperation({ summary: 'Получить список пользователей' })
  // async lisOfUsers(@Query() listParamsDto: ListParamsDto) {
  //   return await this.userService.listOfUsers(listParamsDto);
  // }

  @Delete('/:id')
  @ApiOperation({ summary: 'Удалить пользователя по его ID' })
  async removeUser(@Param('id') user_id: number) {
    return await this.userService.deleteUser(user_id);
  }

  // @Get('/profile')
  // @ApiOperation({ summary: 'Получение профиля пользователя' })
  // async getProfile(@Req() req) {
  //   console.log(req.user);
  //   return this.userService.getProfile(req?.user?.id);
  // }

  @Patch('/update/profile')
  @ApiOperation({ summary: 'Изменение данных в профиле' })
  async updateProfile(@Req() req: any, @Body() udpateDto: UpdateUserDto) {
    return await this.userService.updateUsersProfile(req.user?.id, udpateDto);
  }
}
