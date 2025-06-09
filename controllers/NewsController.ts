import { NewsModel } from '../models/NewsModel';

export class NewsController {
  static async getNews() {
    return NewsModel.getNews();
  }
}