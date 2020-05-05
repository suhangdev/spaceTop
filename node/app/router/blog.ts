import { Application } from "egg";

module.exports = (app: Application) => {
    const { controller, router } = app;
    router.get('/getList', controller.blog.home.getList);
    router.get('/getPostDetail/:id', controller.blog.post.getPost);
    router.post('/updatePost', controller.blog.post.updatePost)
}