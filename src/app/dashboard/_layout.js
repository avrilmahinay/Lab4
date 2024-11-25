import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import DrawerContent from '../../components/Drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={DrawerContent}>
            <Drawer.Screen
                name="(tabs)" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Home',
                    title: 'Dashboard',
                }}
            />
            <Drawer.Screen
                name="settings" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Settings',
                    title: 'Settings',
                }}
            />
      </Drawer>
    </GestureHandlerRootView>
  );
}
