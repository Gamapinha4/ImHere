import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export default function Home() {

  const [participants, setParticipant] = useState<string[]>([])
  const [participantsName, setParticipantsName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantsName)) {
      return Alert.alert("Participante existe", "Já existe um participante com esse nome na lista.")
    }

    setParticipant(prevState => [...prevState, participantsName])
    setParticipantsName('');
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante, ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
            setParticipant(participants.filter(e => e !== name))
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={{flex: 1, backgroundColor: '#131016', padding: 24}}>
      <Text style={{color: '#FFFFFF', fontSize: 24, fontWeight: 'bold', marginTop: 48}}>Nome do evento</Text>
      <Text style={{color: '#6B6B6B', fontSize: 16}}>Segunda, 27 de Novembro de 2023</Text>

      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 36, marginBottom: 42}}>
      <TextInput style={{backgroundColor: '#1F1E25', borderRadius: 5, height: 56, color: '#FFFFFF', padding: 16, fontSize: 16, flex: 1, marginRight: 12}} 
                 placeholder="Nome do participante" placeholderTextColor={"#6B6B6B"} onChangeText={setParticipantsName} value={participantsName}/>
      
      <TouchableOpacity style={{width: 56, height: 56, borderRadius: 5, backgroundColor: '#31CF67', alignItems: 'center', justifyContent: 'center'}}
      onPress={() => handleParticipantAdd()}><Text style={{color: '#FFFFFF', fontSize: 24}}>+</Text></TouchableOpacity>
      </View>

      <FlatList data={participants} keyExtractor={participants => participants} renderItem={({item}) => (
        <Participant key={item} name={item} onRemove={(item) => handleParticipantRemove(item)}/>
      )} ListEmptyComponent={() => (
        <Text style={{color: '#FFFFFF', fontSize: 16, textAlign: 'center'}}>
          Ninguem chegou no evento ainda? Adicione participantes a sua lista de presença.
        </Text>
    )} showsVerticalScrollIndicator={false}/>
    </View>
  );
}
