import { Component } from '@nestjs/common';
import { DatabaseService } from './../shared/database.service';
import { UserModel } from './user.model';

@Component()
export class UserService {
    constructor(private userModel: UserModel) { }

    public async getAll() {
        const users = (await this.repository).find();
        return users;
    }

    public async getById(id: string) {
        const user = (await this.repository).findById(id);
        return user;
    }

    private get repository() {
        return this.userModel.repository();
    }
}