import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from "@expo/vector-icons";

import Home from '../screens/Home';
import Feed from '../screens/Feed';
import About from '../screens/About';
import Blog from '../screens/Blog';
import Info1 from '../screens/Info1';
import Info2 from '../screens/Info2';


const TabBottom = createBottomTabNavigator();

function TabBottomRoutes() {
    return (
        <TabBottom.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#CD853F",
                tabBarInactive: "#CD853F"
            }}>
            <TabBottom.Screen
                name="Sobre nós"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    size={size}
                                    color={"#CD853F"}
                                    name='home' />
                            );
                        }
                        return (
                            <Ionicons
                                size={size}
                                color={"#CD853F"}
                                name='home-outline' />
                        );
                    }
                }} />
            <TabBottom.Screen
                name="Publicações"
                component={Feed}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    size={size}
                                    color={"#CD853F"}
                                    name='browsers' />
                            );
                        }
                        return (
                            <Ionicons
                                size={size}
                                color={"#CD853F"}
                                name='browsers-outline' />
                        );
                    }
                }} />
            <TabBottom.Screen
                name="Lembretes"
                component={About}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    size={size}
                                    color={"#CD853F"}
                                    name='information-circle' />
                            );
                        }
                        return (
                            <Ionicons
                                size={size}
                                color={"#CD853F"}
                                name='information-circle-outline' />
                        );
                    }
                }} />
        </TabBottom.Navigator>
    );
}

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='Inicio'
                component={TabBottomRoutes}
                options={{
                    drawerLabel: 'Início',
                    drawerIcon: ({ size, color }) => {
                        return <Ionicons size={size} color={"#A0522D"} name="home"/>
                    }
                }}
            />

            <Drawer.Screen 
                name='Blog'
                component={StackRoutes}
                options={{
                    drawerLabel: 'Blog',
                    drawerIcon: ({ size, color }) => {
                        return <Ionicons size={size} color={"#A0522D"} name="browsers"/>
                    }
                }}
            />
        </Drawer.Navigator>
    );
}

const Stack = createNativeStackNavigator();

function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Blog" component={Blog}/>
            <Stack.Screen name="Info1" component={Info1}/>
            <Stack.Screen name="Info2" component={Info2}/>
        </Stack.Navigator>
    );
}
