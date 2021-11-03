import TopBar from './TopBar'
import SideBar from './SideBar'
import Content from './Content'

type LayoutProps = {
  title: string
  subtitle: string
  children?: any
}

const Layout = (props: LayoutProps) => {
  return (
    <div className={`flex w-screen h-screen`}>
      <SideBar />
      <div className={`flex flex-col w-full p-7 bg-gray-200`}>
        <TopBar title={props.title} subtitle={props.subtitle} />
        <Content>{props.children}</Content>
      </div>
    </div>
  )
}

export default Layout
