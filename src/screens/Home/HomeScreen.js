import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { FlatList,TouchableOpacity, Text, View, TouchableHighlight, Image, Button } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";
import { auth } from "../../../firebase";

export default function HomeScreen(props) {


  const { navigation } = props;

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }



  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <View style={{flexDirection:"row",marginTop:10}}>
      <TouchableOpacity>
        <Image source={require("../../../assets/icons/tourist.png")} style={{width:200,height:50,marginLeft:0,borderRadius:10}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')} >
        <Image source={require("../../../assets/icons/profile.jpg")} style={{width:60,height:60,marginLeft:130}} />
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Bell')} >
        <Image source={require("../../../assets/icons/bell.jpg")} style={{width:50,height:50,marginRight:30,}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Queries')}  >
        <Image source={require("../../../assets/icons/queries.png")} style={{width:50,height:50,marginRight:30}} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignOut}
            style={{backgroundColor: '#ce6e00',width:100,height:30,borderRadius: 480,alignItems:'center',marginTop:10,marginLeft:140}}>
            <Text style={{ color: 'white',fontWeight: '700',fontSize: 16}}>Sign out</Text>
          </TouchableOpacity>

          </View>

      <Image source={require('../../../assets/India.jpg')} style={{width:410,height:200,borderRadius:50,marginRight:40}}></Image>
      <Text style={{fontSize:20,fontWeight:'900',marginLeft:20,color:'#3cb371'}}>Recommendations:</Text>
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={recipes} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} />
    </View>
  );
}
