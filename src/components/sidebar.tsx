import Image from "next/image"
import Link from "next/link"
import { pick } from "@contentlayer/client"
import { allPosts } from "contentlayer/generated"

const posts = allPosts
  .map((post) =>
    pick(post, [
      "title",
      "slug",
      "publishedAt",
      "excerpt",
      "draft",
      "image",
      "tags",
      "categories",
    ])
  )
  .slice(0, 3)
  .sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1
    }
    return 1
  })

function Sidebar() {
  return (
    <div className="mt-10 lg:mt-0">
      <h2 className="text-accent-900 text-lg font-medium">Recent Articles</h2>

      <div className="border-accent-200 mt-4 rounded-lg border bg-white shadow-sm">
        <h3 className="sr-only">Items in your cart</h3>
        <ul role="list" className="divide-accent-200 divide-y">
          {posts.map((product) => (
            <li key={product.slug} className="flex px-4 py-6 sm:px-6">
              <div className="shrink-0">
                <Image
                  src={product.image!}
                  alt={product.title}
                  width={80}
                  height={80}
                  className=" rounded-md"
                />
              </div>

              <div className="ml-6 flex flex-1 flex-col">
                <div className="flex">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm">
                      <Link
                        href={`/blog/${product.slug}`}
                        className="text-accent-700 hover:text-accent-500 font-medium"
                      >
                        {product.title}
                      </Link>
                    </h4>
                  </div>

                  <div className="ml-4 flow-root shrink-0">
                    <p className=" text-accent-500 text-xs">
                      {product.publishedAt}
                    </p>
                  </div>
                </div>
                <p className="text-accent-500 mt-1 line-clamp-3 text-xs">
                  {product.excerpt}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
