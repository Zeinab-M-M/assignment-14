const getPromise = () => {
    return new Promise((resolve) => {
     setTimeout(() => {
        resolve ("Done");
     }, 3000);   
    })
}

const getPromiseResult = async () => {
    console.log("first line");
    try {
    const result = await getPromise();
    console.log(result);
    } catch (error) {
    console.log(error);
    } 
    console.log("last line");    
};

getPromiseResult();
//Because of using await when calling getPromise function, the "last line" cannot be displayed until the execution of that function has fully completed.