import { Application } from "egg";

module.exports = (app: Application) => {
    const { controller, router } = app;
    router.get('/', controller.blog.home.index);
    router.get('/list', controller.blog.home.getList);
}