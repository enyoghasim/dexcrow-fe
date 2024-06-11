<template>
  <div class="signup-page">
    <div class="form-wrapper w-full">
      <h1 class="font-poppins font-semibold md:text-3xl text-xl">Verify your account</h1>
      <p class="text-textGray md:text-base text-sm mt-2">
        Enter the code sent to your email to verify your account.
      </p>

      <form @submit.prevent="submitForm" class="w-full mx-auto md:mt-10 mt-5">
        <div class="flex flex-col gap-5">
          <div class="">
            <label> OTP </label>
            <div>
              <input v-model="formData.email" placeholder="Email" required type="email" />
            </div>
          </div>

          <div class="text-right">
            <router-link
              :to="{
                name: 'signin',
              }"
              class="text-primary text-right font-inter md:text-base text-sm"
              >Resend OTP</router-link
            >
          </div>
          <div>
            <button>Verify account</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const formData = reactive({
  email: '',
});

const submitForm = () => {};
</script>
