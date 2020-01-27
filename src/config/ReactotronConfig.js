import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronReduxSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ host: 'localhost' })
    .use(reactotronRedux())
    .use(reactotronReduxSaga())
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
