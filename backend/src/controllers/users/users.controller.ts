import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Post('add')
    @UsePipes(new ValidationPipe())
    create(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
    }

    @Get('getall')
     getUsers() {
        return  this.userService.findUser();
    }


}
