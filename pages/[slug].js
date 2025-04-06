import { useRouter } from 'next/router';

const posts = {
  'interview-with-professor-smith': {
    title: 'Interview with Professor Smith',
    series: 'Flagship Series',
    date: '2023-04-15',
    intro: 'In this interview, we sit down with Professor Smith to discuss his career and experiences at BITS Goa.',
    questions: [
      { question: 'Q1: What inspired you to join BITS Goa?', answer: 'The academic culture and environment...' },
      { question: 'Q2: How do you feel about the students here?', answer: 'Very motivated and bright minds...' }
    ],
    conclusion: 'This insightful talk reflects the spirit of BITS Goa and its faculty.'
  },
  'seniors-share-insights': {
    title: 'Seniors Share Their Insights',
    series: 'Yet To Be Named',
    date: '2023-04-10',
    intro: 'Our seniors talk about personal experiences, challenges, and memories at BITS Goa.',
    questions: [
      { question: 'Q1: What’s your favorite memory at BITS?', answer: 'Definitely the fests and hostel life...' },
      { question: 'Q2: Any advice for freshers?', answer: 'Explore, learn, and enjoy every bit!' }
    ],
    conclusion: 'Their stories inspire and guide the future BITSians.'
  }
};

export default function PostPage() {
  const { query } = useRouter();
  const post = posts[query.slug];

  if (!post) return <p className="text-center">Loading...</p>;

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2 text-center">{post.title}</h1>
      <div className="text-sm text-gray-500 text-center mb-6">{post.series} • {post.date}</div>

      <img
        src={`/posts/${query.slug}.jpg`}
        alt={post.title}
        className="rounded-xl mb-6 w-full max-w-md mx-auto shadow"
      />

      <section className="mb-6">
        <p className="text-lg italic text-gray-800">{post.intro}</p>
      </section>

      <section className="mb-8 space-y-4">
        {post.questions.map((qa, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-xl text-blue-800">{qa.question}</h3>
            <p className="text-gray-700 mt-1">{qa.answer}</p>
          </div>
        ))}
      </section>

      <section className="border-t pt-4">
        <p className="text-lg">{post.conclusion}</p>
      </section>

      <img
        src={`/sketches/sketch${Math.floor(Math.random() * 3) + 1}.png`}
        alt="Campus Sketch"
        className="w-full mt-10 rounded-lg opacity-60"
      />
    </article>
  );
}
