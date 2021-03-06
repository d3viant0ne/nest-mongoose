import { Component } from '@nestjs/common';
import * as mongoose from "mongoose";
import { SETTINGS } from '../../config';

@Component()
export class DatabaseService {
    private _connection: mongoose.Connection;

    constructor() {
        (<any>mongoose).Promise = global.Promise;
    }

    get connection() {
        return this._connection = (!this._connection)
        ? mongoose.createConnection(this.getUrl(), { useMongoClient: true })
        : this._connection
    }

    private getUrl() {
        const auth = `${SETTINGS.DB.USER}:${SETTINGS.DB.PASSWORD}@`;
        const url = `${SETTINGS.DB.HOST}:${SETTINGS.DB.PORT}/${SETTINGS.DB.NAME}`;
        let start = 'mongodb://';
        if (SETTINGS.DB.USER) {
            start += auth;
        }
        return start += url;
    }
}
