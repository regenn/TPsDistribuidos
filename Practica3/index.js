/*async function secuencial(){
    
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await respuesta.json();

    const listaUsuarios = data.slice(0,3);//me quedo con los primeros 3
    
    for(let n = 0; n<3; n++){
        const dataAux = await obtienePublicaciones(listaUsuarios[n].id);
        //let act = listaUsuarios[n];
        //let respuestaAux = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${act.id}`);
        //let dataAux = await respuestaAux.json();
        console.log(`${listaUsuarios[n].name} tiene ${dataAux.length} publicaciones.`);
    }
}
async function obtienePublicaciones(id){
    let respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    let data = await respuesta.json();
    return data;
}
async function concurrente(){
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await respuesta.json();

     const listaUsuarios = data.slice(0,3);//me quedo con los primeros 3
 
        const promesa1 = obtienePublicaciones(listaUsuarios[0].id);
        const promesa2 = obtienePublicaciones(listaUsuarios[1].id);
        const promesa3 = obtienePublicaciones(listaUsuarios[2].id);
        const promesas = [promesa1,promesa2,promesa3];
        
        const publicaciones = await Promise.all(promesas);
        publicaciones.forEach((act,i)=>{
            console.log(`${listaUsuarios[i].name} tiene ${act.length} publicaciones`);
        })


}

const args = process.argv;
const modo = args[2];
switch (modo){
    case '-s':
        secuencial();
        break;
    case '-c':
        concurrente();
        break;
    default:
        console.log(`##########\nIngrese las siguientes flags:\n -> '-s' para ejecucion secuencial\n -> '-c' para ejecucion concurrente.\n`);
}*/