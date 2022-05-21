import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-microsoft";

@Injectable()
export class MicrosoftStrategy extends PassportStrategy(Strategy, 'microsoft') {
    constructor() {
        super({
            clientID: 'a99c8fbd-3590-44af-86f5-afc60c272bb1',
            clientSecret: 'rsK8Q~uO93mtqjth-kt6e7PzX~ndlxune4na.baV',
            callbackURL: 'http://localhost:3000/microsoft/redirect',
            scope: ['user.read'],
        });
    }
    async validate (accessToken: string, refreshToken: string, profile: any, done: any): Promise<any> {
        const { name, emails, provider } = profile;
        const user = {
          email: emails[0].value,
          firstName: name.givenName,
          lastName: name.familyName,
          picture: '',
          provider,
          accessToken
        }
        done(null, user);
      }
}