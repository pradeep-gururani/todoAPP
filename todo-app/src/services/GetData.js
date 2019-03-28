module.exports = function GetData(getData){
    console.log('getting data');
    return(localStorage.getItem(getData));
        
}   