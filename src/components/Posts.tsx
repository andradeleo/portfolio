import { useEffect, useState } from "react";

type TabNewsContent = {
  id: string;
  parent_id: string | null;
  slug: string;
  title: string | null;
  published_at: string;
};

type Post = {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
};

const USERNAME = "andradeleo";
const API_URL = `https://www.tabnews.com.br/api/v1/contents/${USERNAME}?strategy=new&per_page=6`;

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

function toPost(content: TabNewsContent): Post | null {
  if (content.parent_id !== null || !content.title) return null;

  return {
    id: content.id,
    slug: content.slug,
    title: content.title,
    publishedAt: dateFormatter.format(new Date(content.published_at)),
  };
}

export function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<"loading" | "error" | "done">("loading");

  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      try {
        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const contents = (await response.json()) as TabNewsContent[];
        setPosts(contents.map(toPost).filter((post) => post !== null));
        setStatus("done");
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error("Falha ao carregar posts do TabNews", error);
        setStatus("error");
      }
    }

    void loadPosts();

    return () => {
      controller.abort();
    };
  }, []);

  if (status === "done" && posts.length === 0) return null;

  return (
    <section className="my-32 text-left">
      <h2 className="mb-16 text-5xl font-bold tracking-tighter text-zinc-200">
        Postagens no tabnews
      </h2>

      {status === "loading" && (
        <p className="text-lg text-zinc-500">Carregando posts...</p>
      )}

      {status === "error" && (
        <p className="text-lg text-zinc-500">
          Não foi possível carregar os posts agora.
        </p>
      )}

      {status === "done" && (
        <ul className="border-t border-zinc-700">
          {posts.map((post) => (
            <li
              key={post.id}
              className="flex flex-col gap-4 border-b border-zinc-700 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10"
            >
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
                  {post.publishedAt}
                </span>
                <h3 className="text-2xl font-bold text-zinc-100">
                  {post.title}
                </h3>
              </div>
              <a
                href={`https://www.tabnews.com.br/${USERNAME}/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 self-start rounded-full border border-zinc-700 px-5 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-orange-500 hover:text-orange-500 sm:self-auto"
              >
                Ler post
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
