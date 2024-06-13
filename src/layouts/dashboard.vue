<template>
  <Header />
  <div>
    <SideBar />
    <div :class="`transition-all duration-100 ${isSidebarOpened ? 'sm:ml-52' : 'ml-0'}`">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Header from '../components/dashboard/header.vue';
import SideBar from '../components/dashboard/sidebar.vue';
import useGeneralStore from '@/stores/general';

import { storeToRefs } from 'pinia';

const generalStore = useGeneralStore();

const { isSidebarOpened } = storeToRefs(generalStore);
</script>
