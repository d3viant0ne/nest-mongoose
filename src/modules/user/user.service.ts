import { Component } from '@nestjs/common';
import { DatabaseService } from './../shared/database.service';
import { IUser, UserModel } from './user.model';

@Component()
export class UserService {
    constructor(private userModel: UserModel) { }

    public async getAll() {
         return (await this.repository).find();
    }

    public async getById(id: string): Promise<IUser> {
        return (await this.repository).findById(id);
    }

    public async create(user: IUser): Promise<IUser> {
        return (await this.repository).create(user);
    }

    public async update(id: string, user: IUser): Promise<IUser> {
        return (await this.repository).findByIdAndUpdate(id, user, {new: true})
    }

    public async delete(id: string): Promise<IUser> {
        return (await this.repository).findByIdAndRemove(id)
    }

    private get repository() {
        return this.userModel.repository();
    }
}