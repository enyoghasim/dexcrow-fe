<template>
  <div class="signup-page">
    <div class="form-wrapper w-full">
      <h1 class="font-poppins font-semibold md:text-3xl text-xl">Reset password</h1>
      <p class="text-textGray md:text-base text-sm mt-2">Input your new password.</p>

      <form @submit.prevent="submitForm" class="w-full mx-auto md:mt-10 mt-5">
        <div class="flex flex-col gap-5">
          <div class="">
            <label> Password </label>
            <div>
              <input v-model="formData.password" placeholder="Password" required type="password" />
            </div>
          </div>
          <div class="">
            <label> Repeat Password </label>
            <div>
              <input
                v-model="formData.password2"
                placeholder="Repeat Password"
                required
                type="password"
              />
            </div>
          </div>

          <div class="text-right">
            <router-link
              :to="{
                name: 'signin',
              }"
              class="text-primary text-right font-inter md:text-base text-sm"
              >Back to login</router-link
            >
          </div>
          <div>
            <button>Update password</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const formData = reactive({
  password: '',
  password2: '',
});

const submitForm = () => {};
</script>
