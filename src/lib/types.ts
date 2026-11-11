export type ProjectCategory = 'Side Projects' | 'Professional Apps';

export type Project = {
    slug: string;
    title: string;
    description: string;
    category: ProjectCategory;
    company?: string;
    role?: string;
    tags?: string[];
    url?: string;
    order?: number;
    content?: string;
};

export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags?: string[];
    content: string;
};
