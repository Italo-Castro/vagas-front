<template>
<div>
<nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vagas</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!-- <a class="nav-link active" aria-current="page" href="#" @click="navegarPara()">Home</a> -->
          <a class="nav-link active" aria-current="page" href="#" @click="navegarPara('home')">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#" @click="navegarPara('PublicarVaga')">Publicar vaga</a>
        </li>
      </ul>
    </div>

  </div>
</nav>

</div>
</template>

<script>

export default {
  name: "Topo",
   methods: {
     navegarPara(p) {
     this.$emit("navegar", p);
     }
  }
    
}

</script>
