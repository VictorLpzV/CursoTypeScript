interface Usuario{
    nombreUsuario:String;
    password:String;
    confirmarPassword?:String;
}

interface Abordar{
    abordarTransporte():void;
}
let avion:Abordar={
    abordarTransporte:function(){
        console.log("abordando");
    }
}

avion.abordarTransporte();

let usuario1:Usuario={nombreUsuario:"Victor",password:"1234",confirmarPassword:"1234"};

console.log(usuario1);