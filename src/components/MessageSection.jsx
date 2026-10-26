import { motion } from 'framer-motion'
import './MessageSection.css'

export default function MessageSection() {
  return (
    <section className="message-section">
      <motion.div
        className="message-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="ring-glow-wrapper">
          <div className="ring-glow">
            <span className="ring-heart">♥</span>
          </div>
        </div>

        <h2 className="message-title">
          <span className="message-lead">يا أغلى إنسانة في حياتي...</span>
          <span className="signature">ملك ❤️</span>
        </h2>

        <motion.p
          className="message-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          مش هعرف أعبّرلك بالكلام، بس حبيت أعملّك المكان ده عشان تعرفي قد إيه انتي مهمة بالنسبالي.<br /><br />
          يوم 18/8/2026 كان من أجمل أيام عمري، يوم خطوبتنا، اليوم اللي بقيتي فيه رسمي ليا ونصيبي.
          ومن يومها وأنا كل شوية باكتشف حاجة جديدة تخليني أحبك أكتر.
          ضحكتك بتفرحني، وكلامك بيطمّني، وأي يوم تعبان يهون عليّا لما بسمع صوتك.<br /><br />
          اسمك ملك، ومعناه ملاك، وانتي ملاك بجد، نزلتي في حياتي ونوّرتها.
          ولو الزمن يرجع تاني مليون مرة، هختارك تاني من غير ما أفكر.<br /><br />
          وعد مني: هفضل جنبك، هحترمك وأقدّرك، وهكون معاكي في كل الظروف
          حلوة كانت ولا صعبة، لحد ما نكمّل نصيبنا ونبني بيتنا مع بعض بإذن الله، وربنا يديمك في حياتي.</motion.p>

        <motion.div
          className="message-signature-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        <motion.p
          className="message-from"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          بحبك يا ملك بجد، وربنا يخليكي ليا ويفضل يضحكك طول عمرك ❤️🌹
        </motion.p>
      </motion.div>
    </section>
  )
}
