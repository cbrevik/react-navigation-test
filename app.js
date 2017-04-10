import { StackNavigator } from 'react-navigation';

import ThisView from './ThisView';
import ThatView from './ThatView';

export default StackNavigator({ ThisView: { screen: ThisView }, ThatView: { screen: ThatView } });