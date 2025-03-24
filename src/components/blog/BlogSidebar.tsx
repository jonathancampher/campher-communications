
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogSidebarProps {
  recentPosts: Array<{
    id: number;
    title: string;
    excerpt: string;
    publishDate: string;
    readTime: string;
  }>;
  scrollToTop: () => void;
}

const BlogSidebar = ({ recentPosts, scrollToTop }: BlogSidebarProps) => {
  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Bygg din fremtid på nett</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-campher-gray mb-4">
            Skreddersydde løsninger for små bedrifter som vil vokse i 2025.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-campher-blue"></span>
              <span>Nettsider</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-campher-blue"></span>
              <span>Google-synlighet</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-campher-blue"></span>
              <span>Support</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <a 
            href="#contact" 
            className="w-full inline-flex items-center justify-center bg-campher-blue hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Start i dag
          </a>
        </CardFooter>
      </Card>
      
      <div className="bg-blue-50 p-5 rounded-xl">
        <h3 className="text-lg font-medium mb-3">Siste innlegg</h3>
        <div className="space-y-4">
          {recentPosts.slice(0, 3).map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} onClick={scrollToTop} className="block group">
              <div>
                <h4 className="font-medium group-hover:text-campher-blue transition-colors">{post.title}</h4>
                <p className="text-sm text-campher-gray">{post.excerpt.substring(0, 80)}...</p>
                <p className="text-xs text-gray-500 mt-1">{post.publishDate} | {post.readTime} lesetid</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
