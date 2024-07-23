<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <router-link to="/policy-privacy">Polityka prywantości</router-link>
      </div>
      <div class="footer-mid">
        <p>
          Copyright © 2024 <a href="https://karolbiernat.pl" target="_blank"
            >Karol Biernat.</a
          > Wszelkie prawa zastrzeżone.
        </p>
      </div>
      <div class="footer-right">
        <img src="@icons/fb-2.svg" alt="" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    redirectToPolicyPrivacy() {
      this.$router.push("/policy-privacy");
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding-bottom: 10px;
  .footer-content {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--white);
    padding-top: 1rem;
    padding-bottom: 1rem;
    box-shadow: var(--shadow);
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footer-left {
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: var(--black);
        transition: 0.5s;
        font-size: 16px;
        font-weight: 400;
        transition: 0.5s;
        &:hover {
          color: var(--green);
        }
      }
    }
    .footer-mid {
      p {
        font-size: 16px;
        font-weight: 400;
        a {
          text-decoration: none;
          color: var(--black);
          transition: 0.5s;
          &:hover {
            color: var(--green);
          }
        }
      }
    }
    .footer-right {
      margin-right: 2rem;

      img {
        cursor: pointer;
        transition: 0.5s;
        &:hover {
          transform: rotate(360deg);
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .footer {
    .footer-content {
      width: 90%;
      flex-direction: column;
      .footer-left {
        margin-bottom: 1rem;
        margin-left: 0;
      }
      .footer-mid {
        margin-bottom: 1rem;
        p {
          text-align: center;
        }
      }
      .footer-right {
        margin-right: 0;
      }
    }
  }
}
</style>
