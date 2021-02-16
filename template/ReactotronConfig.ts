import AsyncStorage from '@react-native-async-storage/async-storage';
import {mst} from 'reactotron-mst';
import Reactotron from 'reactotron-react-native';

Reactotron.setAsyncStorageHandler!(AsyncStorage)
  .configure()
  .useReactNative()
  .use(mst())
  .connect();
