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
                tabBarActiveTintColor: "#DAA520",
                tabBarInactive: "#DAA520"
            }}>
            <TabBottom.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    size={size}
                                    color={"#DAA520"}
                                    name='home' />
                            );
                        }
                        return (
                            <Ionicons
                                size={size}
                                color={"#DAA520"}
                                name='home-outline' />
                        );
                    }
                }} />
            <TabBottom.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    size={size}
                                    color={"#DAA520"}
                                    name='browsers' />
                            );
                        }
                        return (
                            <Ionicons
                                size={size}
                                color={"#DAA520"}
                                name='browsers-outline' />
                        );
                    }
                }} />
            <TabBottom.Screen
                name="About"
                component={About}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (
                                <Ionicons
                                    size={size}
                                    color={"#DAA520"}
                                    name='information-circle' />
                            );
                        }
                        return (
                            <Ionicons
                                size={size}
                                color={"#DAA520"}
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
                    drawerLabel: 'Inicio',
                    drawerIcon: ({ size, color }) => {
                        return <Ionicons size={size} color={"#DAA520"} name="home"/>
                    }
                }}
            />

            <Drawer.Screen 
                name='Blog'
                component={StackRoutes}
                options={{
                    drawerLabel: 'Blog',
                    drawerIcon: ({ size, color }) => {
                        return <Ionicons size={size} color={"#DAA520"} name="browsers"/>
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
