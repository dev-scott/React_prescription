import { View, Text} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Header from '../components/Prescription/Header'

const PrescriptionPage = () => {
  return (
    <View>
        <StatusBar style="auto" />
      <Header></Header>
    </View>
  )
}

export default PrescriptionPage