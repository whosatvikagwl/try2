import Link from 'next/link';

const posts = [
  {
    slug: 'interview-with-aditya-bhat',
    title: 'Interview with Aditya Bhat',
    excerpt: 'An engaging Q&A with Aditya Bhat, a fourthie, about his journey at BITS Goa.',
    series: 'Flagship Series',
    date: '2023-04-15',
    image: '/posts/adityaBhat.jpg'
  },
  {
    slug: 'seniors-share-insights',
    title: 'Seniors Share Their Insights',
    excerpt: 'Q&A with seniors on life, academics, and experiences at BITS Goa.',
    series: 'Yet To Be Named',
    date: '2023-04-10',
    image: '/posts/seniors-share-insights.jpg'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50">
  

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">
          Latest Interviews
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-2 hover:rotate-1 border-gradient"
            >
              <div className="relative">
                <img
                  src={`/images/${post.slug}.jpg`}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.series}
                  </span>
                  <time className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <Link href={`/${post.slug}`} className="block">
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/${post.slug}`}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors group"
                >
                  Read full interview
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-200 to-gray-300 py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; 2025 ASCII. All rights reserved.</p>
        </div>
      </footer>

      {/* Gradient Border Styling */}
      <style jsx>{`
        .border-gradient {
          border-image: linear-gradient(to right, #4f46e5, #3b82f6) 1;
        }
      `}</style>
    </div>
  );
}