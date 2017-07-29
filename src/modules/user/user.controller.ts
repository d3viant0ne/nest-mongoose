import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    public async getAll( @Res() res: Response) {
        const users = await this.userService.getAll();
        res.status(HttpStatus.OK).json(users);
    }

    @Get('/:id')
    public async getById( @Res() res, @Param('id') id) {
        const user = await this.userService.getById(id);
        res.status(HttpStatus.OK).json(user);
    }
}