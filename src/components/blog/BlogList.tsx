
import { useState } from 'react';
import BlogPostCard from './BlogPostCard';
import { Button } from '@/components/ui/button';
import { Grid2X2, LayoutList } from 'lucide-react';

interface BlogListProps {
  posts: Array<{
    id: number;
    title: string;
    excerpt: string;
    publishDate: string;
    readTime: string;
    featured?: boolean;
  }>;
  scrollToTop: () => void;
}

const BlogList = ({ posts, scrollToTop }: BlogListProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="space-y-6">
      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setViewMode('grid')}
          className={viewMode === 'grid' ? 'bg-blue-50' : ''}
        >
          <Grid2X2 className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setViewMode('list')}
          className={viewMode === 'list' ? 'bg-blue-50' : ''}
        >
          <LayoutList className="h-4 w-4" />
        </Button>
      </div>

      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {posts.map((post) => (
          <BlogPostCard
            key={post.id}
            post={post}
            scrollToTop={scrollToTop}
            layout={viewMode}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
