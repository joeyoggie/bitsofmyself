import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, Project } from './types';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    type Items = {
        [key: string]: string | string[];
    };

    const items: Items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });

    return items as unknown as Post;
}

export function getAllPosts(fields: string[] = []): Post[] {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export function getProjectSlugs() {
    if (!fs.existsSync(projectsDirectory)) return [];
    return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug: string, fields: string[] = []): Project {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(projectsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    type Items = {
        [key: string]: any;
    };

    const items: Items = {};

    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'description' || field === 'content') {
            items[field] = content.trim();
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });

    return items as unknown as Project;
}

export function getAllProjects(fields: string[] = []): Project[] {
    const slugs = getProjectSlugs();
    const projects = slugs
        .filter((slug) => slug.endsWith('.mdx'))
        .map((slug) => getProjectBySlug(slug, fields))
        .sort((p1, p2) => ((p1.order ?? 99) > (p2.order ?? 99) ? 1 : -1));
    return projects;
}
