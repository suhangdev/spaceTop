import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.blog.home.sayHi('egg');
  }
  public async getList() {
    const { ctx } = this
    ctx.body = '<h1>home list</h1>'
  }
}
