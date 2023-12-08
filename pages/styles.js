import {StyleSheet} from 'react-native';

export default landingDesign=StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#000000',
        flexDirection:'column',
    },
    headerBox:{
        width:'100%',
        height:'8%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8b3a62',
    },
    headerText:{
        fontSize:22,
        color:'#ffffff'
    },  
    mainBox:{
        width:'95%',
        height:'40%',
        borderColor:'#000000',
        borderWidth:2,
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'#dddddd',
    },
    footerBox:{
        width:'95%',
        height:'35%',
        borderColor:'#000000',
        borderWidth:2,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    internalMainBoxes:{
        width:'90%',
        height:'20%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    inputsValues:{
        width:'45%',
        height:40,
        borderColor:'#000000',
        borderBottomWidth:2,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    btnsPercents:{
        width:'20%',
        height:'100%',
        backgroundColor:'#8b3a62',
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    amountBtns:{
        width:'15%',
        height:'80%',
        backgroundColor:'#E3E4D3',
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    footerInformationContainer:{
        width:'100%',
        height:'50%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#dddddd',
        borderRadius:10,
    },
    footerBoxesInformation:{
        width:'90%',
        height:35,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    btnSendValues:{
        width:'30%',
        height:35,
        backgroundColor:'#ffffff',
        marginBottom:50,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },
    textBtnpercentTax:{
        fontSize:18,
        color:'#ffffff'
    },
    textBtnSendValues:{
        fontSize:20,
        fontWeight:'bold',
    },
    containerBill:{
        height:'100%',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#000000',
        flexDirection:'column',
    },
    paymentBoxes:{
        width:'80%',
        height:40,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:'#00ffcc',
        borderRadius:5,
        paddingLeft:15,
        paddingRight:15,
    },
    about_us:{
        height:'100%',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#dddddd',
        flexDirection:'column',
    },
    text_about:{
        fontSize:20,
        fontWeight:'bold'
    },
    main_about:{
        width:'95%',
        height:'15%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
    },
    btn_preferences:{
        width:150,
        height:50,
        backgroundColor:'#0096c7',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    text_preferences:{
        fontSize:18,
        color:'#ffffff'
    },
    settings_preferences:{
        height:'100%',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#dddddd',
        flexDirection:'column',
    },
    box_settings:{
        width:'90%',
        height:'30%',
        backgroundColor:'#5d5d5d',
        marginTop:'5%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around'
    },
    setting_boxes:{
        width:'90%',
        height:'25%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    input_preferences:{
        width:'50%',
        height:'80%',
        backgroundColor:'#ffffff'
    }
})