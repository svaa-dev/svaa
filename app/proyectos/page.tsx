import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>Proyectos</h1>
      <Link href={'/proyectos/calculadora'}>Calculadora</Link>
    </div>
  )
}
