import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    safeArea: {
        flex:1,
        backgroundColor: '#131016',
    },
    container: {
      flex:1,
      gap:10,
      padding:10
    },
    eventName: {
      color:'#fff', 
      fontSize: 24,
      fontWeight: 'bold'
    },
    eventDate: {
      color:'#fff', 
      fontSize: 16
    },
    form:{
        width: "100%",
        flexDirection:"row",
        gap:12,
        marginTop:36,
        marginBottom:36,
        alignItems: "center"
    },
    input: {
        height: 56,
        flex:1,
        paddingLeft:16,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        color:"#fff",
        fontSize: 16,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
    listEmptyText:{
        color:'#fff', 
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'center'
    }
  })