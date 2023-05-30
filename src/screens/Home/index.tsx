import { Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

interface ParticipantType {
    id:string
    name:string
}

const example = [
    {}
]

export function Home() {

    const [participant, setParticipant]  = useState<ParticipantType>({id:"", name:""})
    const [participantList, setParticipantList ] = useState<ParticipantType[]>([])

    function generateId(){
        const date = Date.now()
        return String(date)
    }


    function participantIsOnList() {

    }

    function handleParticipantAdd() {
       if (participant.name){
        setParticipantList(prevState => [...prevState, {...participant, id:generateId()}])
        setParticipant({id:"", name:""})
       } else {
        return Alert.alert('Name provided is empty')
       }

    }
    function handleParticipantRemove(id:string) {
        Alert.alert('Are you sure?', `This action cannot be undone!`, [
            {
                text:'Remove',
                onPress:() => {
                    setParticipantList(prevState => prevState.filter(item => item.id !== id))
                    Alert.alert('Participant Removed!')
                }
            },
            {
                text:'Cancel',
                style: 'cancel'
            }
        ])
        
     }
  return (
    <SafeAreaView style={styles.safeArea} >
        <View  style={styles.container}>
            <Text style={styles.eventName}>Event Name</Text>
            <Text style={styles.eventDate}>{new Date().toDateString()}</Text>
            <View style={styles.form}>
            <TextInput
                
                value={participant.name}
                onChangeText={text => setParticipant({...participant, name:text})}
                style={styles.input}
                placeholder="add participant"
                placeholderTextColor={"#6b6b6b"}
            />
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text  style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            </View>
            <FlatList 
                data={participantList}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Participant key={item.id} name={item.name} onRemove={() => handleParticipantRemove(item.id)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText} >No Participants on Event!</Text>
                )}  
            />
            
        </View>
    </SafeAreaView>
  );
}
