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
    public async updatePost() {
        const { ctx } = this;
        const result = await ctx.service.blog.post.updatePost()
        ctx.status = 200
        if (result) {
            ctx.body = {
                data: {},
                status: 'success',
                code: ctx.status,
            }
        } else {
            ctx.body = {
                data: {},
                status: 'false',
                code: ctx.status,
            }
        }
    }
}
