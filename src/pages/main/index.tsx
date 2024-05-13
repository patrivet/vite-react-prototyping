import { Container } from './Main.style'
import { Typography } from '@holidayextras/component-library'

const Main: any = () => {
  return (
    <>
      <Container>hello world</Container>
      <Typography element='h1' size='sml'>
        hello i am a component from that component library.
      </Typography>
    </>
  )
}
export default Main
