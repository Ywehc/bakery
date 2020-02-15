<template class="sky">
    <div class="sun">
    </div>
</template>

<style scoped>
.sky {
    
}
.sun, .moon {
    width: 80px;
    height: 80px;
    margin-top: 10em;
    border-radius: 50%;
    margin-left: 630px;
}
.sun {
    background: #ffff00;
}
@media screen and (max-width: 1200px) {
  .sun, .moon {
      margin-left: 540px;
  }
}
@media screen and (max-width: 996px) {
  .sun, .moon {
      margin-left: 400px;
  }
}
@media screen and (max-width: 768px) {
  .sun, .moon {
      margin-left: 320px;
  }
}
@media screen and (max-width: 556px) {
  .sun, .moon {
      margin-left: 250px;
  }
}
</style>

