import Character from '@/components/Character'
import Word from '@/components/Word'

const paragraph =
  'lorem ipsum dolor sit amet dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor invid id el laborum et al. Ut enim ad minim veniam et al et dolore magna aliqu vehicula. Excepteur sint occaecat cupid id nibh ult'

export default function Home() {
  return (
    <main>
      <div className='h-screen' />
      <Word value={paragraph} />
      <div className='h-screen' />
      <Character value={paragraph} />
      <div className='h-screen' />
    </main>
  )
}
