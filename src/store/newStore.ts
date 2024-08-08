import { makeAutoObservable } from "mobx";
import newsData from '../data/Content/News.json'; // Adjust the path as necessary

interface NewsItem {
  image: string;
  title: string;
  date: string;
  content: string;
  important: boolean;
}

interface NewsCategory {
  category: string;
  items: NewsItem[];
}

class NewsStore {
  news: NewsCategory[] = [];

  constructor() {
    makeAutoObservable(this);
    this.loadNews();
  }

  loadNews() {
    this.news = newsData as NewsCategory[];
  }

  get importantNews(): NewsItem[] {
    return this.news.flatMap(category => category.items.filter(item => item.important));
  }
}

const newsStore = new NewsStore();
export default newsStore;