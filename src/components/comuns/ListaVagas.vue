<template>
  <slot>
    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div clas="col">
        <Vaga v-bind="vaga" />
      </div>
    </div>
  </slot>
</template>

<script>
import Vaga from "@/components/comuns/Vaga.vue";

export default {
  name: "ListaVagas",
  data: () => ({
    vagas: [
      {
        titulo: "Analista Programador PHP Pleno",
        descricao:
          "Profissional com conhecimentos em PHP, Laravel e MySQL. Necessário 3 anos de experiências. Atuará na manutenção de sistemas legados da empresa.",
        // salario: 6000,
        modalidade: "Home Office",
        tipo: "PJ",
        publicacao: "2021-10-10",
      },
      {
        titulo: "Programador JavaScript Angular",
        salario: 5000,
        modalidade: "Presencial",
        tipo: "CLT",
        publicacao: "2021-10-07",
      },
      {
        titulo: "Programador JavaScript Vue",
        descricao:
          "Profissional com conhecimentos avançados em JavaScript e Vue.",
        salario: 5000,
        tipo: "CLT",
        publicacao: "2021-10-06",
      },
      {
        titulo: "Analista de Banco de Dados Sênior",
        descricao:
          "Domínio dos bancos de dados SQL Server, Oracle, Postgre e MySQL",
        salario: 9000,
        modalidade: "Presencial",
        tipo: "PJ",
        publicacao: "2021-10-06",
      },
      {
        titulo: "Programador Web Júnior",
        descricao:
          "Conhecimentos básicos em HTML, CSS, JavaScript, Bootstrap, PHP e MySQL",
        salario: 3000,
        modalidade: "Presencial",
        tipo: "CLT",
        publicacao: "2021-10-05",
      },
    ],
  }),
  components: {
    Vaga,
  },
  activated() {
    this.vagas = JSON.parse(localStorage.getItem("vagas"));
  },
  mounted() {
    this.emitter.on("filtrarVagas", (vaga) => {
      const vagas = JSON.parse(localStorage.getItem("vagas"));
      this.vagas = vagas.filter((reg) =>
        reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())
      );
    });
  },
};
</script>

<style module></style>
