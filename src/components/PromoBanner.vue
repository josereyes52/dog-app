<script>
export default {
  name: 'PromoBanner',
  props: {
    showBanner: {
      type: Boolean,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    buttonText: {
      type: String,
      required: false,
    }
  }
}
</script>

<template>
  <div v-if="title" class="banner-content hide w-full mt-6 mb-6 ">
    <transition name="banner-fade">
      <div v-if="showBanner" class="banner">
        <div class="flex gap-4 max-sm:flex-col items-center justify-center text-center bg-[#33514b] text-white px-6 py-3.5 rounded font-[sans-serif]">
            <p class="text-base">{{ title }}</p>

            <div class="flex gap-2" v-if="buttonText" >
                <button type="button" class="bg-white text-blue-500 py-2.5 px-5 rounded text-sm hover:underline">
                {{buttonText}}
                </button>
            </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
    .banner-content {
      transition: all 1.5s;
      height: 100%;
      z-index: 9;
      width: 100%;
    }

    .banner-content.hide {
        opacity: 0;
        height: 0;
        visibility: hidden;
        transform: translate(-100%);
    }
</style>