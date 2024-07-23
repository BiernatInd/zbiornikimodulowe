<template>
  <MainHeader />
  <div class="home" id="home">
    <div class="home-content">
      <div class="home-left">
        <h1>
          Zbiorniki modułowe Ppoż naszej firmy, są
          <span>trwałe, szczelne i proste w montażu.</span>
        </h1>
        <h2>
          Posiadają <span>aprobatę techniczną</span> instytutu techniki
          budowlanej “ITB”.
        </h2>
        <p>
          Wybierając zbiorniki modułowe PPoż z aprobatą techniczną instytutu
          techniki budowlanej “ITB” unikniesz problemów z odbiorem budynku.
          Oszczędzisz swój czas i pieniądze. Nasze szamba posiadają pełną
          dokumentację techniczną.
        </p>
        <div class="home-buttons">
          <a href="tel: +48 884 796 548">
            <button class="home-btn">Zadzwoń do nas</button>
          </a>
          <button class="home-btn" @click="scrollToContact">
            Napisz do nas
          </button>
        </div>
      </div>
      <div class="home-right">
        <img src="@assets/img-1.png" alt="" />
      </div>
    </div>
  </div>
  <div class="technic">
    <div class="technic-content">
      <div class="technic-top">
        <h2>Co zawiera <span>dokumentacja</span> techniczna?</h2>
      </div>
      <div class="technic-bottom">
        <div class="technic-left">
          <ul>
            <li>Aprobata ITB,</li>
            <li>Zaświadczenie o jakości do aprobaty,</li>
            <li>
              Deklarację zgodności wystawioną do każdej partii zbiorników,
            </li>
            <li>Test PZG z gwarancją na szczelność</li>
          </ul>
        </div>
        <div class="technic-right">
          <img src="@assets/img-2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="price">
    <div class="price-content">
      <div class="price-top">
        <h2>Nasz cennik</h2>
        <p>1m3 to 1000l</p>
      </div>
      <div class="price-bottom">
        <div class="price-item-container">
          <div class="price-item">
            <h2>Zbiornik (20m3)</h2>
            <p>Realizacja od 1-3 dni roboczych</p>
            <p>Najlepsza cena</p>
            <p>Najlepsza jakość</p>
            <p>Najlepsze zbiorniki na rynku</p>
            <div class="price-button">
              <a href="tel: +48 884 796 548">
                <button class="price-btn">Zadzwoń do nas</button>
              </a>
            </div>
          </div>
          <div class="price-item">
            <h2>Zbiornik (30m3)</h2>
            <p>Realizacja od 1-3 dni roboczych</p>
            <p>Najlepsza cena</p>
            <p>Najlepsza jakość</p>
            <p>Najlepsze zbiorniki na rynku</p>
            <div class="price-button">
              <a href="tel: +48 884 796 548">
                <button class="price-btn">Zadzwoń do nas</button>
              </a>
            </div>
          </div>
          <div class="price-item">
            <h2>Zbiornik (40m3)</h2>
            <p>Realizacja od 1-3 dni roboczych</p>
            <p>Najlepsza cena</p>
            <p>Najlepsza jakość</p>
            <p>Najlepsze zbiorniki na rynku</p>
            <div class="price-button">
              <a href="tel: +48 884 796 548">
                <button class="price-btn">Zadzwoń do nas</button>
              </a>
            </div>
          </div>
        </div>
        <div class="price-item-container">
          <div class="price-item">
            <h2>Zbiornik (50m3)</h2>
            <p>Realizacja od 1-3 dni roboczych</p>
            <p>Najlepsza cena</p>
            <p>Najlepsza jakość</p>
            <p>Najlepsze zbiorniki na rynku</p>
            <div class="price-button">
              <a href="tel: +48 884 796 548">
                <button class="price-btn">Zadzwoń do nas</button>
              </a>
            </div>
          </div>
          <div class="price-item">
            <h2>Zbiornik (100m3)</h2>
            <p>Realizacja od 1-3 dni roboczych</p>
            <p>Najlepsza cena</p>
            <p>Najlepsza jakość</p>
            <p>Najlepsze zbiorniki na rynku</p>
            <div class="price-button">
              <a href="tel: +48 884 796 548">
                <button class="price-btn">Zadzwoń do nas</button>
              </a>
            </div>
          </div>
          <div class="price-item">
            <h2>Zbiornik (500m3)</h2>
            <p>Realizacja od 1-3 dni roboczych</p>
            <p>Najlepsza cena</p>
            <p>Najlepsza jakość</p>
            <p>Najlepsze zbiorniki na rynku</p>
            <div class="price-button">
              <a href="tel: +48 884 796 548">
                <button class="price-btn">Zadzwoń do nas</button>
              </a>
            </div>
          </div>
        </div>
        <div class="price-button">
          <button class="price-btn" @click="redirectToPrice">
            Zobacz cały cennik
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="offer" id="offer">
    <div class="offer-content">
      <div class="offer-top">
        <h2>Nasza oferta</h2>
      </div>
      <div class="offer-bottom">
        <div class="offer-left">
          <h2>
            Wychodząc naprzeciw <span>Państwa oczekiwaniom,</span> nasza firma
            przygotowała bardzo <span>atrakcyjną ofertę.</span>
          </h2>
          <p>
            Specjalizujemy się w produkcji zbiorników betonowych. Dzięki
            specjalizacji osiągamy bardzo dobre wyniki produkcyjne i
            jednocześnie jesteśmy Państwu w stanie zaoferować produkty o dobrej
            jakości. 
          </p>
          <p>
            Oferujemy kompleksowe rozwiązania obejmujące wyprodukowanie,
            dostarczenie oraz zamontowanie zbiornika na miejscu u Klienta.
          </p>
          <div class="offer-buttons">
            <button class="offer-btn" @click="scrollToContact">
              Napisz do nas
            </button>
          </div>
        </div>
        <div class="offer-right">
          <img src="@assets/img-3.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="about" id="about">
    <div class="about-content">
      <div class="about-top">
        <h2>O naszej firmie</h2>
      </div>
      <div class="about-bottom">
        <div class="about-left">
          <img src="@assets/img-4.png" alt="" />
        </div>
        <div class="about-right">
          <h2>
            Od 18 lat zajmujemy się
            <span>produkcją, sprzedażą oraz montażem</span> dużych modułów
            betonowych
          </h2>
          <p>
            Zaopatrujemy naszych klientów w duże moduły betonowe,
            przeprowadzając uprzednio dokładny wywiad mający na celu zarówno
            poznanie ich indywidualnych potrzeb, jak i informacji dotyczących
            miejsca planowanej inwestycji. Mając na uwadze wysoką jakość wyrobów
            oferujemy klientom nawet do 20 lat gwarancji.
          </p>
          <div class="about-buttons">
            <a href="tel: +48 884 796 548">
              <button class="about-btn">Zadzwoń do nas</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="map" id="map">
    <div class="map-content">
      <div class="map-top">
        <h2>Obsługujemy całą Polskę</h2>
      </div>
      <div class="map-bottom">
        <img src="@assets/img-5.png" alt="" />
      </div>
    </div>
  </div>
  <div class="google-map">
    <div class="google-map-content">
      <div class="google-map-top">
        <h2>Nasza siedziba</h2>
      </div>
      <div class="google-map-bottom">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7414.949335037965!2d22.523077055217914!3d52.1884894194761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4721e1ea15b946f3%3A0x119fd0cdef24b278!2sKlimonty%2046%2C%2008-140%20Klimonty!5e0!3m2!1spl!2spl!4v1721480271902!5m2!1spl!2spl"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
  <div class="contact" id="contact">
    <div class="contact-content">
      <div class="contact-top">
        <h2>Kontakt</h2>
      </div>
      <div class="contact-bottom">
        <div class="contact-left">
          <div class="contact-form">
            <div class="form-input">
              <label>Imię</label>
              <input type="text" placeholder="Imię" v-model="formData.name" />
            </div>
            <div class="form-input">
              <label>Nazwisko</label>
              <input
                type="text"
                placeholder="Nazwisko"
                v-model="formData.surname"
              />
            </div>
            <div class="form-input">
              <label>Numer telefonu</label>
              <input
                type="text"
                placeholder="Numer telefonu"
                v-model="formData.phone"
                @input="handlePhoneInput"
              />
            </div>
            <div class="form-input">
              <label>E-mail</label>
              <input
                type="text"
                placeholder="E-mail"
                v-model="formData.email"
              />
            </div>
            <div class="form-input">
              <label>Wiadomość i inne ważne informacje</label>
              <textarea
                placeholder="Wiadomość i inne ważne informacje"
                v-model="formData.message"
              ></textarea>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" v-model="formData.acceptTerms" />
              <p>
                Akceptuję
                <router-link to="/policy-privacy"
                  >politykę prywatności</router-link
                >. (Wymagane)
              </p>
            </div>
            <div class="form-validation">
              <p v-if="validationMessage" class="validation-message">
                {{ validationMessage }}
              </p>
            </div>
            <div class="form-buttons">
              <button class="form-btn" @click="sendForm">
                Wyślij wiadomość
              </button>
              <button class="form-btn" @click="clearFields">Zresetuj</button>
            </div>
          </div>
        </div>
        <div class="contact-right">
          <div class="contact-right-info">
            <h2>Informacje:</h2>
            <p><span>Nazwa firmy:</span> Zbiorniki Modułowe</p>
            <p><span>Kontakt telefoniczny:</span> +48 884 796 548</p>
            <p><span>E-mail:</span> biuro@zbiornikimodulowe.pl</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MainPhone />
  <MainFooter />
</template>

<script>
import MainHeader from "@components/main-header.vue";
import MainFooter from "@components/main-footer.vue";
import MainPhone from "@components/main-phone.vue";
import VueScrollTo from "vue-scrollto";
import axios from "axios";

export default {
  components: {
    MainHeader,
    MainFooter,
    MainPhone,
  },
  data() {
    return {
      formData: {
        name: "",
        surname: "",
        email: "",
        phone: "",
        message: "",
        acceptTerms: false,
      },
      validationMessage: "",
    };
  },
  methods: {
    sendForm() {
      this.validationMessage = "";

      if (
        !this.formData.name ||
        !this.formData.surname ||
        !this.formData.email ||
        !this.formData.phone ||
        !this.formData.message
      ) {
        this.validationMessage = "Wszystkie pola muszą zostać wypełnione.";
      }

      if (this.formData.acceptTerms) {
        axios
          .post("http://localhost:8000/send-form", this.formData)
          .then((response) => {
            alert(
              "Wiadomość została wysłana. Wkrótce się z tobą skontaktujemy!"
            );
            this.clearFields();
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        this.validationMessage =
          "Musisz zaakceptować politykę prywatności i regulamin sklepu.";
      }
    },
    clearFields() {
      this.formData.name = "";
      this.formData.surname = "";
      this.formData.email = "";
      this.formData.phone = "";
      this.formData.message = "";
      this.formData.acceptTerms = "";
      this.validationMessage = "";
    },
    handlePhoneInput(event) {
      event.target.value = event.target.value.replace(/[^0-9, +]/g, "");
    },
    checkLocation() {
      const currentPath = this.$route.fullPath;

      if (currentPath === "/#home") {
        VueScrollTo.scrollTo("#home", 500, { easing: "ease-in-out" });
      } else if (currentPath === "/#offer") {
        VueScrollTo.scrollTo("#offer", 500, { easing: "ease-in-out" });
      } else if (currentPath === "/#about") {
        VueScrollTo.scrollTo("#about", 500, { easing: "ease-in-out" });
      } else if (currentPath === "/#map") {
        VueScrollTo.scrollTo("#map", 500, { easing: "ease-in-out" });
      } else if (currentPath === "/#contact") {
        VueScrollTo.scrollTo("#contact", 500, { easing: "ease-in-out" });
      }
    },
    scrollToContact() {
      VueScrollTo.scrollTo("#contact", 500, { easing: "ease-in-out" });
    },
    redirectToPrice() {
      this.$router.push("/price");
    },
  },
  mounted() {
    this.checkLocation();
  },
};
</script>

<style lang="scss" scoped>
.home {
  z-index: 1;
  .home-content {
    padding-top: 135px;
    padding-bottom: 50px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .home-left {
      width: calc(50% - 1rem);
      h1 {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 30px;
        span {
          color: var(--green);
        }
      }
      h2 {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 30px;
        span {
          color: var(--green);
        }
      }
      p {
        font-size: 24px;
        margin-bottom: 30px;
      }
      .home-buttons {
        a {
          text-decoration: none;
          margin-right: 30px;
          z-index: 998;
          .home-btn {
            background-color: var(--green);
            border: 2px solid var(--green);
            padding-left: 4rem;
            padding-right: 4rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            font-size: 16px;
            color: var(--white);
            font-weight: 500;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.5s;
            &:hover {
              background-color: var(--white);
              color: var(--green);
            }
          }
        }
        .home-btn:last-child {
          z-index: 998;
          background-color: var(--white);
          border: 2px solid var(--green);
          padding-left: 4rem;
          padding-right: 4rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          font-size: 16px;
          color: var(--green);
          font-weight: 500;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.5s;
          &:hover {
            background-color: var(--green);
            color: var(--white);
          }
        }
      }
    }
    .home-right {
      width: calc(40% - 1rem);
      img {
        display: block;
        width: 100%;
      }
    }
  }
}

.technic {
  z-index: 1;
  padding-bottom: 50px;
  .technic-content {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    .technic-top {
      margin-bottom: 50px;
      h2 {
        font-size: 32px;
        font-weight: 600;
        text-align: center;
        span {
          color: var(--green);
        }
      }
    }
    .technic-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .technic-left {
        width: calc(40% - 1rem);
        ul {
          width: 92%;
          margin-right: auto;
          margin-left: auto;
          li:not(:last-child) {
            margin-bottom: 30px;
          }
          li {
            font-size: 24px;
            font-weight: 400;
          }
        }
      }
      .technic-right {
        width: calc(50% - 1rem);
        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
}

.price {
  z-index: 1;
  padding-bottom: 50px;
  .price-content {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    .price-top {
      margin-bottom: 50px;
      h2 {
        font-size: 32px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 10px;
        span {
          color: var(--green);
        }
      }
      p {
        font-size: 24px;
        text-align: center;
      }
    }
    .price-bottom {
      .price-item-container:not(:last-child) {
        margin-bottom: 50px;
      }
      .price-item-container {
        display: flex;
        justify-content: space-between;
        .price-item {
          padding-top: 30px;
          padding-bottom: 30px;
          padding-left: 15px;
          padding-right: 15px;
          background-color: var(--white);
          box-shadow: var(--shadow);
          border-radius: 15px;
          h2 {
            width: 90%;
            margin-left: auto;
            margin-right: auto;
            font-size: 24px;
            margin-bottom: 30px;
            text-align: center;
          }
          p {
            font-size: 20px;
            text-align: center;
            margin-bottom: 30px;
          }
          .price-button {
            width: 100%;
            a {
              text-decoration: none;
              width: 100%;
              .price-btn {
                width: 100%;
                background-color: var(--green);
                border: 2px solid var(--green);
                padding-top: 0.5rem;
                font-size: 20px;
                padding-bottom: 0.5rem;
                color: var(--white);
                font-weight: 500;
                border-radius: 10px;
                cursor: pointer;
                transition: 0.5s;
                &:hover {
                  background-color: var(--white);
                  color: var(--green);
                }
              }
            }
          }
        }
      }
      .price-button {
        display: flex;
        justify-content: center;
        .price-btn {
          width: 40%;
          background-color: var(--green);
          border: 2px solid var(--green);
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          font-size: 20px;
          color: var(--white);
          font-weight: 500;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.5s;
          &:hover {
            background-color: var(--white);
            color: var(--green);
          }
        }
      }
    }
  }
}

.offer {
  z-index: 1;
  padding-bottom: 50px;
  .offer-content {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    .offer-top {
      margin-bottom: 50px;
      h2 {
        font-size: 32px;
        font-weight: 600;
        text-align: center;
      }
    }
    .offer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .offer-left {
        width: calc(50% - 1rem);
        h2 {
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 30px;
          span {
            color: var(--green);
          }
        }
        p {
          font-size: 24px;
          margin-bottom: 30px;
        }
        .offer-buttons {
          .offer-btn {
            background-color: var(--green);
            border: 2px solid var(--green);
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 4rem;
            padding-right: 4rem;
            font-size: 20px;
            color: var(--white);
            font-weight: 500;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.5s;
            &:hover {
              background-color: var(--white);
              color: var(--green);
            }
          }
        }
      }
      .offer-right {
        width: calc(40% - 1rem);
        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
}

.about {
  z-index: 1;
  padding-bottom: 50px;
  .about-content {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    .about-top {
      margin-bottom: 50px;
      h2 {
        font-size: 32px;
        font-weight: 600;
        text-align: center;
      }
    }
    .about-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .about-left {
        width: calc(40% - 1rem);
        img {
          display: block;
          width: 100%;
        }
      }
      .about-right {
        width: calc(60% - 1rem);
        h2 {
          font-size: 32px;
          font-weight: 600;
          margin-bottom: 30px;
          span {
            color: var(--green);
          }
        }
        p {
          font-size: 24px;
          margin-bottom: 30px;
        }
        .about-buttons {
          a {
            text-decoration: none;
            .about-btn {
              background-color: var(--white);
              border: 2px solid var(--green);
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              padding-left: 4rem;
              padding-right: 4rem;
              font-size: 20px;
              color: var(--green);
              font-weight: 500;
              border-radius: 10px;
              cursor: pointer;
              transition: 0.5s;
              &:hover {
                background-color: var(--green);
                color: var(--white);
              }
            }
          }
        }
      }
    }
  }
}

.map {
  padding-bottom: 50px;
  .map-content {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    .map-top {
      margin-bottom: 50px;
      h2 {
        font-size: 32px;
        font-weight: 600;
        text-align: center;
      }
    }
    .map-bottom {
      display: flex;
      justify-content: center;
      img {
      }
    }
  }
}

.google-map {
  padding-bottom: 50px;
  .google-map-content {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    .google-map-top {
      margin-bottom: 50px;
      h2 {
        font-size: 32px;
        font-weight: 600;
        text-align: center;
      }
    }
    .google-map-bottom {
      iframe {
        width: 100%;
        height: 400px;
        border-radius: 25px;
      }
    }
  }
}

.contact {
  z-index: 1;
  padding-bottom: 50px;
  .contact-content {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    .contact-top {
      margin-bottom: 50px;
      h2 {
        font-size: 32px;
        font-weight: 600;
        text-align: center;
      }
    }
    .contact-bottom {
      display: flex;
      justify-content: space-between;
      .contact-left {
        width: calc(50% - 1rem);
        .contact-form {
          padding: 30px;
          background-color: var(--white);
          box-shadow: var(--shadow);
          border-radius: 15px;
          .form-input {
            display: flex;
            flex-direction: column;
            label {
              font-size: 24px;
              font-weight: 400;
              margin-bottom: 20px;
            }
            input {
              border: 2px solid var(--green);
              height: 60px;
              border-radius: 25px;
              font-size: 20px;
              margin-bottom: 20px;
              padding-left: 20px;
            }
            textarea {
              border: 2px solid var(--green);
              height: 260px;
              border-radius: 25px;
              font-size: 20px;
              margin-bottom: 20px;
              padding-top: 20px;
              padding-left: 20px;
              resize: none;
            }
          }
          .form-checkbox {
            display: flex;
            margin-bottom: 20px;
            input {
              width: 20px;
              height: 20px;
              margin-right: 20px;
            }
            p {
              font-size: 20px;
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
          .form-validation {
            margin-bottom: 20px;
            p {
              color: var(--red);
              font-size: 16px;
            }
          }
          .form-buttons {
            display: flex;
            justify-content: space-between;
            .form-btn:first-child {
              width: calc(50% - 1rem);
              background-color: var(--green);
              border: 2px solid var(--green);
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              font-size: 20px;
              color: var(--white);
              font-weight: 500;
              border-radius: 10px;
              cursor: pointer;
              transition: 0.5s;
              &:hover {
                background-color: var(--white);
                color: var(--green);
              }
            }
            .form-btn:last-child {
              width: calc(50% - 1rem);
              background-color: var(--white);
              border: 2px solid var(--green);
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              font-size: 20px;
              color: var(--green);
              font-weight: 500;
              border-radius: 10px;
              cursor: pointer;
              transition: 0.5s;
              &:hover {
                background-color: var(--green);
                color: var(--white);
              }
            }
          }
        }
      }
      .contact-right {
        width: calc(50% - 1rem);
        .contact-right-info {
          padding: 30px;
          background-color: var(--white);
          box-shadow: var(--shadow);
          border-radius: 15px;
          h2 {
            font-size: 24px;
            font-weight: 400;
            margin-bottom: 30px;
          }
          p:not(:last-child) {
            margin-bottom: 30px;
          }
          p {
            font-size: 20px;
            font-weight: 400;
            span {
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1500px) {
  .home {
    .home-content {
      .home-left {
        h1 {
          font-size: 24px;
        }
        h2 {
          font-size: 24px;
        }
        p {
          font-size: 16px;
        }
        .home-buttons {
          display: flex;
          flex-direction: column;
          a {
            margin-right: 0;
            .home-btn {
              width: 50%;
              margin-bottom: 30px;
            }
          }
          .home-btn:last-child {
            width: 50%;
          }
        }
      }
    }
  }
  .technic {
    .technic-content {
      .technic-top {
        h2 {
          font-size: 24px;
        }
      }
      .technic-bottom {
        .technic-left {
          ul {
            li {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
  .price {
    .price-content {
      .price-top {
        h2 {
          font-size: 24px;
        }
        p {
          font-size: 16px;
        }
      }
      .price-bottom {
        .price-item-container {
          .price-item {
            width: 30%;
            h2 {
              font-size: 20px;
            }
            p {
              font-size: 16px;
            }
            .price-button {
              a {
                .price-btn {
                  font-size: 16px;
                }
              }
            }
          }
        }
        .price-button {
          .price-btn {
            font-size: 16px;
          }
        }
      }
    }
  }
  .offer {
    .offer-content {
      .offer-top {
        h2 {
          font-size: 24px;
        }
      }
      .offer-bottom {
        .offer-left {
          h2 {
            font-size: 24px;
          }
          p {
            font-size: 16px;
          }
          .offer-buttons {
            .offer-btn {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
  .about {
    .about-content {
      .about-top {
        h2 {
          font-size: 24px;
        }
      }
      .about-bottom {
        .about-right {
          h2 {
            font-size: 24px;
          }
          p {
            font-size: 16px;
          }
          .about-buttons {
            a {
              .about-btn {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
  .map {
    .map-content {
      .map-top {
        h2 {
          font-size: 24px;
        }
      }
    }
  }
  .google-map {
    .google-map-content {
      .google-map-top {
        h2 {
          font-size: 24px;
        }
      }
    }
  }
  .contact {
    .contact-content {
      .contact-top {
        h2 {
          font-size: 24px;
        }
      }
      .contact-bottom {
        .contact-left {
          .contact-form {
            .form-input {
              label {
                font-size: 20px;
              }
              input {
                font-size: 16px;
              }
              textarea {
                font-size: 16px;
              }
            }
            .form-checkbox {
              p {
                font-size: 16px;
              }
            }
            .form-buttons {
              .form-btn:first-child {
                font-size: 16px;
              }
              .form-btn:last-child {
                font-size: 16px;
              }
            }
          }
        }
        .contact-right {
          .contact-right-info {
            h2 {
              font-size: 20px;
            }
            p {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .home {
    .home-content {
      width: 90%;
      flex-direction: column;
      padding-top: 110px;
      padding-bottom: 30px;
      .home-left {
        width: 100%;
        .home-buttons {
          margin-bottom: 30px;
          a {
            .home-btn {
              width: 100%;
            }
          }
          .home-btn:last-child {
            width: 100%;
          }
        }
      }
      .home-right {
        width: 100%;
      }
    }
  }
  .technic {
    padding-bottom: 30px;
    .technic-content {
      width: 90%;
      .technic-bottom {
        flex-direction: column;
        .technic-left {
          width: 100%;
          margin-bottom: 30px;
        }
        .technic-right {
          width: 100%;
        }
      }
    }
  }
  .price {
    padding-bottom: 30px;
    .price-content {
      width: 90%;
      .price-top {
        margin-bottom: 30px;
      }
      .price-bottom {
        .price-item-container:not(:last-child) {
          margin-bottom: 30px;
        }
        .price-item-container {
          flex-direction: column;
          .price-item:not(:last-child) {
            margin-bottom: 30px;
          }
          .price-item {
            width: 100%;
          }
        }
        .price-button {
          .price-btn {
            width: 100%;
          }
        }
      }
    }
  }
  .offer {
    padding-bottom: 30px;
    .offer-content {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      .offer-top {
        margin-bottom: 30px;
      }
      .offer-bottom {
        flex-direction: column;
        .offer-left {
          width: 100%;
          margin-bottom: 30px;
          .offer-buttons {
            .offer-btn {
              width: 100%;
            }
          }
        }
        .offer-right {
          width: 100%;
        }
      }
    }
  }
  .about {
    padding-bottom: 30px;
    .about-content {
      width: 90%;
      .about-top {
        margin-bottom: 30px;
      }
      .about-bottom {
        flex-direction: column;
        .about-left {
          width: 100%;
          margin-bottom: 30px;
        }
        .about-right {
          width: 100%;
          .about-buttons {
            a {
              .about-btn {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
  .map {
    padding-bottom: 30px;
    .map-content {
      width: 90%;
      .map-top {
        margin-bottom: 30px;
      }
      .map-bottom {
        img {
          display: flex;
          width: 100%;
        }
      }
    }
  }
  .google-map {
    padding-bottom: 30px;
    .map-content {
      width: 90%;
      .map-top {
        margin-bottom: 30px;
      }
    }
  }
  .contact {
    .contact-content {
      width: 90%;
      .contact-top {
        margin-bottom: 30px;
      }
      .contact-bottom {
        flex-direction: column;
        .contact-left {
          width: 100%;
          margin-bottom: 30px;
          .contact-form {
            padding: 15px;
            .form-input {
              input {
                height: 40px;
              }
            }
            .form-buttons {
              flex-direction: column;
              .form-btn:first-child {
                width: 100%;
                margin-bottom: 20px;
              }
              .form-btn:last-child {
                width: 100%;
              }
            }
          }
        }
        .contact-right {
          width: 100%;
        }
      }
    }
  }
}
</style>
