const DB =[]

function saveDB(user) {
    const oldDBSize = DB.length;
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return new Promise((resolve,reject)=>{
        if(DB.length > oldDBSize) {
            resolve(user);
        } else {
            reject(new Error("Save DB error!"));
        }
    });
}

function send