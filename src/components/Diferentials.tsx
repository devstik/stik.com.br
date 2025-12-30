import { motion } from 'framer-motion';
import {container, item} from './animations/StaggeredEffect';

export default function Diferentials() {
  return (
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Por Que Escolher a STIK?</h2>
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="text-center" variants={item}>
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img src="/img/Diferenciais/22mil.png"/>
              </div>
              <h3 className="font-semibold text-lg mb-2">22 mil m2</h3>
              <p className="text-gray-600 text-sm">de superfície edificada</p>
            </motion.div>
            <motion.div className="text-center" variants={item}>
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img src="/img/Diferenciais/+100.png"/>
              </div>
              <h3 className="font-semibold text-lg mb-2">+100 Produtos</h3>
              <p className="text-gray-600 text-sm">de elásticos diversificados</p>
            </motion.div>
            <motion.div className="text-center" variants={item}>
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img src="/img/Diferenciais/referencia.png"/>
              </div>
              <h3 className="font-semibold text-lg mb-2">Referência na Produção</h3>
              <p className="text-gray-600 text-sm">de fitas elásticas e rendas no Ceará</p>
            </motion.div>
            <motion.div className="text-center" variants={item}>
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img src="/img/Diferenciais/50anos.png"/>
              </div>
              <h3 className="font-semibold text-lg mb-2">Mais de 50 anos</h3>
              <p className="text-gray-600 text-sm">no mercado</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
  )
}
