var items = ['a','b','c','d']

(async function () {
   var promiseFunction = async (elemento) =>{
       return new Promise( (resolve, reject) =>{
           return resolve(`${elemento} - promise`)
       })
   }

   // var itemMapped = promiseFunction('x')
   // console.log(await itemMapped)

    var itemMappedPromises = items.map(promiseFunction)

    var itemsMapped = await Promise.all(itemMappedPromises)

    console.log(itemsMapped)





})()