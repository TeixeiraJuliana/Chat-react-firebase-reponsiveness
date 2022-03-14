
import db from '../firebase/index'

const MessaginService = {
    async getMessages(){
        return db
        .collection('messages')
        .get()
        .then( messages =>{
            let _messages = []
            messages.forEach(message => {
                _messages.push(message.data())
                console.log(message.data())
            })
            return messages
        })
    }
}  
export default MessaginService