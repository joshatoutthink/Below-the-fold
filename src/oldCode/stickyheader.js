
//also needs the component Sticky --import Sticky from 'react-sticky-el';--
constructor(props) {
  super(props)
  this.state = {
    height: [],
    sticky: 'relative',
    bodyPadding: 0,
    node: '',
  }
}

handleScroll = () => {
  console.log(window.scrollY)
  if (window.scrollY > 0) {

    this.setState({
      sticky: 'fixed',
      bodyPadding: `${this.state.height}px`,

    })
    this.containerNode.nextSibling.style.marginTop = this.state.bodyPadding
    this.containerNode.parentNode.style.paddingTop = '.1px'

  } else {
    this.setState({
      sticky: 'relative',
      bodyPadding: 0,
    })
    this.containerNode.nextSibling.style.marginTop = this.state.bodyPadding
    this.containerNode.parentNode.style.paddingTop = '0px'
  }
}
saveRef = (ref) => this.containerNode = ref