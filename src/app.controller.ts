import { Controller, Get, HttpStatus, Redirect, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/facebook")
  @UseGuards(AuthGuard("facebook"))
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }


  @Get('/facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  @Redirect('', 302)
  async facebookLoginRedirect(@Req() req: Request): Promise<any> {
    const { user } = <any>req;
    console.log('gaaaaaaaaaaaaaaaaaaaa',user);
    return { url: 'https://localhost:4200/authorize/%3Fresponse_type%3Dtoken%26client_id%3D5Tv4JZDW7aMGtw8drZ68ivOD5fgb3n81UhK3p4eX%26scope%3Dread%26state%3D123%26redirect_uri%3Dhttps%253A%252F%252Fwww.upeu.dev%252Flamb-financial%252Ffronts%252Fpurchases%252Foauth%252Fredirect' };
    // console.log('gooooooooooooo',user);
    // return {
    //   statusCode: HttpStatus.OK,
    //   data: user,
    // };
  }

  @Get("/google")
  @UseGuards(AuthGuard('google'))
  async googleAuth(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get('/google/redirect')
  @UseGuards(AuthGuard('google'))
  @Redirect('', 302)
  async googleAuthRedirect(@Req() req: Request): Promise<any> {
    const { user } = <any>req;
    console.log('hola mundoooooo',user);
    return { url: 'https://localhost:4200/authorize/%3Fresponse_type%3Dtoken%26client_id%3D5Tv4JZDW7aMGtw8drZ68ivOD5fgb3n81UhK3p4eX%26scope%3Dread%26state%3D123%26redirect_uri%3Dhttps%253A%252F%252Fwww.upeu.dev%252Flamb-financial%252Ffronts%252Fpurchases%252Foauth%252Fredirect' };
  }

  @Get("/twitter")
  @UseGuards(AuthGuard('twitter'))
  async twitterAuth(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get('/twitter/redirect')
  @UseGuards(AuthGuard('twitter'))
  @Redirect('', 302)
  async twitterCallback(@Req() req: Request): Promise<any> {
    const { user } = <any>req;
    console.log('hola mundoooooo',user);
    return { url: 'https://localhost:4200/authorize/%3Fresponse_type%3Dtoken%26client_id%3D5Tv4JZDW7aMGtw8drZ68ivOD5fgb3n81UhK3p4eX%26scope%3Dread%26state%3D123%26redirect_uri%3Dhttps%253A%252F%252Fwww.upeu.dev%252Flamb-financial%252Ffronts%252Fpurchases%252Foauth%252Fredirect' };
  }

  @Get("/microsoft")
  @UseGuards(AuthGuard('microsoft'))
  async microsoftAuth(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get('/microsoft/redirect')
  @UseGuards(AuthGuard('microsoft'))
  @Redirect('', 302)
  async microsoftCallback(@Req() req: Request): Promise<any> {
    const { user } = <any>req;
    console.log('hola mundoooooo',user);
    return { url: 'https://localhost:4200/authorize/%3Fresponse_type%3Dtoken%26client_id%3D5Tv4JZDW7aMGtw8drZ68ivOD5fgb3n81UhK3p4eX%26scope%3Dread%26state%3D123%26redirect_uri%3Dhttps%253A%252F%252Fwww.upeu.dev%252Flamb-financial%252Ffronts%252Fpurchases%252Foauth%252Fredirect' };
  }

}
