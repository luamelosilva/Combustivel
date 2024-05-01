import React, { Component } from "react";
import 
{
Modal,
View,
Text,
Image,
TextInput,
Button,
StyleSheet,
TouchableOpacity,
Alert,
} from 'react-native';

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            alcool: '',
            gasolina: '',
            resultado: '',
            showmodal: false
        };
        this.fecharModal = this.fecharModal.bind(this)
        this.alcoolMudar = this.alcoolMudar.bind(this)
        this.gasolinaMudar = this.gasolinaMudar.bind(this)
        this.calcular = this.calcular.bind(this)
    }

fecharModal(){
    this.setState({showmodal: false});
}

alcoolMudar(texto){
    this.setState({alcool:texto});
}

gasolinaMudar(texto){
    this.setState({gasolina:texto});
}

calcular(){
   let { alcool, gasolina } = this.state;
   if(alcool && gasolina){
        let result = parseFloat(alcool) / parseFloat(gasolina) >= 0.7 ? 'gasolina' : 'alcool';
        this.setState({resultado: result, showmodal: true});
   }else{
    Alert('Por favor, insira os preços do alcool e da goslina');
   };
}


    render(){

        return(

            <View style={styles.container}>


                <Modal
                    visible = {this.state.showmodal}
                    transparent = {true}
                    animationType = 'slide'
                    onRequestClose={this.fecharModal}
                >

                    <View style={styles.modalView}>

                        <View style={styles.modalContent}>

                            <View style={styles.areaImgModal}>

                                <Image
                                    source={require('./src/img/gas.png')}
                                    style={styles.img}
                                />

                            </View>

                            <Text style={styles.modalTitle}>Compensa Usar {this.state.resultado}</Text>

                            <Text style={styles.texto}>Com os Preços:</Text>
                            <Text style={styles.texto}>Álcool: R$ {this.state.alcool}</Text>
                            <Text style={styles.texto}> Gasolina: R$ {this.state.gasolina}</Text>

                            <View style={styles.btnArea}>

                                <TouchableOpacity onPress={this.fecharModal} style={styles.button}>
                                    <Text style={styles.btnTextoModal}>Calcular Novamente</Text>
                                </TouchableOpacity>

                            </View>
                            
                        </View>

                    </View>

                </Modal>

                <View style={styles.areaImg}>    
                    <Image
                        source={require('./src/img/logo.png')}
                        style = {styles.img}
                    />
                </View>

                    <View style={styles.areaTitle}>
                        <Text style={styles.title}>Qual melhor Opção?</Text>
                    </View>
                    
                <Text style={styles.texto}>Álcool (Preço Por Litro):</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={this.alcoolMudar}
                    placeholder="Insira o Valor"
                    keyboardType="numeric"
                    placeholderTextColor='green'
                />
                

                <Text style={styles.texto}>Gasolina (preço por litro):</Text>
               <TextInput
                    style={styles.input}
                    onChangeText={this.gasolinaMudar}
                    placeholder="Insira o Valor"
                    keyboardType="numeric"
                    placeholderTextColor='green'
               />


                <View style={styles.btnArea}>

                    <TouchableOpacity style={styles.button} onPress={this.calcular}>
                        <Text style={styles.btnTexto}>Calcular</Text>
                    </TouchableOpacity> 

                </View>
               
            </View>

        );

    }


}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#0909'
    },
    texto:{
        alignItems:'center',
        paddingTop: 20,
        fontWeight:'bold',
        fontSize:25,
        color: 'white',
        marginLeft: 15
    },
    img:{
        width: 170,
        height: 170,
    },
    areaImg:{
        alignItems: 'center',
        marginTop:50,
    },
    title:{
        fontSize:30,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems:'center',
        color: 'white',
    },
    input:{
        fontSize: 20,
        marginTop: 5,
        color:'green',
        fontWeight: 'bold',
        backgroundColor:'white',
        borderRadius: 5,
        width: 370,
        marginLeft: 15,
    },
    areaTitle:{
        justifyContent: 'center', 
        alignItems:'center',
        paddingTop: 15
    },
    button:{          
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 40,
        margin: 17,
        borderRadius: 9,
    },
    btnArea:{
        flexDirection: 'row',
        marginTop: 30,
        height: 40,
    },
    btnTexto:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green'
    },
    modalView:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContent:{
        backgroundColor: 'gray',
        padding: 35,
        alignItems: 'center',
        elevation: 5,
        flex:1
    },

    modalTitle:{
        fontSize:30,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems:'center',
        color: 'white',
        marginTop: 15
    },
    areaImgModal:{
        alignItems: 'center',
        marginTop:20,
    },
    btnTextoModal:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray',
    },
});