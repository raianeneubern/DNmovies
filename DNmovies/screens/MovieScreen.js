import React, { useEffect, useState } from 'react'
import { 
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/solid'
import { styles, theme } from '../theme'
import { LinearGradient } from 'expo-linear-gradient'

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == "ios";
const topMargin = ios ? '' : ' mt-5';

export default function MovieScreen() {
  return (
    <View>
      <Text>PersonScreen</Text>
    </View>
  )
}