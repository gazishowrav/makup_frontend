<template>
  <!--page-banner-->
  <div class="page-banner py-3">
    <div class="container-wrapper">
      <span class="shape"></span>
      <span class="shape2"></span>
      <span class="shape3"></span>
      <div class="row align-items-center">
        <div class="col-lg-4">
          <h3 class="mb-0">{{ breadcrumb }}</h3>
        </div>
        <div class="col-lg-8">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent justify-content-end mb-0">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{ breadcrumb }}</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <!--/page-banner-->
</template>

<script>
  export default {
    name: 'page-banner'
    props: {
      breadcrumb: String
    }
  }
</script>