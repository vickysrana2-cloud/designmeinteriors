export interface BloggerAuthor {
  id: string;
  displayName: string;
  url?: string;
  image?: {
    url: string;
  };
}

export interface BloggerPostImage {
  url: string;
}

export interface BloggerPost {
  kind?: string;
  id: string;
  blog: {
    id: string;
  };
  published: string;
  updated: string;
  url: string;
  selfLink?: string;
  title: string;
  content: string;
  images?: BloggerPostImage[];
  author: BloggerAuthor;
  labels?: string[];
  etag?: string;
}

export interface BloggerPostListResponse {
  kind?: string;
  nextPageToken?: string;
  prevPageToken?: string;
  items?: BloggerPost[];
  etag?: string;
}

export interface GetBloggerPostsOptions {
  pageToken?: string;
  maxResults?: number;
  label?: string;
  orderBy?: "published" | "updated";
}
