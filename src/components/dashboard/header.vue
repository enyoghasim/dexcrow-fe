<template>
  <header
    :class="`z-30 border-b h-20 sticky top-0 transition-all duration-100 bg-white ${isSidebarOpened ? 'sm:ml-52' : 'ml-0'}`"
  >
    <nav class="p-5 flex flex-row items-center justify-between h-full relative">
      <div class="flex flex-row items-center gap-1">
        <button
          @click="generalStore.toggleSidebar"
          :class="`outline-none p-2 bg-transparent w-fit hover:bg-gray-100 ${isSidebarOpened ? 'sm:hidden' : 'block'}`"
        >
          <SidebarIcon />
        </button>
        <a href="/" class="sm:block hidden">Dex</a>
      </div>
      <a href="/" class="absolute left-1/2 transform -translate-x-1/2 sm:hidden">Dex</a>
      <ul class="flex flex-row">
        <li>
          <button class="py-1 flex flex-row items-center gap-2">
            <i class="fa-solid fa-plus"></i>
            <span>New deal</span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import useGeneralStore from '@/stores/general';
import SidebarIcon from '@/components/icons/sidebar-icon.vue';

import { storeToRefs } from 'pinia';

const generalStore = useGeneralStore();

const { isSidebarOpened } = storeToRefs(generalStore);
</script>
