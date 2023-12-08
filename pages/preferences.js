import { Text,View,TextInput, TouchableOpacity } from "react-native";
import styles from './styles';
import NavBar from "./components/DownBar";

export default function PreferencesUser(){
    return(
        <View style={styles.settings_preferences}>
               <View style={styles.box_settings}>
                <View style={styles.setting_boxes}>
                    <Text>Nombre a mostrar</Text>
                    <TextInput style={styles.input_preferences}
                    placeholder="nombre del ...."
                    ></TextInput>
                </View>
                <View style={styles.setting_boxes}>
                    <Text>Solo WiFi?</Text>
                    <Text>logo btn</Text>
                </View>
                <TouchableOpacity style={styles.btn_preferences}>
                    <Text style={styles.text_preferences}>Guardar</Text>
                </TouchableOpacity>
               </View>
                <NavBar/>
        </View>
    )
}