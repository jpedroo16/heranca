abstract class Veiculo{
    marca: string;
    modelo: string;

    constructor(_marca: string, _modelo: string){
        this.marca = _marca;
        this.modelo = _modelo;
    }

    Apresentar(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

class Carro extends Veiculo{
    portas: number;

    constructor(_portas: number, marca: string, modelo: string){
        super(marca, modelo);
        this.portas = _portas;
    }
}

class Moto extends Veiculo{
    cilindradas: number;

    constructor(_cilindradas: number, marca: string, modelo: string){
        super(marca, modelo);
        this.cilindradas = _cilindradas;
    }
}

let moto = new Moto(1000, 'Honda', 'Biz');
moto.Apresentar();

let carro = new Carro(4,'HRV', 'Honda');
carro.Apresentar();