import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

function ContactSection({animation}) {

    const contacts = [
        {id: 1, text: "dionksaji03@gmail.com", href: "dionksaji03@gmail.com"},
        {id: 2, text: "github - dion k saji", href: "https://github.com/Dion-k-saji"},
        {id: 3, text: "linkedin - dion k saji", href: "https://www.linkedin.com/in/dion-k-saji?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
    ]
    return (
        <section className="bg-black text-white py-16 flex flex-col items-center gap-8">
            <h1 className="text-3xl/6 font-normal tracking-tighter">CONTACT ME</h1>
            <div className="w-32"><img src="/dks.jpg" alt="" className="fit rounded-full"/></div>

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