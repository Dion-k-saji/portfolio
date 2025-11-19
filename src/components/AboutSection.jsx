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
				src= "https://dummyimage.com/200x200/000/fff"
				alt="your image goes here"
				className="w-36 h-36 rounded-full"
			/>

			<motion.h2
				{...animation}
				transition={{ delay: .9, duration: 1, ease: 'easeInOut' }}
				className="text-2xl font-normal tracking-tight text-center px-17 md:px-96"
			>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, sunt sequi eligendi doloremque dolore nisi non deleniti odit voluptate autem reiciendis dolorem exercitationem provident a vero omnis sint. Pariatur sunt repudiandae fugiat modi doloribus eum facere, recusandae quis dolores, hic totam. Eos quas, illum aut sapiente expedita molestias tempore odit.
			</motion.h2>
		</section>
    )
}

export default AboutSection