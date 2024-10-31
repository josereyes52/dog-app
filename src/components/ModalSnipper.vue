<script>
export default {
  name: 'ModalSnipper',
  props: {
    isModalOpen: {
      type: Boolean,
      required: false,
    }
  },
  watch: {
    isModalOpen(newVal) {
      if (newVal) {
        this.playVideo();
      } else {
        this.pauseVideo();
      }
    }
  },
  methods: {
    playVideo() {
      const video = this.$refs.video;
      if (video) {
        video.currentTime = 0;
        const play = video.play();

        if (play !== undefined) {
          play.then(() => {
            // Automatic playback started!
            // Show playing UI.
          })
          .catch((error) => {
            // Auto-play was prevented
            // Show paused UI.
            console.log('Auto-play was prevented', error);
          });
        }
      }
    },
    resetVideo() {
      const video = this.$refs.video;
      if (video) {
        video.currentTime = 0;
      }
    },
    pauseVideo() {
      const video = this.$refs.video;
      if (video) {
        video.pause();
      }
    },
  }
}
</script>

<template>
  <div>
    <!-- Modal with transition -->
    <transition name="modal-fade">
      <div v-if="isModalOpen" class="modal backrace">
        <!-- Modal content -->
        <div class="modal-content">
          <!-- add video from public folder-->
          <video ref="video" class="full-screen-video" muted loop>
            <source src="/dog.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>

        </div>
      </div>
    </transition>
  </div>
</template>

<style>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal {
  position: fixed;
  /* opacity: 0.9; */
  transition: opacity 0.1s;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

/* .modal.show {
  opacity: 1;
  transition: opacity 0.1s;
} */

.modal-content {
  background-color: #003528;
  padding: 5px;
  border-radius: 5px;
  height: 100%;
  width: 100%;
}

.full-screen-video {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
