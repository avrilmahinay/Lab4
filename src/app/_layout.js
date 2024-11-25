import React from 'react'
import { Stack } from 'expo-router'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const RootLayout = () => {
  return (
    <PaperProvider>
        <SafeAreaProvider>
            <Stack
            screenOptions={{
              animation: 'none',
            }}>
                <Stack.Screen name="index" options={{
                    headerShown: false
                    }} 
                />

                <Stack.Screen name="register" 
                    options={{ 
                        title: "Registration", 
                        headerTintColor: 'white', 
                        headerStyle: { 
                            backgroundColor: '#303042',
                        }}}
                />

                <Stack.Screen name="recover" 
                    options={{ 
                        title: "Recover Password", 
                        headerTintColor: 'white', 
                        headerStyle: { 
                            backgroundColor: '#303042',
                        }}}
                />

                <Stack.Screen name="reset" 
                    options={{ 
                        title: "Reset Password", 
                        headerTintColor: 'white', 
                        headerStyle: { 
                            backgroundColor: '#303042',
                            }}}
                />

                <Stack.Screen name="set" 
                    options={{ 
                        title: "Set new Password", 
                        headerTintColor: 'white', 
                        headerStyle: { 
                            backgroundColor: '#303042',
                            }}}
                />

                <Stack.Screen name="complete" 
                    options={{ 
                        title: "Complete", 
                        headerTintColor: 'white', 
                        headerStyle: { 
                            backgroundColor: '#303042',
                            }}}
                />

                <Stack.Screen name="dashboard" 
                    options={{ 
                        title: "Dashboard",
                        headerShown: false, 
                        headerTintColor: 'white', 
                        headerStyle: { 
                            backgroundColor: '#303042',
                            }}}
                />

            </Stack>
        </SafeAreaProvider>
    </PaperProvider>
  )
}

export default RootLayout