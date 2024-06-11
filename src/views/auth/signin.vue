<template>
  <div class="signup-page">
    <div class="form-wrapper w-full">
      <h1 class="font-poppins font-semibold md:text-3xl text-xl">Log in to your account</h1>
      <p class="text-textGray md:text-base text-sm mt-2">
        Login to yout account to keep track of your deals, and balances.<br />
      </p>

      <form @submit.prevent="submitForm" class="w-full mx-auto md:mt-10 mt-5">
        <div class="flex flex-col gap-5">
          <div class="">
            <label> Email </label>
            <div>
              <input v-model="formData.email" placeholder="Email" required type="email" />
            </div>
          </div>
          <div class="">
            <label> Password </label>
            <div>
              <input v-model="formData.password" placeholder="Password" required type="password" />
            </div>
          </div>
          <div class="text-right">
            <router-link
              :to="{
                name: 'forgot-password'
              }"
              class="text-primary text-right font-inter md:text-base text-sm"
              >Forgot password?</router-link
            >
          </div>
          <div>
            <button>Signin!</button>
          </div>
          <div>
            <p class="text-center text-textGray font-inter md:text-base text-sm">
              Dont have an account?
              <router-link
                :to="{
                  name: 'signup'
                }"
                class="text-primary"
                >Signup</router-link
              >
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const formData = reactive({
  email: '',
  password: ''
})

const submitForm = () => {}
</script>
