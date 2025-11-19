import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

function ContactSection({animation}) {

    const contacts = [
        {id: 1, text: "social-link-1", href: "#"},
        {id: 2, text: "social-link-2", href: "#"},
        {id: 3, text: "social-link-3", href: "#"},
    ]
    return (
        <section className="bg-black text-white py-16 flex flex-col items-center gap-8">
            <h1 className="text-3xl/6 font-normal tracking-tighter">CONTACT ME</h1>
            <div className="w-32"><img src="https://dummyimage.com/200x200/fff/000" alt="" className="fit rounded-full"/></div>

            <ul className="flex flex-col items-center">
                {
                    contacts.map((contact) => (
                        <motion.li 
                            key={contact.id}
                            {...animation}
                            transition={{ delay: 0.2 * contact.id, duration: 1, ease: 'easeInOut' }}
                        >
                            <a href={contact.href} target="#" className="flex items-end">{contact.text}<ArrowUpRight /></a>
                        </motion.li>
                    ))
                }
            </ul>
      </section>
    )
}

export default ContactSection