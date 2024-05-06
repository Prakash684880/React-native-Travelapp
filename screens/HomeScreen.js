import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Image } from 'react-native'
import { heroimg } from '../assets'

const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <SafeAreaView className="bg-slate-50 flex-1 relative pt-5">
            {/* first section */}
            <View className="flex-row px-6 mt-8  items-center space-x-2">
                <View className="bg-black w-16 h-16 rounded-full items-center justify-center">
                    <Text
                        className="text-green-600 text-3xl font-extrabold">
                        Go
                    </Text>
                </View>
                <Text className="text-3xl font-semibold text-black">Travel</Text>
            </View>


            {/* seconnd section */}

            <View className="px-6 mt-8 space-y-3">
                <Text className="text-[#3C6072] text-4xl">
                    Enjoy the trip with
                </Text>
                <Text className="text-[#00BCC9] text-4xl font-extrabold">
                    Good Moments
                </Text>
                <Text className="text-[#3C6072] text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
            </View>

            {/* circle section */}
            <View className="w-[380px] h-[380px] bg-[#00BCC9] absolute rounded-full bottom-11 left-44  " />
            <View className="w-[380px] h-[380px]  bg-[#E99265] absolute rounded-full -bottom-32 right-44  " />

            {/* image section */}

            <View className=" flex-1 items-center relativejustify-center">
                <Image source={heroimg} className="w-full h-full object-cover"
                />
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen