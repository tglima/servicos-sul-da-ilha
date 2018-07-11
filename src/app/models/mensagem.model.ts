export class Mensagem {
    public id: number;
    public data: any;
    public msgLida: boolean;

    constructor(
        public nome: string,
        public email: string,
        public telefone: string,
        public msgTexto: string
    ) { }
}
