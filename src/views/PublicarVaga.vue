<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h4>Apresente sua vaga para milhares de profissionais e de graça</h4>
      </div>
    </div>

    <div class="row">
      <div class="row mt-3">
        <label class="form-label">Titulo da vaga</label>
        <input type="text" class="form-control" v-model="titulo" />
        <div class="form-text">Por exemplo: Programador JavaScript e VueJs</div>
      </div>

      <div class="row mt-3">
        <label class="form-label">Descrição</label>
        <input type="text" class="form-control" v-model="descricao" />
        <div class="form-text">Informe os detalhes da vaga</div>
      </div>

      <div class="col">
        <label class="form-label">Salário</label>
        <input type="number" class="form-control" v-model="salario" />
        <div class="form-text">Informe o salário</div>
      </div>

      <div class="col">
        <label class="form-label">Modalidade</label>
        <select class="form-select" v-model="modalidade">
          <option value="">Selecione a modalidade de trabalho</option>
          <option value="1">Home Office</option>
          <option value="2">Presencial</option>
        </select>
        <div class="form-text">Informe onde as atividades serão realizadas</div>
      </div>

      <div class="col">
        <label class="form-label">Tipo</label>
        <select class="form-select" v-model="tipo">
          <option value="">Selecione o tipo de contratação</option>
          <option value="1">CLT</option>
          <option value="2">PJ</option>
        </select>
        <div class="form-text">Informe o tipo de contratação</div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <button type="submit" class="btn btn-primary" @click="salvarVaga()">
            Cadastrar vaga
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "PublicarVaga",
  data: () => ({
    titulo: "",
    descricao: "",
    salario: "",
    modalidade: "",
    tipo: "",
  }),
  methods: {
    salvarVaga() {
      let vagas = JSON.parse(localStorage.getItem("vagas"));

      if (!vagas) vagas = [];

      vagas.push({
        titulo: this.titulo,
        descricao: this.descricao,
        salario: this.salario,
        modalidade: this.modalidade,
        tipo: this.tipo, 
        publicacao:  new Date().toISOString()
      });


      if (this.validaFormulario()) {
        localStorage.setItem("vagas", JSON.stringify(vagas))
          this.emitter.emit(
            "alerta",
            {
            tipo:"sucesso",
            titulo: "A vaga " + this.titulo + " foi cadastrada com sucesso!",
            descricao: "Parabéns a vaga foi cadastrada e podera ser consultada por milhares de profssionais em nossa plataforma"
          });
          this.resetaFormulario();
      } else {
        this.emitter.emit(
            "alerta",
          { tipo:"erro",
            titulo: "Ops! não foi possível realizar o cadastro!",
            descricao: "Parece que você esqueceu de preencher alguma informação!"
          });
      }
    },

    resetaFormulario() {
      this.titulo = "";
      this.descricao = "";
      this.salario = "";
      this.modalidade = "";
      this.tipo = "";
    },

    validaFormulario() {
      let valido = true;

      if (this.titulo === "") valido = false;
      if (this.descricao === "") valido = false;
      if (this.salario === "") valido = false;
      if (this.modalidade === "") valido = false;
      if (this.tipo === "") valido = false;

      return valido;
    }
  },
};
</script>
"