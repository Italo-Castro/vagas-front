<template>
    <div>
        <!-- Renderizar de modo dinâmico os componntes home e publicar vaga -->
        <keep-alive>
         <component :is="conteudo"/>
        </keep-alive>
        
        <!-- <Home />
        <PublicarVaga /> -->
    </div>

</template>

 
<script>
import Home from "../../views/Home.vue";
import PublicarVaga from "../../views/PublicarVaga.vue";


// o @ indica par ao webpack o diretorio src
// import Home from "@/components/views/Home.vue";
// import PublicarVaga from "@/components/views/PublicarVaga.vue";

export default {
    name: "Conteudo",
      props: {
          conteudo: {
            type: String,
            required: true
        }
    },
    components: {
        Home,
        PublicarVaga
    },
    data: ()=> ({
        texto: "Texto ciclo de vida",
        titulo: "Titulo",
    }),
    methods: {
        atualizarComponente() {
            this.titulo += "#";
        }
    }, 

    beforeCreate() { 
        // Antes do componente ser criado
        console.log("yyy texto antes de criar:", this.texto)
    },
    created() {
        // Quando o componente é criado
        console.log("yyy Criado:", this.texto)
    },
    beforeMount() {
        //Antes de jogar o template no DOM final
        // Por exemplo eu consumiria o back-end
        console.log("yyy Antes de montar o template")
    },
    mounted() {
        // Quando o componente já foi pro DOM
        console.log("yyy montado")
    },
    beforeUpdate() {
        // 
        console.log("yyy antes de montar")
    },
    updated() {
        // Quando o componente é atualizado ... 
        // Por exemplo quando a função atualiza o titulo
        console.log("yyy Atualizado")
    },
    beforeUnmount() {
        // Um v-if que muda pra false, no componente pai, desmonta o componente
        console.log("yyy Antes de demosntar/destruir")
    },
    unmounted() {
        console.log("yyy Desmontado/Destruido")
    },
    errorCaptured() {
        console.log('Erro capturado')
    },
    renderTracked() {
        console.log("yyy Re-rederização")
    },
    renderTriggered() {
        console.log("yyy Re=renderização acionada")

    },

    activated() {
        console.log("yyy componente é ativado")
    },
    deactivated() {
        console.log("yyy componente desativado")
    }
} 
</script>

<style module>
h1 {
    color: blue,
}

.teste-1 {
    background-color: red;
}

#teste-2 {
    background-color: yellow;
}
</style>
