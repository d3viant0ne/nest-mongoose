import { Module } from '@nestjs/common';
import { SharedModule } from './../shared/shared.module';
import { UserController } from './user.controller';
import { UserModel } from './user.model';
import { UserService } from './user.service';

@Module({
    components: [UserService, UserModel],
    controllers: [UserController],
    modules: [SharedModule]
})
export class UserModule { }