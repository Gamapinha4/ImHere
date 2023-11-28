import {View , Text, TouchableOpacity } from 'react-native';

type props = {
  name: String
  onRemove: (name: any) => void
}

export function Participant({name, onRemove}: props) {
  return(
    <View style={{width: '100%', backgroundColor: '#1F1E25', borderRadius: 5, flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
      <Text style={{color: '#FFFFFF', fontSize: 16, marginLeft: 16, flex: 1}}>{name}</Text>
      <TouchableOpacity style={{width: 56, height: 56, borderRadius: 5, backgroundColor: '#E23C44', alignItems: 'center', justifyContent: 'center'}}
      onPress={() => onRemove(name)}><Text style={{color: '#FFFFFF', fontSize: 24}}>-</Text></TouchableOpacity>
    </View>
  )
}