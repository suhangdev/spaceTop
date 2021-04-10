import { Service } from 'egg';

export default class PostService extends Service {
  public async getPostList() {
    return await this.app.mysql.select('articleList');
  }

  public async getPostDetail(id: number) {
    return await this.app.mysql.get('articleDetail', { id })
  }
}