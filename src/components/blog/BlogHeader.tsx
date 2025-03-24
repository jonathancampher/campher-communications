
interface BlogHeaderProps {
  title: string;
  description: string;
}

const BlogHeader = ({ title, description }: BlogHeaderProps) => {
  return (
    <div className="text-center max-w-xl mx-auto mb-8 md:mb-16">
      <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-campher-blue rounded-full mb-3 md:mb-4">
        Blogg
      </span>
      <h2 className="text-2xl md:text-4xl font-medium mb-3 md:mb-4">{title}</h2>
      <p className="text-campher-gray text-sm md:text-base">
        {description}
      </p>
    </div>
  );
};

export default BlogHeader;
