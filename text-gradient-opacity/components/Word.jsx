'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Word = ({ value }) => {
  const element = useRef(null)
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25'],
  })

  const words = value.split(' ')

  return (
    <p
      ref={element}
      className='flex flex-wrap text-5xl font-sans font-bold max-w-screen-xl'>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Animate key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Animate>
        )
      })}
    </p>
  )
}
export default Word

const Animate = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className='relative'>
      <span className='absolute opacity-10'>{children}</span>
      <motion.span style={{ opacity }} className='mr-3'>
        {children}
      </motion.span>
    </span>
  )
}
