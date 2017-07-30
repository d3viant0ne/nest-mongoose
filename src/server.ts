import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import { SETTINGS } from './config'
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

const instance = express();
instance.use(bodyParser.urlencoded({ extended: true }));
instance.use(cors());

const app = NestFactory.create(ApplicationModule, instance);
app.then(
    instance => instance.listen(
        Number(SETTINGS.PORT), () => console.log('Application is listening on port 3000')
    )
);