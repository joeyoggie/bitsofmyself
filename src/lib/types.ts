export type ProjectCategory = 'Side Projects' | 'Professional Apps';

export type Project = {
    title: string;
    description: string;
    category: ProjectCategory;
    company?: string;
    role?: string;
    tags?: string[];
    url?: string;
};

export type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags?: string[];
    content: string;
};
