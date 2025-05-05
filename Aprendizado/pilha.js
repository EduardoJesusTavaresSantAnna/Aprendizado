// Classe Pilha
class Pilha {
    constructor() {
      this.itens = [];
    }
  
    empilhar(item) {
      this.itens.push(item);
      console.log(`✔️ Documento: '${item}' adicionado.`);
    }
  
    desempilhar() {
      if (this.estaVazia()) {
        console.log('⚠️ A pilha está vazia. Nada a desempilhar.');
        return null;
      }
      const removido = this.itens.pop();
      console.log(`❌ Documento: '${removido}' removido.`);
      return removido;
    }
  
    topo() {
      if (this.estaVazia()) {
        return null;
      }
      return this.itens[this.itens.length - 1];
    }
  
    estaVazia() {
      return this.itens.length === 0;
    }
  
    tamanho() {
      return this.itens.length;
    }
  
    limpar() {
      this.itens = [];
      console.log('🧹 Pilha esvaziada.');
    }
  
    imprimir() {
      console.log('📦 Pilha atual:', this.itens.slice().reverse().join(' <- '));
    }
  }

  const pilha = new Pilha;
    console.log('==Pilha de Documentos==')
    pilha.empilhar('Relatório de Vendas');
    pilha.empilhar('Proposta de Projeto');
    pilha.empilhar('Orçamento de Marketing');
    pilha.desempilhar();
    console.log('O Documento do topo: ', pilha.topo());
    pilha.imprimir();


