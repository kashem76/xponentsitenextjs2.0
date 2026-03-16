import { IBlogContent } from "@/lib/types/blog.types";

interface IBlogDetailContentSectionProps {
  content: IBlogContent[];
}

export default function BlogDetailContentSection({
  content,
}: IBlogDetailContentSectionProps) {
  return (
    <section className="py-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none">
          {content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p
                    key={index}
                    className="text-lg text-foreground leading-relaxed mb-6"
                  >
                    {block.text}
                  </p>
                );
              case "heading":
                return (
                  <h2
                    key={index}
                    className="text-2xl lg:text-3xl font-bold mt-12 mb-6"
                  >
                    {block.text}
                  </h2>
                );
              case "list":
                return (
                  <ul key={index} className="space-y-3 mb-8 ml-6">
                    {block.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-lg text-foreground leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              default:
                return null;
            }
          })}
        </article>
      </div>
    </section>
  );
}
