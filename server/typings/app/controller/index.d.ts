// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportPost from '../../../app/controller/post';

declare module 'egg' {
  interface IController {
    post: ExportPost;
  }
}
