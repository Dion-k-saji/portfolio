import { motion } from "framer-motion"

function AboutSection({animation}) {
    return (
		<section className="bg-accent-bg text-accent-fg py-24 flex flex-col items-center gap-10 lg:gap-12">
			<motion.h1
				{...animation}
				transition={{ delay: 0.5, duration: 1, ease: 'easeInOut' }}
				className="font-black text-4xl tracking-tighter"
			>
				About me.
			</motion.h1>

			<motion.img
				{...animation}
				transition={{ delay: 0.7, duration: 1, ease: 'easeInOut' }}
				src= "/dion.jpg"
				alt="your image goes here"
				className="w-36 h-36 rounded-full"
			/>

			<motion.h2
				{...animation}
				transition={{ delay: .9, duration: 1, ease: 'easeInOut' }}
				className="text-2xl font-normal tracking-tight text-center px-17 md:px-96"
			>
				I’m Dion, a Computer Science Engineer passionate about data science and turning data into meaningful insights. I enjoy exploring datasets, building machine learning models, and solving real-world problems using data-driven approaches. I’m continuously learning new tools and technologies, and I love working on projects that create value and make an impact.”
			</motion.h2>
		</section>
    )
}

export default AboutSection