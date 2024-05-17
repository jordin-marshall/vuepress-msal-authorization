<template>
  <div>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-2 text-center">
          <p><i class="fa fa-exclamation-triangle fa-5x"></i><br />Status Code: 403</p>
        </div>
        <div class="col-md-10">
          <h3>Unauthorized</h3>
          <p>You must be logged in to view this documentation website</p>
          <button type="button" class="btn btn-primary" @click="navigateToUrl">Login</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

const navigateToUrl = () => {
  window.location.href = '/';
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Do+Hyeon|Frijole|Josefin+Sans:300,400,400i,600,700|Viga");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css");

.button {
  background-color: #04AA6D;
  /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>