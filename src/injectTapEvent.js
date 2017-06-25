import injectTapEventPlugin from 'react-tap-event-plugin';

export default () => {
  if (!process.tapEventInjected) {
    injectTapEventPlugin();
    process.tapEventInjected = true;
  }
};
