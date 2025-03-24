
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

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
      <Card className="shadow-sm border-blue-100">
        <CardHeader className="bg-blue-50 border-b border-blue-100">
          <CardTitle className="text-campher-dark">Bygg din fremtid på nett</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-campher-gray mb-6">
            Skreddersydde løsninger for små bedrifter som vil vokse i 2025.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-campher-blue" />
              <div>
                <p className="font-medium">Nettsider</p>
                <p className="text-sm text-campher-gray">Responsive og brukervennlige nettsider som konverterer besøkende til kunder</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-campher-blue" />
              <div>
                <p className="font-medium">Google-synlighet</p>
                <p className="text-sm text-campher-gray">SEO-optimalisering for å sikre at kundene dine finner deg på nett</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-campher-blue" />
              <div>
                <p className="font-medium">Support</p>
                <p className="text-sm text-campher-gray">Kontinuerlig teknisk støtte og vedlikehold av din nettside</p>
              </div>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="bg-blue-50 border-t border-blue-100">
          <a 
            href="#contact" 
            className="w-full inline-flex items-center justify-center bg-campher-blue hover:bg-blue-600 text-white px-4 py-3 rounded-md font-medium transition-colors"
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
