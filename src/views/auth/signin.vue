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
                name: 'forgot-password',
              }"
              class="text-primary text-right font-inter md:text-base text-sm"
              >Forgot password?</router-link
            >
          </div>
          <div>
            <button type="submit" :disabled="isSubmiting">
              <span v-if="!isSubmiting"> Signin </span>
              <div class="loader" v-else></div>
            </button>
          </div>
          <div>
            <p class="text-center text-textGray font-inter md:text-base text-sm">
              Dont have an account?
              <router-link
                :to="{
                  name: 'signup',
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
import { isEmpty } from '@/utils/helpers';
import { reactive, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import isEmail from 'validator/lib/isEmail';
import axios from '@/service/axios';

const toast = useToast({
  position: 'top',
});

const isSubmiting = ref(false);

const formData = reactive({
  email: '',
  password: '',
});

const submitForm = async () => {
  try {
    if (isEmpty(formData.email, formData.password)) {
      return toast.info('All fields are required');
    }

    if (!isEmail(formData.email) || formData.password.length < 6) {
      return toast.error('Invalid credentials');
    }

    const { data } = await axios.post('/auth/signin', formData);

    if (data?.status !== 'success') {
      return toast.error(data?.message ?? 'An error occurred. Please try again later.');
    }

    toast.success(data?.message ?? 'Login successful');
    window.location = '/dashboard';
  } catch (error) {
    toast.error(error?.response?.data?.message ?? 'An error occurred. Please try again later.');
  } finally {
    isSubmiting.value = false;
  }
};
</script>
