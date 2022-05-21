import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy, VerifyCallback } from "passport-google-oauth20";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID: '38445382609-lmm1nqros1msr58lg8dp5qu81b31e75t.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3000/google/redirect',
            scope: ['email', 'profile'],
        });
    }
    async validate (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback): Promise<any> {
        const { name, emails, photos, provider } = profile
        const user = {
          email: emails[0].value,
          firstName: name.givenName,
          lastName: name.familyName,
          picture: photos[0].value,
          provider,
          accessToken
        }
        done(null, user);
      }
}