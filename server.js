const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
'21 savage':{
    'age':29,
    'birthName':'sheyaa bin Abraham-joseph' ,
    'birthLocation': 'london, England'
},
'chance the rapper':{
    'age': 29,
    'birthName': 'Chancler Bennet',
    'birthLocation': 'Chicago, Illinois'
},
'unkown':{
    'age': 'unkown',
'birthName': 'unkown',
'birthLocation': 'unkown'

}
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const rapperName = request.params.name.toLowerCase()

    if( rappers[rapperName] ){
      response.json(rappers[rapperName])
  }else{
    response.json(rappers['unkown'])
  }
   
   
})

app.listen(PORT , ()=>{
    console.log(`The server is now running on port ${PORT} betta go catch I
    t!`) 
})