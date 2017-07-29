import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import { SETTINGS } from './config'

const app = NestFactory.create(ApplicationModule);
app.then(
    instance => instance.listen(
        Number(SETTINGS.PORT), () => console.log('Application is listening on port 3000')
    )
);