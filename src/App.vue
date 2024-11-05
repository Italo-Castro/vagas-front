<template>

  <div>

    <vagas-favoritas />
    <Topo @navegar="component = $event" />

    <alerta v-if="exibirAlerta" :tipo="alerta.tipo"> 
   
      <template v-slot:titulo>
        <h5>{{alerta.titulo}}</h5>
      </template>

      <div>
        <p><strong> {{ alerta.descricao }}</strong></p>
      </div>

    </alerta>

    <Conteudo v-if="visibilidade" :conteudo="component"/>

  </div>

</template> 

<script>

// import Topo from "./components/layouts/Topo.vue";
// import Conteudo from "./components/layouts/Conteudo.vue";


// o @ indica par ao webpack o diretorio src
import Topo from "@/components/layouts/Topo.vue";
import Conteudo from "@/components/layouts/Conteudo.vue";
import VagasFavoritas from './components/comuns/VagasFavoritas.vue';
import Alerta from "./components/comuns/Alerta.vue";

export default {
  name: "App", 
  components: {
    Topo,
    Conteudo,
    VagasFavoritas,
    Alerta
  },

  data: () => ({
    visibilidade: true,
    component: "Home",
    exibirAlerta: false,
    alerta: { tipo:"",  titulo: "", descricao: "" }
  }),

  mounted() {
    this.emitter.on("eventoGlobal1", (p) => { alert("chegou" + p) });
    this.emitter.on("alerta", (alertaObj) => { 
      this.exibirAlerta = true;
      this.alerta = alertaObj
      setTimeout(() => this.exibirAlerta =false , 4000)
    });
  } 
}

</script> 

<style module>
 
</style>
