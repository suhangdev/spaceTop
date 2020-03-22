// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBlogHome from '../../../app/controller/blog/home';
import ExportBlogPost from '../../../app/controller/blog/post';

declare module 'egg' {
  interface IController {
    blog: {
      home: ExportBlogHome;
      post: ExportBlogPost;
    }
  }
}
