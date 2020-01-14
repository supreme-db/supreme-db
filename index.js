const fs = require("fs")

let new = function(tableName) {
  
    // Set Name
    if (typeof tableName !== 'string') throw new TypeError('Table name has to be a string.');
    else if (tableName.includes(' ')) throw new TypeError('Table name cannot include spaces.');
    
    fs.readFileSync(`${tableName}.json`, function (err) {
     if(err){
    fs.writeFile(`${tableName}.json`, function (err) {
      if (err) throw err;
      console.log('Table is created successfully.');
    }); 
    }else{
      console.log(`Table: ${tableName} loaded`)
    }
})
  }
  
  let add = function(tableName, data){
    if (typeof tableName !== 'string') throw new TypeError('Table name has to be a string.');
    else if (tableName.includes(' ')) throw new TypeError('Table name cannot include spaces.');
    
    fs.readFileSync(`${tableName}.json`, function (err) {
      if(err)throw err;
      if(!err){
        fs.writeFileSync(`${tableName}.json`, JSON.stringify(data), 'utf8', function(err){
          if(err)throw err;
          if(!err)console.log("committed")
        })
      }
    })
  }
                    
  
  

