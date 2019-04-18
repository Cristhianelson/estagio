import { Injectable } from '@angular/core';

export interface Questionario {
  topico?: string
  publico_alvo?: any[]
  por_disciplina?: boolean
  tipo_resposta?: string
  questoes?: any[]
  possiveis_respostas?: any[]
  labels_respostas?: string[]
}

export interface Avaliacao {
  periodo?: number
  questionarios?: Questionario[]
  ativo?: boolean
  data_ativacao?: Date
  data_limite?: Date
  publico_alvo?: any[]
  titulo?: string
  observacao?: string
  participantes?: any[]
} 

let data: Avaliacao[] = []

export {data}

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  constructor() { }
}
