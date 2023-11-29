import { View , Text, TextInput} from 'react-native';
import styles from './styles';
import AppCounter from '../provider/ProviderStatus';
import { useContext, useState } from 'react';
export default function TaxCalculated(){
  const{dataUser,persons,percent}=useContext(AppCounter)
  const [money,setMoney]=useState({
    paymentAmount:'0'
  })
  const handleUserLoginData=(key,value)=>{
    setMoney({...money,[key]:value})
  }
    return(
        <View style={styles.containerBill}>
            <View style={styles.mainBox}>
                <View style={styles.paymentBoxes}>
                    <Text>pago por</Text>
                    <Text> {persons} persona/s</Text>
                </View>
                <View style={styles.paymentBoxes}>
                    <Text>pago total :</Text>
                    <Text>{Number(dataUser.userAmount) +  Math.max(dataUser.userAmount * (percent / 100), dataUser.userAmount * (0.1))} </Text>
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
                    <Text>{money.paymentAmount - (Number(dataUser.userAmount) +  Math.max(dataUser.userAmount * (percent / 100), dataUser.userAmount * (0.1))) }</Text>
                </View>
            </View>
        </View>
    )
}