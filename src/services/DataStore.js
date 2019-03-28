module.exports = function DataStore(storeData){
    localStorage.setItem("localData", JSON.stringify(storeData));
    console.log('inside strore service',storeData);
}