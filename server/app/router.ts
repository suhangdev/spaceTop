import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/post', controller.post.post);
  router.get('/post/:id', controller.post.postDetail);
};
