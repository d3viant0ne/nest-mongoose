import { Controller, Get, Res, Post, Put, Delete, Param, Body, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { IUser } from './user.model';

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
        const user: IUser = await this.userService.getById(id);
        res.status(HttpStatus.OK).json(user);
    }

    @Post()
    public async create( @Res() res: Response, @Body() user: IUser) {
        const newUser = await this.userService.create(user);
        res.status(HttpStatus.CREATED).json(newUser);
    }

    @Put(':id')
    public async update( @Res() res: Response, @Param('id') id: string, @Body() user: IUser) {
        const userUpdated = await this.userService.update(id, user);
        res.status(HttpStatus.OK).send(userUpdated);
    }

    @Delete(':id')
    public async delete( @Res() res: Response, @Param('id') id: string) {
        const userDeleted = await this.userService.delete(id);
        res.status(HttpStatus.OK).send(userDeleted);
    }
}