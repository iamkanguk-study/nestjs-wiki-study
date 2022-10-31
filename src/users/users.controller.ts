import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CreateUserDto } from "./dto /post-create-user-dto";
import { VerifyEmailDto } from "./dto /post-email-verify-dto";
import { UserLoginDto } from "./dto /post-user-login-dto";

@Controller('users')
export class UsersController {
  /**
   * DATE: 22.10.31
   * [POST] 회원가입 API
   * URI: /users
   */
  @Post()
  async createUser(@Body() dto: CreateUserDto){
    console.log(dto);
    return;
  }

  /**
   * DATE: 22.10.31
   * [POST] 이메일 인증 API
   * URI: /users/email-verify
   */
  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto) {
    console.log(dto);
    return;
  }

  /**
   * DATE: 22.10.31
   * [POST] 로그인 API
   * URI: /users/login
   */
  @Post('/login')
  async login(@Body() dto: UserLoginDto) {
    console.log(dto);
    return;
  }

  /**
   * DATE: 22.10.31
   * [GET] 회원 정보 조회 API
   * URI: /users/:id
   */
  @Get('/:id')
  async getUserInfo(@Param('id') userId: string) {
    console.log(userId);
    return;
  }
}
