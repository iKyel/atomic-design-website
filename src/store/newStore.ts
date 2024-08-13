import { makeAutoObservable } from "mobx";
import newsData from '../data/Content/News.json'; 
import categoriesData from '../data/Content/Categories.json'; 

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
  categoryId: number; 
  additionalContent: AdditionalContent[];
  tags: string[];
  category?: string; 
}

export interface Category {
  id: number;
  name: string;
}

class NewsStore {
  news: NewsItem[] = [];
  categories: Category[] = [];

  constructor() {
    makeAutoObservable(this);
    this.loadCategories();
    this.loadNews();
  }

  loadCategories() {
    this.categories = categoriesData;
  }

  loadNews() {
    this.news = newsData.map(item => ({
      ...item,
      category: this.getCategoryNameById(item.categoryId),
    }));
  }

  getCategoryNameById(id: number): string | undefined {
    const category = this.categories.find(cat => cat.id === id);
    return category ? category.name : undefined;
  }

  get importantNews(): NewsItem[] {
    return this.news.filter(item => item.important);
  }

  getNewsByCategory(categoryName: string): NewsItem[] {
    return this.news.filter(item => item.category === categoryName);
  }

  getNewsByCategories(): { category: string, news: NewsItem[] }[] {
    return this.categories.map(category => ({
      category: category.name,
      news: this.getNewsByCategory(category.name)
    }));
  }

  getTags(): string[] {
    const tags = new Set<string>();
    this.news.forEach(item => item.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
  }
}

const newsStore = new NewsStore();
console.log(newsStore.getNewsByCategories());
export default newsStore;
