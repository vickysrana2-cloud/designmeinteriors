export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  category: string;
  labels?: string[];
  published: boolean;
  createdAt: string;
  updatedAt?: string;
  bloggerUrl?: string;
}

