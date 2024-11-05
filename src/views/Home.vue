<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <PesquisarVagas />
      </div>
    </div>

    <!-- <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div clas="col">
        <Vaga 
          :titulo="vaga.titulo"
          :descricao="vaga.descricao"
          :salario="vaga.salario"
          :modalidade="vaga.modalidade"
          :tipo="vaga.tipo"
          :publicacao="vaga.publicacao"
       /> -

         <Vaga 
          v-bind="vaga"
       />
      </div>
    </div> -->

    <lista-vagas> </lista-vagas>

    <div class="row mt-5">
      <div class="col-4">
        <Indicador
          titulo="Vagas abertas"
          indicador="100"
          bg="bg-dark"
          color="text-white"
        />
      </div>

      <div class="col-4">
        <Indicador
          titulo="Profissionais cadastrados"
          indicador="25"
          bg="bg-light"
          color="text-dark"
        />
      </div>

      <div class="col-4">
        <Indicador
          titulo="Visitantes online"
          :indicador="usuariosOnline"
          bg="bg-dark"
          color="text-white"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Indicador from "@/components/comuns/Indicador.vue";
import ListaVagas from "@/components/comuns/ListaVagas.vue";
import PesquisarVagas from "@/components/comuns/PesquisarVagas.vue";

export default {
  name: "home",
  data: () => ({
    usuariosOnline: 0,
  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101);
    },
  },
  components: {
    PesquisarVagas,
    Indicador,
    ListaVagas,
  },
  created() {
    setInterval(this.getUsuariosOnline, 1000);
  },
};
</script>

<style module></style>
