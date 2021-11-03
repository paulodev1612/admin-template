import Title from './Title'

type TopBarProps = {
  title: string
  subtitle: string
}

const TopBar = (props: TopBarProps) => {
  return (
    <div>
      <Title title={props.title} subtitle={props.subtitle} />
    </div>
  )
}

export default TopBar
