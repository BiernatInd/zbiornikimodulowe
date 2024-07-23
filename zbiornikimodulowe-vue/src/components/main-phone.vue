<template>
  <div class="phone-wrapper">
    <div class="phone">
      <div class="phone-content">
        <a href="tel: +48 884 796 548">
          <div class="phone-item">
            <img src="@icons/phone-2.svg" alt="" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    phonePosition() {
      const phone = document.querySelector(".phone");
      const phoneWrapper = document.querySelector(".phone-wrapper");

      const wrapperWidth = phoneWrapper.offsetWidth;
      phone.style.width = wrapperWidth * 0.9 + "px";
    },
  },
  mounted() {
    this.phonePosition();
    window.addEventListener("resize", this.phonePosition);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.phonePosition);
  },
};
</script>
<style lang="scss" scoped>
.phone-wrapper {
  position: relative;
  .phone {
    width: 70px !important;
    height: 70px !important;
    position: fixed;
    top: 85%;
    right: 5%;
    z-index: 998;
    .phone-content {
      a {
        .phone-item {
          background-color: var(--green);
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .phone-wrapper {
    .phone {
      right: 5%;
    }
  }
}
</style>
