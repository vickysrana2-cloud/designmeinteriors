export interface EnquiryInput {
  fullName: string;
  email: string;
  phone?: string;
  projectLocation?: string;
  serviceCategory?: string;
  estimatedBudget?: string;
  projectOverview: string;
}

export interface EnquiryRecord extends EnquiryInput {
  id?: string;
  createdAt: string;
}

export interface ReviewInput {
  sentence: string;
  stars: number;
  name: string;
  location: string;
  avatar?: string;
}

export interface ReviewRecord extends ReviewInput {
  id?: string;
  createdAt: string;
}
