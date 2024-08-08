import { makeAutoObservable } from "mobx";
import newsData from '../data/Content/News.json'; 

export interface AdditionalContent {
  title: string;
  subContent: { text: string }[];
}

export interface NewsItem {
  id: number;
  image: string;
  title: string;
  date: string;
  content: string;
  important: boolean;
  comments: number;
  shares: number;
  location: string;
  additionalContent: AdditionalContent[];
  tags: string[];
}

export interface NewsCategory {
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

  
  getNewsByCategory(category: string): NewsItem[] {
    const categoryData = this.news.find(cat => cat.category === category);
    return categoryData ? categoryData.items : [];
  }

  getTags(): string[] {
    const tags = new Set<string>();
    this.news.flatMap(category => category.items.forEach(item => item.tags.forEach(tag => tags.add(tag))));
    return Array.from(tags);
  }
}

const newsStore = new NewsStore();
export default newsStore;
