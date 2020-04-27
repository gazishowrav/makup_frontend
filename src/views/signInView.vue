<template>
  <main class="main">
    <!--page-banner-->
    <div class="page-banner py-3">
      <div class="container-wrapper">
        <span class="shape"></span>
        <span class="shape2"></span>
        <span class="shape3"></span>
        <div class="row align-items-center">
          <div class="col-lg-4">
            <h3 class="mb-0">Sign In</h3>
          </div>
          <div class="col-lg-8">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent justify-content-end mb-0">
                <li class="breadcrumb-item">
                  <router-link to="/">Home</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Sign In
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!--/page-banner-->
    <div class="page-content">
      <div class="container-wrapper">
        <div class="row justify-content-center py-5">
          <div class="col-lg-5">
            <!--sign in-->
            <div class="card card-body shadow-sm sign-in">
              <h1 class="title text-center"><i class="mdi mdi-account-circle-outline mdi-48px d-block"></i>Sign In</h1>
              <div class="alert alert-danger" v-if="errored">{{errMsg}}</div>
              <form action="#">
                <div class="form-group">
                  <label for=""
                    >Phone or email address <span class="required-star"></span
                  ></label>
                  <input
                    type="text"
                    class="form-control shadow-none"
                    placeholder="Enter Email or Phone"
                    v-model="userName"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for=""
                    >Password <span class="required-star"></span
                  ></label>
                  <input
                    type="password"
                    class="form-control shadow-none"
                    placeholder="Password"
                    v-model="password"
                    required
                  />
                </div>
                <div class="form-group">
                  <div class="row no-gutters">
                    <!-- <div class="col-lg-6">
												<input type="checkbox" name="checkbox" id="remember">
												<label for="remember">Remember me</label>
											</div> -->
                    <div class="col-lg-6"></div>
                    <div class="col-lg-6 text-right">
                      <a href="#">Forget Password</a>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <a class="btn btn-warning" @click="signInFunction">Sign In</a>
                </div>
                <div class="form-group mt-5 text-center">
                  <p>
                    You don't have account?<a href="registration.html"
                      >Registration</a
                    >
                  </p>
                </div>
              </form>
            </div>
            <!--/sign in-->
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- /main-->
</template>
<script>
export default {
  data() {
    return {
      userName: null,
      password: null,
      errMsg: null,
      errored: false,
    };
  },
  methods: {
    signInFunction() {
      this.errored = false;
     
      if (this.userName != null && this.password != null) {
        let formData = new FormData();
        formData.append("userName", this.userName);
        formData.append("password", this.password);
        this.$http
          .post("signin", formData)
          .then((response) => {
            if (response.data.loginStatus == true) {
              this.$store.commit("storeUserInfo", response.data.userInfo);
              this.$toaster.success(response.data.loginMessage);
              this.userName=null;
              this.password=null;
              this.$router.push({ name: 'Home' });
              
            } else {
              this.password=null;
              this.errored = true;
              this.$toaster.warning(response.data.loginMessage);
              this.errMsg = response.data.loginMessage;
            }
          })
          .catch((error) => {
            this.errored = true;
          })
          .finally(() => "");
      } else {
        if (this.password == null) this.errMsg = "Enter Password.";
        if (this.userName == null)
          this.errMsg = "Enter Email or Phone First.";

        this.errored = true;
        this.$toaster.warning(this.errMsg);
      }
    },
  },
};
</script>
