import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@subpages/main-page.vue";
import Price from '@subpages/price.vue';
import PolicyPrivacy from '@subpages/policy-privacy.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MainPage,
      name: "main-page",
      meta: {
        title: "Zbiorniki Modułowe Ppoż, Szambo, Zbiorniki na Deszczówkę i Więcej",
        description: "Kup wysokiej jakości zbiorniki modułowe Ppoż, szambo i zbiorniki na deszczówkę. Oferujemy produkty dostosowane do Twoich potrzeb.",
        canonical: "https://zbiornikimodulowe.pl/", 
      },
    },
    {
      path: "/price",
      component: Price,
      name: "price",
      meta: {
        title: "Cennik - Zbiorniki Modułowe Ppoż, Szambo i Zbiorniki na Deszczówkę",
        description: "Sprawdź nasz cennik na zbiorniki modułowe Ppoż, szambo i zbiorniki na deszczówkę. Oferujemy konkurencyjne ceny i wysoką jakość.",
        canonical: "https://zbiornikimodulowe.pl/price", 
      },
    },
    {
      path: "/policy-privacy",
      component: PolicyPrivacy,
      name: "policy-privacy",
      meta: {
        title: "Polityka Prywatności - Zbiorniki Modułowe Ppoż",
        description: "Zapoznaj się z naszą polityką prywatności dotyczącą zbiorników modułowych Ppoż, szamba i zbiorników na deszczówkę. Twoja prywatność jest dla nas ważna.",
        canonical: "https://zbiornikimodulowe.pl/policy-privacy", 
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  const meta = to.meta;

  if (meta.title) {
    document.title = meta.title;
  }

  if (meta.description) {
    const descriptionMetaTag = document.querySelector('meta[name="description"]');
    if (descriptionMetaTag) {
      descriptionMetaTag.setAttribute('content', meta.description);
    } else {
      const newDescriptionMetaTag = document.createElement('meta');
      newDescriptionMetaTag.name = 'description';
      newDescriptionMetaTag.content = meta.description;
      document.head.appendChild(newDescriptionMetaTag);
    }
  }

  if (meta.canonical) {
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', meta.canonical);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', meta.canonical);
      document.head.appendChild(linkCanonical);
    }
  }
  next();
});

export default router;
