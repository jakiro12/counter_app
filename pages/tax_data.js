import { View , Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import AppCounter from '../provider/ProviderStatus';
import { useContext, useState } from 'react';
export default function TaxCalculated(){
  const{dataUser,persons,percent}=useContext(AppCounter)
  const [money,setMoney]=useState({
    paymentAmount:'0'
  })
  const[howMany,setHowMany]=useState(1)
  const handleUserLoginData=(key,value)=>{
    setMoney({...money,[key]:value})
  }
  const incrementPersons = () => {
    setHowMany(prevPersons => prevPersons + 1);
  };
  
  const decrementPersons = () => {
    if (howMany > 1) {
      setHowMany(prevPersons => prevPersons - 1);
    }
  };
    return(
        <View style={styles.containerBill}>
            <View style={styles.mainBox}>
                <View style={styles.paymentBoxes}>
                    <Text>pago por</Text>
                    <Text> {howMany} persona/s</Text>
                    <TouchableOpacity style={styles.amountBtns}
                    onPress={incrementPersons}
                    ><Text>+</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.amountBtns}
                    onPress={decrementPersons}
                    ><Text>-</Text></TouchableOpacity>
                </View>
                <View style={styles.paymentBoxes}>
                    <Text>pago total :</Text>
                    <Text>{((dataUser.userAmount / persons)   +  (Math.max(dataUser.userAmount * (percent / 100), dataUser.userAmount * (0.1))/persons)) * howMany } </Text>
                </View>
                <View style={styles.paymentBoxes}>
                    <Text>pago con ....</Text>
                    <TextInput
                    style={styles.inputsValues}
                     placeholder={money.paymentAmount}
                     value={money.paymentAmount}
                     onChangeText={(entryValue)=>handleUserLoginData('paymentAmount',entryValue)}
                    >
                    </TextInput>
                </View>
                <View style={styles.paymentBoxes}>
                    <Text>Mi cambio es:</Text>
                    <Text>{money.paymentAmount - ((dataUser.userAmount / persons)   +  (Math.max(dataUser.userAmount * (percent / 100), dataUser.userAmount * (0.1))/persons)) * howMany }</Text>
                </View>
            </View>
        </View>
    )
}