import { Service } from 'egg'

export default class Home extends Service {
    public async getArticleList() {
        return await this.app.mysql.select('articleList', {
            orders: [['id', 'desc']]
        })
    }
}