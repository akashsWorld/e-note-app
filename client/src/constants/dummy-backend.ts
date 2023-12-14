const  data = [
    {
        id:'174932jncf',
        firstName:'Akash',
        lastName:'Biswas',
        DateOfBirth:new Date('27/11/1999'),
        notes:[
            {
                noteId:'he987780940iekp3jr',
                noteTitle:'Something',
                noteImage:'Image url',
                note:'something import you have to done',
                createdAt: new Date(Date.now())
            },
            {
                noteId:'le987760340imkz3qr',
                noteTitle:'Something',
                noteImage:'Image url',
                note:'something import you have to done',
                createdAt: new Date(Date.now())
            }
        ]
    },
    {
        id:'184935jncf',
        firstName:'Sagnik',
        lastName:'Sarkar',
        DateOfBirth:new Date('10/11/2000'),
        notes:[
            {
                noteId:'te984700940iykp4jr',
                noteTitle:'Buy Some Food from the market',
                noteImage:'Image url',
                note:'Onion 1kg, Carrot:2kg',
                createdAt: new Date('12/11/2023')
            }
        ]
    }
]

const getData = ()=>{

    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(data);
        },3000)
    })


}

export default getData;