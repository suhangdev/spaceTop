import { Controller } from 'egg';

export default class HomeController extends Controller {
    public async getPost() {
        const { ctx } = this;
        ctx.status = 200
        ctx.body = {
            data: await ctx.service.blog.post.getPostDetail(),
            status: 'success',
            code: ctx.status,
        }
    }
}
