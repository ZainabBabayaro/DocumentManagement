<template lang="">
    <main
      class="fixed top-0 left-0 grid h-screen w-screen place-items-center overflow-y-scroll overscroll-y-contain bg-primary-black bg-opacity-30 px-32 py-16 z-50">
      <div class="bg-white px-28 pt-16 pb-32">
        <slot name="modal-content" />
      </div>
    </main>
  </template>
  