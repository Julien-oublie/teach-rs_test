import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Component,SafeAreaView , Button} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MyHeader  from './component/header';



export default class App extends React.Component {

 
  constructor(props){
      super(props);
      this.state = {
        activeIndex:0,
        carouselItems: [
        {
        image :"",
        prenom:"julien du parc de vilgenis",
        formation: " université la sorbonne",
        description : "Calme et patient,je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux"
      },
      {
        image :"",
        prenom:"Pierre de l'université CY cergy ",
        formation: " université CY cergy ",
        description : "Calme et patient,je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux"
      },
      {
        image :"",
        prenom:"Jack de l'université paris nord sorbonne",
        formation: " université paris nord sorbonne",
        description : "Calme et patient,je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux"
      },
      {
        image :"",
        prenom:"Sabrina de l'université Evry",
        formation: " université Evry",
        description : "Calme et patient,je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux"
     },
     {
        image :"",
        prenom:"Emma du lycée Parc vilgenis ",
        formation: " lycée Parc vilgenis",
        description : "Calme et patient,je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux"
      },
      {
        image :"",
        prenom:"Aurélien de l'université de Tours ",
        formation: " université de Tours",
        description : "Calme et patient,je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux"
      },
      {
        image :"",
        prenom:"Patrick de l' Université d'Orléan",
        formation: " Université d'Orléan",
        description : "Calme et patient,je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux"
      },
      {
        image :"",
        prenom:"Emeric de la Faculté d'orsay ",
        formation: " Faculté d'orsay",
        description : "Calme et patient,je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux"
      },
      {
        image :"",
        prenom:"Robert de l'Université Gustave effel",
        formation: " Université Gustave effel",
        description : "Calme et patient,je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux"
     },
     {
        image :"",
        prenom:"Jimmy de l'Iut de chartres",
        formation: " Iut chartres",
        description : "Calme et patient,je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux"
      },
      ]
    }
  }

  _renderItem({item,index}){
      return (
        <View style={{
            backgroundColor:'white',
            shadowColor : "#000000" ,
            shadowOpacity : 0.8,
            borderRadius: 5,
            height: 480,
            padding: 50,
            marginLeft : 15,
            marginRight: 10,
            marginTop: 25,
            alignItems: 'left',
            justifyContent:'space-around' }}>
          <Text style={{fontSize: 15}}>{item.prenom}
          {"\n"}
          {"\n"}
          </Text>
          <Text> Formation: 
          </Text>
          <Text 
          style={{alignItems : 'left'}}>{item.formation}
           {"\n"}
          {"\n"}
          </Text>
          <Text>Description:</Text>
          <Text>{item.description}
          {"\n"}
          {"\n"}
          </Text>
    
          <Button
          title="Prendre un cours avec ce Teach'r"
          color="#2892F2"/>
          
      
        <Button
          title="Retirer ce Teach'r de mes favoris"
          color="#FFA500"
          
          
        />
          
        </View>

      )
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, paddingTop: 50, }}>
        <MyHeader/>
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center'  }}>
            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={this.state.carouselItems}
              sliderWidth={300}
              itemWidth={300}
              renderItem={this._renderItem}
              onSnapToItem = { index => this.setState({activeIndex:index}) } />
        </View>
      </SafeAreaView>
    );
}
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2892F2',
    height: 200,



  },
  paragraph: {
    color: 'white',
    fontSize: 25,
    paddingTop: 100,
    paddingLeft: 25

  }
});

