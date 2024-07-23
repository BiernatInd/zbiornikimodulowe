<template>
  <div class="top-bar">
    <div class="top-bar-content">
      <div class="top-bar-left">
        <div class="top-bar-left-item">
          <img src="@icons/fb.svg" alt="" />
          <p>Zbiorniki Modułowe</p>
        </div>
      </div>
      <div class="top-bar-right">
        <div class="top-bar-right-item">
          <img src="@icons/envelope.svg" alt="" />
          <p>biuro@zbiornikimodulowe.pl</p>
        </div>
        <div class="top-bar-right-item">
          <img src="@icons/phone.svg" alt="" />
          <a href="tel: +48 884 796 548">+48 884 796 548</a>
        </div>
      </div>
    </div>
  </div>
  <div class="header-wrapper">
    <header class="header">
      <nav class="nav">
        <div class="nav-logo" @click="redirectToMainPage">
          <img src="@assets/logo.svg" alt="" />
        </div>
        <div class="nav-menu">
          <div class="nav-menu-link">
            <router-link to="/" @click="scrollToHome"
              >Strona główna</router-link
            >
          </div>
          <div class="nav-menu-link">
            <router-link to="/#offer" @click="scrollToOffer"
              >Oferta</router-link
            >
          </div>
          <div class="nav-menu-link">
            <router-link to="/price" @click="redirectToPrice"
              >Cennik</router-link
            >
          </div>
          <div class="nav-menu-link">
            <router-link to="/#about" @click="scrollToAbout"
              >O naszej firmie</router-link
            >
          </div>
          <div class="nav-menu-link">
            <router-link to="/#map" @click="scrollToMap"
              >Gdzie jesteśmy?</router-link
            >
          </div>
          <div class="nav-menu-link">
            <router-link to="/#contact" @click="scrollToContact"
              >Kontakt</router-link
            >
          </div>
        </div>
        <div class="nav-hamburger">
          <img src="@icons/open-menu.svg" alt="" @click="openMenu" />
        </div>
      </nav>
    </header>
  </div>
  <div :class="['mobile-menu', { active: isActive }]">
    <div class="mobile-menu-content">
      <div class="mobile-menu-top">
        <div class="mobile-menu-top-logo">
          <img src="@assets/logo.svg" alt="" @click="redirectToMainPage" />
        </div>
        <div class="mobile-menu-top-icon">
          <img src="@icons/close-menu.svg" alt="" @click="closeMenu" />
        </div>
      </div>
      <div class="mobile-menu-bottom">
        <div class="mobile-menu-link" @click="scrollToHome">
          <p>Strona główna</p>
        </div>
        <div class="mobile-menu-link" @click="scrollToOffer">
          <p>Oferta</p>
        </div>
        <div class="mobile-menu-link" @click="redirectToPrice">
          <p>Cennik</p>
        </div>
        <div class="mobile-menu-link" @click="scrollToAbout">
          <p>O naszej firmie</p>
        </div>
        <div class="mobile-menu-link" @click="scrollToMap">
          <p>Gdzie jesteśmy?</p>
        </div>
        <div class="mobile-menu-link" @click="scrollToContact">
          <p>Kontakt</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueScrollTo from "vue-scrollto";
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    openMenu() {
      this.isActive = true;
    },
    closeMenu() {
      this.isActive = false;
    },
    headerPosition() {
      const header = document.querySelector(".header");
      const headerWrapper = document.querySelector(".header-wrapper");

      const wrapperWidth = headerWrapper.offsetWidth;
      header.style.width = wrapperWidth * 0.95 + "px";
      header.style.left = "50%";
      header.style.transform = "translateX(-50%)";
    },
    handleScroll() {
      const header = document.querySelector(".header");
      if (window.scrollY > 0) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
      }
    },
    scrollToHome() {
      this.closeMenu();
      if (document.querySelector("#home")) {
        VueScrollTo.scrollTo("#home", 500, { easing: "ease-in-out" });
      }
      this.$router.push("/");
    },
    scrollToOffer() {
      this.closeMenu();
      if (document.querySelector("#offer")) {
        VueScrollTo.scrollTo("#offer", 500, { easing: "ease-in-out" });
      }
      this.$router.push("/#offer");
    },
    scrollToAbout() {
      this.closeMenu();
      if (document.querySelector("#about")) {
        VueScrollTo.scrollTo("#about", 500, { easing: "ease-in-out" });
      }
      this.$router.push("/#about");
    },
    scrollToMap() {
      this.closeMenu();
      if (document.querySelector("#map")) {
        VueScrollTo.scrollTo("#map", 500, { easing: "ease-in-out" });
      }
      this.$router.push("/#about");
    },
    scrollToContact() {
      this.closeMenu();
      if (document.querySelector("#contact")) {
        VueScrollTo.scrollTo("#contact", 500, { easing: "ease-in-out" });
      }
      this.$router.push("/#contact");
    },
    redirectToMainPage() {
      this.$router.push("/");
    },
    redirectToPrice() {
      this.$router.push("/price");
    },
  },
  mounted() {
    this.headerPosition();
    window.addEventListener("resize", this.headerPosition);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.headerPosition);
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  padding-top: 2rem;
  .top-bar-content {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    box-shadow: var(--shadow);
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .top-bar-left {
      margin-left: 2rem;
      .top-bar-left-item {
        display: flex;
        align-items: center;
        img {
          margin-right: 1.2rem;
          transition: 0.5s;
          cursor: pointer;
          &:hover {
            transform: rotate(360deg);
          }
        }
      }
    }
    .top-bar-right {
      display: flex;
      .top-bar-right-item {
        display: flex;
        align-items: center;
        margin-right: 2rem;
        img {
          margin-right: 1.2rem;
          transition: 0.5s;
          cursor: pointer;
          &:hover {
            transform: rotate(360deg);
          }
        }
        a {
          color: var(--black);
          text-decoration: none;
          transition: 0.5s;
          &:hover {
            color: var(--green);
          }
        }
      }
    }
  }
}

.header-wrapper {
  padding-top: 2rem;
  position: relative;
  width: 100%;
  .header {
    position: fixed;
    width: 95%;
    max-width: 1920px;
    background-color: var(--white);
    box-shadow: var(--shadow);
    border-radius: 25px;
    top: 130px;
    transition: 0.5s;
    &.scroll {
      top: 10px;
    }
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1.2rem;
      padding-top: 1.2rem;
      .nav-logo {
        margin-left: 2rem;
        img {
          cursor: pointer;
        }
      }
      .nav-menu {
        display: flex;
        .nav-menu-link {
          margin-right: 2rem;
          a {
            text-decoration: none;
            font-size: 18px;
            transition: 0.5s;
            cursor: pointer;
            color: var(--black);
            &:hover {
              color: var(--green);
            }
          }
        }
      }
      .nav-hamburger {
        display: none;
      }
    }
  }
}

.mobile-menu {
  position: fixed;
  width: 100%;
  background-color: var(--white);
  top: 0;
  height: 100%;
  right: -100%;
  overflow-y: auto;
  transition: 0.5s;
  z-index: 999;
  &.active {
    right: 0;
  }
  .mobile-menu-content {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    .mobile-menu-top {
      padding-top: 2rem;
      display: flex;
      justify-content: space-between;
      padding-bottom: 2rem;
      .mobile-menu-top-icon {
        img {
          cursor: pointer;
        }
      }
    }
    .mobile-menu-bottom {
      .mobile-menu-link:not(:last-child) {
        margin-bottom: 1rem;
      }
      .mobile-menu-link {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--green);
        transition: 0.5s;
        &:hover {
          transform: translateY(-10px);
        }
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .top-bar {
    display: none;
  }
  .header-wrapper {
    .header {
      top: 10px;
      .nav {
        padding-top: 1rem;
        padding-bottom: 1rem;
        .nav-menu {
          display: none;
        }
        .nav-hamburger {
          display: block;
          margin-right: 2rem;
          img {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
