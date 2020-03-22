import { Controller } from 'egg';

export default class HomeController extends Controller {
    public async getList() {
        const { ctx } = this
        ctx.status = 200
        ctx.body = {
            data: {
                list: await ctx.service.blog.home.getArticleList()
            },
            status: 'success',
            code: ctx.status
        }
    }
}
