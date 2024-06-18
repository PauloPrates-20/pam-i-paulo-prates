import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from "react-native";
import { AntDesign, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import React, { useState, useEffect } from 'react';
import { readAll } from "@/lib/firestoreQuerys";

const urlEsfiha = 'https://cdn.discordapp.com/attachments/1140455507241476157/1252419160248549426/ESFIHA-DE-CARNE-110G-PCT-10UN.png?ex=667225bc&is=6670d43c&hm=162dd92f0f3b7f6cc1dfbb5e349f6ed5268e9b7f477dae8e610d8d9737828966&';
const urlCoca = 'https://cdn.discordapp.com/attachments/1140455507241476157/1252419362963460157/REFRIGERANTE-COCA-COLA-LATA-350ml.png?ex=667225ec&is=6670d46c&hm=380a0af6ec7b3fa7dd90a6f612e30ee9f8723dbafbc63bc422a9116727c467d2&';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    // Aqui você faria a chamada para o servidor para pegar os itens do cardápio
    const fetchMenu = async () => {
      const items = await readAll();

      setMenuItems(items);
    }

    fetchMenu();
  }, []);

  return (
    <ScrollView style={styles.body}>
      <ScrollView>
        <div>
          <h1 style={styles.h1}>Cardápio do Dia</h1>
          <ul style={styles.mainContent}>
            {menuItems.map(item => (
              <li style={styles.foodItem} key={item.id}>
                <Image 
                  source = {{
                    uri: item.image,
                    method: 'POST',
                    headers: {
                      pragma: 'no-cache'
                    }
                  }}
                  style={{width: 48, height: 48}}
                />
                <div style={styles.foodInfo}>
                  <Text style={styles.foodName}>
                    {item.name}
                    <Text> - </Text>
                  </Text>
                  <Text style={styles.foodPrice}>
                    R${item.price.toFixed(2)}
                  </Text>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ScrollView>
      <footer style={styles.footer}>
        <AntDesign name="home" size={48} color="black" />
        <MaterialCommunityIcons name="cart-outline" size={48} color="black" />
        <Octicons name="trash" size={48} color="black" />
      </footer>
    </ScrollView>
  );
}

export default Menu;

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Arial',
    backgroundColor: '#f4f4f4',
    margin: 0,
    padding: 0
  },
  h1: {
    textAlign: 'center'
  },
  header: {
    backgroundColor: '#fff',
    padding: 10
  },
  mainContent: {
    backgroundColor: '#fff',
    minHeight: height
  },
  foodItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  foodInfo: {
    marginLeft: 10,
  },
  foodName: {
    fontWeight: 'bold',
  },
  foodPrice: {
    color: 'green',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});
