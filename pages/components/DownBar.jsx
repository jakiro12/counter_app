import { TouchableOpacity, View,Text } from "react-native";
import {useNavigation} from '@react-navigation/native';
import styles from './stylesBar.js';

export default function NavBar(){
    const navigation=useNavigation()
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn_screen}
            onPress={()=> navigation.navigate('Calculate')}
            >
                <Text>Calculo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_screen}
             onPress={()=> navigation.navigate('ValuesTo')}
            >
                <Text>Propina</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_screen}
            onPress={()=> navigation.navigate('About')}
            >
                <Text>Acerca de</Text>
            </TouchableOpacity>
        </View>
    )
}