<template>
  <div class="signup-page">
    <div class="form-wrapper w-full">
      <h1 class="font-poppins font-semibold md:text-3xl text-xl">Forgot Password?</h1>
      <p class="text-textGray md:text-base text-sm mt-2">
        Enter your email address to get a link to reset your password.
      </p>

      <form @submit.prevent="submitForm" class="w-full mx-auto md:mt-10 mt-5">
        <div class="flex flex-col gap-5">
          <div class="">
            <label> Email </label>
            <div>
              <input v-model="email" placeholder="Email" required type="email" />
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
            <button type="submit" :disabled="isSubmiting">
              <span v-if="!isSubmiting"> Get reset link </span>
              <div class="loader" v-else></div>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import isEmail from 'validator/lib/isEmail';
import { isEmpty } from '@/utils/helpers';
import axios from '@/service/axios';

const email = ref('');
const isSubmiting = ref(false);
const toast = useToast({
  position: 'top',
});

const submitForm = async () => {
  try {
    if (isEmpty(email.value)) {
      return toast.error('Email is required');
    }

    if (!isEmail(email.value)) {
      return toast.error('Invalid email address');
    }
    isSubmiting.value = true;
    const { data } = await axios.post('/auth/forgot-password', {
      email: email.value,
    });

    if (data?.status !== 'success') {
      return toast.error(data?.message ?? 'An error occurred. Please try again later.');
    }
    email.value = '';
    toast.success(data.message ?? 'Password reset link sent, please check your email');
  } catch (error) {
    toast.error(error?.response?.data?.message ?? 'An error occurred. Please try again later.');
  } finally {
    isSubmiting.value = false;
  }
};
</script>
