import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async post() {
    const { ctx } = this;
    const res = await ctx.service.post.getPostList();
    ctx.body = {
      data: res,
      success: true,
    }
  }
  public async postDetail() {
    const { ctx } = this;
    const { id } = ctx.params;
    const res = await ctx.service.post.getPostDetail(id);
    ctx.body = {
      data: res,
      success: true,
    }
  }
}
