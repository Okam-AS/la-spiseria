
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "./Blog";
import { useLanguage } from "@/context/LanguageContext";

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  // Find post by slug first, then by ID for backward compatibility
  const post = blogPosts.find((p) => p.slug === postId || p.id === postId);

  if (!post) {
    navigate("/blogg");
    return null;
  }

  // Back button text translation
  const backText = {
    no: "Tilbake til bloggen",
    en: "Back to the blog",
    it: "Torna al blog"
  };

  // Function to format text content with bold and headings
  const formatContent = (content: string) => {
    return content.split('\n').map((paragraph, idx) => {
      // Skip empty paragraphs
      if (paragraph.trim() === '') return null;

      // Check if it's a heading (starts with **)
      if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
        const headingText = paragraph.replace(/\*\*/g, '').trim();
        return (
          <h2 key={idx} className="text-2xl font-bold font-italian mb-4 mt-8 text-white">
            {headingText}
          </h2>
        );
      }

      // Format bold text within paragraphs
      const formattedParagraph = paragraph.split(/(\*\*.*?\*\*)/).map((part, partIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const boldText = part.replace(/\*\*/g, '');
          return <strong key={partIdx} className="font-semibold text-white">{boldText}</strong>;
        }
        return part;
      });

      return (
        <p key={idx} className="mb-4 text-white leading-relaxed">
          {formattedParagraph}
        </p>
      );
    }).filter(Boolean);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-black">
        <article className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Button
                variant="ghost"
                className="mb-8 text-pinseria-red hover:text-pinseria-red/90"
                onClick={() => navigate("/blogg")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {backText[language]}
              </Button>

              <h1 className="text-3xl md:text-4xl font-bold font-italian mb-4 text-white">
                {post.title[language]}
              </h1>
              
              <div className="flex items-center gap-4 mb-8 text-white">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime || "5 min"}</span>
              </div>

              {/* Featured image */}
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={post.id === "3" ? "/lovable-uploads/bd222a2a-f829-4bf8-8218-6c8e9540667f.png" : post.image}
                  alt={post.title[language]}
                  className="w-full h-auto"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                {formatContent(post.content[language])}
              </div>
            </div>
          </div>

          {/* Decorative images */}
          <img 
            src="https://lapinseria.at/wp-content/uploads/2024/10/draw-pinsa.png"
            alt=""
            className="block absolute right-0 top-32 w-48 opacity-20 -z-10 scale-x-[-1]"
          />
          <img 
            src="https://lapinseria.at/wp-content/uploads/2024/10/tiramisu-2.png"
            alt=""
            className="block absolute left-0 bottom-32 w-48 opacity-20 -z-10"
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
