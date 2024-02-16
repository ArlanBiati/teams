import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { Groups } from './src/screens/groups'

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar style="auto" />
      <Groups />
    </View>
  )
}
