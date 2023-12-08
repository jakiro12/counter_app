import { View , Text, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles';
import TaxCalculated from './tax_data';
import { useContext } from 'react';
import { NewStates } from '../provider/ProviderStatus';
import AppCounter from '../provider/ProviderStatus';
import NavBar from './components/DownBar';
import AboutUs from './aboutUs';

function TaxCalculator({navigation}){
  const{dataUser,setDataUser,persons,setPersons,percent,setPercent}=useContext(AppCounter)
   
    const handleUserLoginData=(key,value)=>{
        setDataUser({...dataUser,[key]:value})
      }
    const incrementPersons = () => {
        setPersons(prevPersons => prevPersons + 1);
      };
      
      const decrementPersons = () => {
        if (persons > 1) {
          setPersons(prevPersons => prevPersons - 1);
        }
      };
    return(
        <View style={styles.container}> 
            <StatusBar barStyle="dark-content" backgroundColor="#E3E4D3"  />
            <View style={styles.headerBox}>
                <Text style={styles.headerText}>Calculador de Propinas</Text>
            </View>
            <View style={styles.mainBox}>
                <View style={styles.internalMainBoxes}>
                    <Text>Importe cuenta:</Text>
                    <TextInput
                    style={styles.inputsValues}
                     placeholder={dataUser.userAmount}
                     value={dataUser.userAmount}
                     onChangeText={(entryValue)=>handleUserLoginData('userAmount',entryValue)}
                    >
                    </TextInput>
                </View>
                <View style={styles.internalMainBoxes}>
                <Text>Personas:</Text>
                    <View
                    style={styles.inputsValues}
                    >
                        <Text>
                            {persons }
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.amountBtns}
                    onPress={incrementPersons}
                    ><Text>+</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.amountBtns}
                    onPress={decrementPersons}
                    ><Text>-</Text></TouchableOpacity>
                </View>
                <View style={styles.internalMainBoxes}>
                    <TouchableOpacity style={styles.btnsPercents}
                    onPress={()=>setPercent(10)}
                    >
                        <Text style={styles.textBtnpercentTax}>10%</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnsPercents}
                    onPress={()=>setPercent(12.5)}
                    >
                        <Text style={styles.textBtnpercentTax}>12.5%</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnsPercents}
                    onPress={()=>setPercent(15)}
                    >
                        <Text style={styles.textBtnpercentTax}>15%</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnsPercents}
                    onPress={()=>setPercent(20)}
                    >
                        <Text style={styles.textBtnpercentTax}>20%</Text></TouchableOpacity>
                </View>
                <View style={styles.internalMainBoxes}>
                    <Text>Propina</Text>
                    <View
                    style={styles.inputsValues}
                    >
                        <Text>
                            { Math.max(dataUser.userAmount * (percent / 100), dataUser.userAmount * (0.1))}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.amountBtns} 
                    onPress={()=>setPercent(percent + 1)}>
                        <Text>+</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.amountBtns}
                    onPress={()=>setPercent(percent - 1)}
                    ><Text>-</Text></TouchableOpacity>
                    </View>
            </View>
            <View style={styles.footerBox}>
                <View style={styles.footerInformationContainer}>
                <View style={styles.footerBoxesInformation}>
                    <Text>Importe de la propina:</Text>
                    <Text>$  {Math.max(dataUser.userAmount * (percent / 100), dataUser.userAmount * (0.1))}</Text>
                </View>
                <View style={styles.footerBoxesInformation}>
                    <Text>Importe total:</Text>
                    <Text>$ {Number(dataUser.userAmount) +  Math.max(dataUser.userAmount * (percent / 100), dataUser.userAmount * (0.1))}</Text>
                </View>
                <View style={styles.footerBoxesInformation}>
                    <Text>Importe por persona:</Text>
                    <Text>$ {(dataUser.userAmount / persons)   +  (Math.max(dataUser.userAmount * (percent / 100), dataUser.userAmount * (0.1))/persons)}</Text>
                </View>
                </View>
                <TouchableOpacity style={styles.btnSendValues}
                    onPress={()=>{navigation.navigate('ValuesTo')}}
                >
                    <Text style={styles.textBtnSendValues}>Pagar</Text>
                </TouchableOpacity>
            </View>
            <NavBar/>
        </View>
    )
}
const Stack = createNativeStackNavigator();  
function TaxsApp() {
   
    return (
    <NewStates>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
          <Stack.Screen name="Calculate" component={TaxCalculator} />
          <Stack.Screen name="ValuesTo" component={TaxCalculated} />
          <Stack.Screen name="About" component={AboutUs} />
        </Stack.Navigator>
      </NavigationContainer>
      </NewStates>
    );
  }
export default TaxsApp;