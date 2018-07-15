export class Mensagem {
    public id: number;

    constructor(
        public nome: string,
        public email: string,
        public telefone: string,
        public msgTexto: string,
        public foiLida: false,
        public data = new Date()
    ) { }
}
