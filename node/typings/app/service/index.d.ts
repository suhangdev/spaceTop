// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBlogHome from '../../../app/service/blog/home';

declare module 'egg' {
  interface IService {
    blog: {
      home: ExportBlogHome;
    }
  }
}
