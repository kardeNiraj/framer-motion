'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Character = ({ value }) => {
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
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}
export default Character

const Word = ({ children, progress, range }) => {
  const characters = children.split('')
  const opacity = useTransform(progress, range, [0, 1])

  const amount = range[1] - range[0]
  const step = amount / children.length

  return (
    <span>
      <span style={{ opacity }} className='mr-3'>
        {characters.map((character, i) => {
          const start = range[0] + i * step
          const end = range[0] + step * (i + 1)

          return (
            <Animate key={i} progress={progress} range={[start, end]}>
              {character}
            </Animate>
          )
        })}
      </span>
    </span>
  )
}

const Animate = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span className='relative'>
      <span className='absolute opacity-10'>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  )
}
