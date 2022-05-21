import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacebookStrategy } from './global/facebook.strategy';
import { GoogleStrategy } from './global/google.strategy';
import { TwitterStrategy } from './global/twitter.strategy';
import { MicrosoftStrategy } from './global/microsoft.strategy';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FacebookStrategy, GoogleStrategy, TwitterStrategy, MicrosoftStrategy],
})
export class AppModule {}
