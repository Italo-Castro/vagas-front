<template>
  <div class="card">

    <div class="card-header bg-dark text-white">
      <div class="row">
        <div class="col d-flex justify-content-between">
          <div>  {{ titulo }} </div>
         <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" v-model="favoritada">
          <label class="form-check-label">Favoritar {{ favoritada }}</label>
          </div>
        </div>
      </div>
    
    </div>

    <div class="card-body">
      <p> {{ descricao }} </p>
    </div>

    <div class="card-footer">
      <samll class="text-muted">Salario: {{ salario }} | Modalidade: {{ getModalidade }} | Tipo: {{ getTipo }} | Publicação:
        {{
          getPublicacao }}</samll> 
    </div>

  </div>
</template>

<script>
export default {
  name: "Vaga",
  data: () => ({
    favoritada: false,
  }),
  watch: {  
    favoritada(valorNovo) {
      if (valorNovo) {
        this.emitter.emit("favoritarVaga", this.titulo);
      } else {
        this.emitter.emit("desfavoritarVaga", this.titulo);
      }
    }
  },
  props: {
    titulo: {
      type: String,
      required: true,
      validor: (p) => {
        if (p.length < 6)  return false
        return true
      }
    },
    descricao: {
      type: String,
      requerid: true,
      default:"O contratante nãoa adicionou descrição para esta vaga",

    },
    salario: {
      type: [String, Number],
      requerid: true,
      default() {
        return "*".repeat(20)
      }
    },
    modalidade: {
      type: String,
      requerid: true,
      
    },
    tipo: {
      type: String,
      requerid: true
    },
    publicacao: {
      type: String,
      requerid: true
    },
  
  }, 
  computed: {
      getModalidade() {
        switch (this.modalidade) {
            case "1": return "Home Office"
            case "2": return "Presencial"
            default: return "Não definido"
          }
      }, getTipo() {
         switch (this.tipo) {
             case "1": return "PJ"
             case "2": return "CLT"
             default: return "Não definido" 
          }
    },
    getPublicacao() {
      return new Date(this.publicacao).toLocaleDateString("pt-BR");
    }
    },
  created() {
    console.log("yyy vaga", typeof this.titulo)
  },
  methods: {
  }
};
</script>

<style module></style>
