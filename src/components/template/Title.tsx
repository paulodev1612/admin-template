type TitleProps = {
  title: string
  subtitle: string
}

const Title = (props: TitleProps) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

export default Title
