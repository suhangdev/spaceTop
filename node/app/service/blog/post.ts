import { Service } from 'egg'

export default class Home extends Service {
    public async getPostDetail() {
        const { ctx } = this
        return await this.app.mysql.get('articleDetail', { id: ctx.params.id })
    }
    public async updatePost() {
        const { ctx } = this
        const { id, title, content, abstract } = ctx.request.body
        const result = await this.app.mysql.beginTransactionScope(async (conn: any) => {
            await conn.update('articleDetail', {
                id,
                title,
                content,
                abstract,
            })
            await conn.update('articleList', {
                id,
                title,
                abstract,
            })
            return true
        }, ctx)
        return result
    }
}