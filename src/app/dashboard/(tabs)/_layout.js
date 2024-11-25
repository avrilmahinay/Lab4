import React from 'react'
import { Tabs } from 'expo-router'
import { AntDesign, MaterialCommunityIcons, Feather } from '@expo/vector-icons'


const DashboardLayout = () => {
  return (
    <Tabs
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarActiveBackgroundColor: '#ceced5',
        tabBarLabelStyle: {
            fontSize: 13
        },
    }}>
        <Tabs.Screen name='home' 
            options={{ 
                title: "Home",
                tabBarIcon: ({ focused }) => <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={24} color='black' /> 
            }}
        />

        <Tabs.Screen name='upload' 
            options={{ 
                title: "Post",
                tabBarIcon: ({ focused }) => <AntDesign name={'plussquareo'} size={22} color='black' />
            }} 
        />

        <Tabs.Screen name='search' 
            options={{ 
                title: "Search",
                tabBarIcon: ({ focused }) => <Feather name= {'search'} size={24} color='black' />
            }} 
        />

    </Tabs>
  )
}

export default DashboardLayout