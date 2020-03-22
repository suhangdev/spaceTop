import { Service } from 'egg'

export default class Home extends Service {
    public async getPostDetail() {
        const { ctx } = this
        return await this.app.mysql.get('articleDetail', { id: ctx.params.id })
    }
}