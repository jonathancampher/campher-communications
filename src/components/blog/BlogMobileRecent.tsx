
import { Link } from 'react-router-dom';

interface BlogMobileRecentProps {
  posts: Array<{
    id: number;
    title: string;
    excerpt: string;
    publishDate: string;
    readTime: string;
  }>;
  scrollToTop: () => void;
}

const BlogMobileRecent = ({ posts, scrollToTop }: BlogMobileRecentProps) => {
  return (
    <div className="bg-blue-50 p-4 rounded-xl">
      <h3 className="text-lg font-medium mb-3">Siste innlegg</h3>
      <div className="space-y-3">
        {posts.slice(0, 3).map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`} onClick={scrollToTop} className="block group">
            <div>
              <h4 className="font-medium text-sm group-hover:text-campher-blue transition-colors">{post.title}</h4>
              <p className="text-xs text-campher-gray line-clamp-2">{post.excerpt}</p>
              <p className="text-xs text-gray-500 mt-1">{post.publishDate} | {post.readTime}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogMobileRecent;
