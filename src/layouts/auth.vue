<template>
  <main class="flex flex-row items-center">
    <section class="md:w-1/2 w-full p-5 flex flex-row items-center justify-center h-[100dvh]">
      <div class="max-w-[600px] w-full">
        <RouterView />
      </div>
    </section>
    <section class="fixed md:block hidden right-0 top-0 bottom-0 w-1/2 bg-primary"></section>
  </main>
</template>
