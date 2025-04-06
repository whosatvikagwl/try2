import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function InterviewWithAdityaBhat() {
    const sections = [
        {
            title: "On College Life and Priorities",
            image: "/images/college-life.jpg",
            alt: "Aditya Bhat on campus",
            content: `When asked about activities he would have spent less time on, Aditya reflects, 
            "I wouldn't say I regret anything, but if there's one thing I would've spent less time on, 
            it would be clubs. They're great for friendships and figuring out career paths, but in terms 
            of technical knowledge, I didn't get much. You can do more impactful work directly with professors."`,
        },
        {
            title: "Research and Projects",
            image: "/images/research-projects.jpg",
            alt: "Aditya working on research projects",
            content: `Aditya's journey in research began with Professor Vinayak, spanning his third and fourth years. 
            His first project focused on network measurement—specifically measuring latency between end users 
            and CDN servers. "That one's almost done; we're finishing up a paper now," he shares.`,
            list: [
                "Colorectal cancer detection in collaboration with Goa Medical College",
                "Research on programmable switches (P4) from Intel, exploring deep packet inspection and ML applications",
            ],
        },
        {
            title: "International Experience",
            image: "/images/international-experience.jpg",
            alt: "Aditya in Strasbourg, France",
            content: `Aditya's thesis work took him to the Kamal Lab in Strasbourg, France, where he worked on 
            diffusion models. "The resources are wild—over 30 H100 GPUs and lots of researchers from 
            all over the world," he enthusiastically recalls.`,
        },
        {
            title: "Parting Wisdom",
            image: "/images/parting-wisdom.jpg",
            alt: "Aditya sharing parting wisdom",
            content: `"My friendships—especially those formed during Gala. Those relationships made me who I am. 
            Don't take them for granted."`,
            isQuote: true,
        },
    ];

    return (
        <>
            <Head>
                <title>Interview with Aditya Bhat - ASCII Blog</title>
                <meta
                    name="description"
                    content="An engaging Q&A with Aditya Bhat, a fourthie, about his journey at BITS Goa - from coding adventures to campus life."
                />
            </Head>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-2xl">
                <header className="mb-12 text-center">
                    <motion.h1
                        className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Interview with Aditya Bhat
                    </motion.h1>
                    <motion.div
                        className="flex justify-center items-center space-x-4 text-gray-600"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <time className="text-sm">April 15, 2023</time>
                        <span>·</span>
                        <span className="text-sm font-medium">Flagship Series</span>
                    </motion.div>
                </header>

                <div className="space-y-12">
                    {sections.map((section, index) => (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <motion.div
                                className="mb-6"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <img
                                    src={section.image}
                                    alt={section.alt}
                                    className="w-full h-64 object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
                                />
                            </motion.div>
                            <motion.h2
                                className="text-3xl font-semibold text-gray-900 mb-4"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                {section.title}
                            </motion.h2>
                            <motion.p
                                className="text-gray-700 leading-relaxed mb-6"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                {section.content}
                            </motion.p>
                            {section.list && (
                                <ul className="list-disc list-inside mt-4 space-y-3 text-gray-700">
                                    {section.list.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            )}
                            {section.isQuote && (
                                <motion.blockquote
                                    className="border-l-4 border-blue-500 pl-6 italic text-gray-700 text-lg bg-blue-50 p-4 rounded-lg"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    {section.content}
                                </motion.blockquote>
                            )}
                        </motion.section>
                    ))}
                </div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 hover:shadow-md transition duration-200"
                    >
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to all interviews
                    </Link>
                </motion.div>
            </article>
        </>
    );
}
