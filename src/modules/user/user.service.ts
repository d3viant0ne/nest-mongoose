import { Component } from '@nestjs/common'
import { User, IUser } from './user.model'

@Component()
export class UserService {

    public async getAll() {
        return (await User).find();
    }

    public async getById(id: string):Promise<IUser> {
        return await User.findById(id);
    }

    public async create(user: IUser): Promise<IUser> {
        return await User.create(user);
    }

    public async update(id: string, user: IUser): Promise<IUser> {
        return await User.findByIdAndUpdate(id, user, {new: true})
    }

    public async delete(id: string) {
        return await User.findByIdAndRemove(id)
    }
}