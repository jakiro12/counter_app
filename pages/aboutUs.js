import { View,Text } from "react-native";
import styles from './styles';
import NavBar from "./components/DownBar";

export default function AboutUs(){
    return(
        <View style={styles.about_us}>
           <View>
            </View>
            <View>
                <Text style={styles.text_about}>Calculadora de Propinas V 1.0.0</Text>
            </View>
            <NavBar/>
        </View>
    )
}