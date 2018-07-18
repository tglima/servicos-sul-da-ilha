import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensagemService } from '../../services/mensagens.service';
import { Mensagem } from '../../models/mensagem.model';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  providers: [ MensagemService ]
})

export class ContatoComponent implements OnInit {

  statusForm = 'initial';
  form: FormGroup;

  constructor( private formBuilder: FormBuilder, private msgService: MensagemService ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(4),
        Validators.maxLength(40), Validators.pattern('[A-zÀ-ž ]+')]],
      email: [null, [Validators.required, Validators.minLength(8),
        Validators.maxLength(50), Validators.email ]],
      mensagem: [null, [Validators.required, Validators.minLength(5),
        Validators.maxLength(440) ]],
      telefone: [null, [Validators.minLength(14), Validators.maxLength(15)]]
    });
  }

  private formatText(text): string {
    if (text !== null ) {
      text = text.replace(/\s{2,}/g, ' ').trim();
      text = text.replace(/\n{2,}/g, '\n');
    }
    return text;
  }

  public formatInput(inputText: string): void {
    if (inputText === 'nome' || inputText === 'mensagem') {
      if (this.form.get(inputText).valid) {
        this.form.patchValue(
          {[inputText]: this.formatText(this.form.get(inputText).value)}
        );
      }
    }
  }

  onSubmit(): void {
    this.statusForm = 'loading';

    this.msgService.postMessage(
      new Mensagem(
        this.form.value.nome,
        this.form.value.email,
        this.form.value.telefone,
        this.form.value.mensagem
      ))
      .subscribe( (res) => {
        this.statusForm = 'success';
      }, err => {
        this.statusForm = 'error';
        console.error('Erro ao tentar enviar a mensagem: \n', err.message);
      });

  }

}
