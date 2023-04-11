import { Calculator } from './Calculator'
import { ContainerTitle } from './ContainerTitle'

const Container = () => {
  return (
    <section className='container'>
      <ContainerTitle />
      <Calculator />
    </section>
  )
}

export { Container }
