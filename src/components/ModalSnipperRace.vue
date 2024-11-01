<script>
export default {
  name: 'ModalSnipperRace',
  props: {
    isModalOpen: {
      type: Boolean,
      required: false,
    }
  },
  watch: {
    isModalOpen(newVal) {
      if (newVal) {
        this.racePlayVideo();
      } else {
        this.pauseVideo();
      }
    }
  },
  methods: {
    racePlayVideo() {
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

        // add class show to video div
        video.parentElement.parentElement.classList.remove('hide');
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
    stopVideo() {
      const video = this.$refs.video;
      if (video) {
        const  pause = video.pause();
        video.currentTime = 0;
        if (pause !== undefined) {
          pause.then(() => {
            // Automatic playback started!
            // Show playing UI.
          })
          .catch((error) => {
            // Auto-play was prevented
            // Show paused UI.
            console.log('Auto-play was prevented', error);
          });
        }

        video.parentElement.parentElement.classList.add('hide');
      }
    },
    setSrc(url) {
      const video = this.$refs.video;
      
      if (video) {
        video.src = url;
        const play = video.play();

        if (play !== undefined) {
          play.then(() => {
            // Automatic playback started!
            // Show playing UI.
            // add class show to video div
            video.parentElement.parentElement.classList.remove('hide');
          })
          .catch((error) => {
            // Auto-play was prevented
            // Show paused UI.
            console.log('Auto-play was prevented', error);
            // if the video contain source was found set a  new source
            if (error.name === 'NotSupportedError') {
              video.src = '/race.mp4';
              video.play();
            }
          });
        }
      }
    }
  }
}
</script>

<template>
  <div>
    <!-- Modal with transition -->
    <transition name="modal-fade">
      <div v-if="isModalOpen" class="modal race">
        <!-- Modal content -->
        <div class="modal-content">
          <!-- add video from public folder-->
          <video ref="video" class="full-screen-video" muted autoplay>
            <source src="/race.mp4" type="video/mp4">
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

.modal.race {
  position: fixed;
  opacity: 1;
  transition: opacity 0.8s;
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

.modal.hide {
  opacity: 0;
}

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
