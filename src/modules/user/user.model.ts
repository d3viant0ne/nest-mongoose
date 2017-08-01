import { Component } from '@nestjs/common';
import { Document, Model, model, Schema } from "mongoose";
import { DatabaseService } from './../shared/database.service';

export interface IUser extends Document {
    name: string;
    lastName: string;
    email: number;
    password: string;
    phone: string;
}

export interface IUserModel extends Model<IUser> { }

@Component()
export class UserModel {
    private _model: IUserModel;
    private _schema: Schema;
    private readonly collectionName = 'users';

    constructor(private databaseService: DatabaseService) {
        this.generateSchema();
        this.repository();
    }

    public repository() {
        const models = this.databaseService.connection.modelNames();
        return this._model = (!this._model || !models.includes(this.collectionName))
        ? this.databaseService.connection.model<IUser>(this.collectionName, this._schema) as IUserModel
        : this._model
    }

    private generateSchema() {
        this._schema = new Schema({
            name: { type: String, required: 'Field {PATH} is required' },
            lastName: { type: String, required: 'Field {PATH} is required' },
            email: { type: String, required: 'Field {PATH} is required' },
            password: { type: String, required: 'Field {PATH} is required' },
            phone: { type: String }
        });
    }

}