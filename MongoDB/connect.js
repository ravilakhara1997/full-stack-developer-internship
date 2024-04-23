const { MongoClient } = require('mongodb');

const url='mongodb://localhost:27017/'

// MongoClient.connect(url)
// .then(resp=>console.log('Connected'))
// .catch(err=>console.log('Error',err))

async function main(){
    try{
        const client=await MongoClient.connect(url)
        console.log("Connected");
        const db = client.db('Skillsacademy');
        const collection = db.collection('student');
        const insertResult = await collection.insertOne({
            name:
            "Pankaj",
            email:
            "pankaj@gmail.com",
            country:
            "IND",
            age:
            30});
console.log('Inserted documents =>', insertResult);
    }

    catch(error){
        console.log("Error",error);
    }
}
main()