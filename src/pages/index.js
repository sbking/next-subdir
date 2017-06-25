import AppBar from 'material-ui/AppBar'
import injectTapEvent from '../injectTapEvent'

injectTapEvent()

export default () => (
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
)
