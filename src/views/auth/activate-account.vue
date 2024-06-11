<template>
  <div class="signup-page">
    <div class="form-wrapper w-full">
      <h1 class="font-poppins font-semibold md:text-3xl text-xl">Activate your account</h1>
      <p class="text-textGray md:text-base text-sm mt-2">
        Enter the code sent to your email to activate your account.
      </p>
      <form @submit.prevent="submitForm" class="w-full mx-auto md:mt-10 mt-5">
        <div class="flex flex-col gap-5">
          <div class="">
            <label> OTP </label>
            <div class="flex flex-row">
              <v-otp-input
                ref="otpInput"
                input-classes="otp-input"
                inputType="number"
                :num-inputs="6"
                v-model:value="otp"
                :should-auto-focus="true"
                :should-focus-order="true"
              />
              <!-- @on-change="handleOnChange"
              @on-complete="handleOnComplete" -->
              <!-- <input v-model="formData.email" placeholder="Email" required type="email" /> -->
            </div>
          </div>

          <div class="text-right">
            <button
              @click="resendActivationCode"
              :disabled="isResendingOtp || isSubmiting || resetCountDown > 0"
              class="text-primary bg-transparent p-0 text-right font-inter md:text-base text-sm"
            >
              Resend OTP <span v-if="resetCountDown > 0">({{ resetCountDown }})</span>
            </button>
          </div>
          <div>
            <button type="submit" :disabled="otp.length < 6 || isSubmiting || isResendingOtp">
              <span v-if="!isSubmiting"> Verify </span>
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
import axios from '@/service/axios';
import { useToast } from 'vue-toast-notification';

const toast = useToast({
  position: 'top',
});

const otp = ref('');
const otpInput = ref(null);
const isSubmiting = ref(false);
const isResendingOtp = ref(false);
const resetCountDown = ref(0);

const submitForm = async () => {
  try {
    if (otp.value.length < 6) {
      return toast.error('Please enter a valid OTP');
    }

    // make sure otp is only numbers
    if (!/^\d+$/.test(otp.value)) {
      return toast.error('Invalid OTP');
    }

    isSubmiting.value = true;
    // Send OTP to the server

    const { data } = await axios.post('/auth/activate-account', { otp: otp.value });

    if (data?.status !== 'success') {
      return toast.error(data?.message ?? 'An error occurred. Please try again later.');
    }

    toast.success(data?.message ?? 'Account activates successfully');
    window.location = '/dashboard';
  } catch (error) {
    toast.error(error?.response?.data?.message ?? 'An error occurred. Please try again later.');
  } finally {
    isSubmiting.value = false;
  }
};

const resendActivationCode = async () => {
  try {
    isResendingOtp.value = true;
    resetCountDown.value = 60;

    const interval = setInterval(() => {
      resetCountDown.value -= 1;
      if (resetCountDown.value === 0) {
        clearInterval(interval);
      }
    }, 1000);

    const { data } = await axios.get('/auth/resend-activation-otp');

    if (data?.status !== 'success') {
      return toast.error(data?.message ?? 'An error occurred. Please try again later.');
    }

    toast.success(data?.message ?? 'Activation code sent successfully');
  } catch (error) {
    toast.error(error?.response?.data?.message ?? 'An error occurred. Please try again later.');
  } finally {
    isResendingOtp.value = false;
  }
};
</script>

<style lang="scss">
.otp-input-container {
  gap: 6px;
  .otp-input {
    text-align: center;
  }
}
</style>
