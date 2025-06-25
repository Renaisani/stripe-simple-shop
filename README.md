# Stripe Simple Shop

A **bare‑bones starter** that shows how to plug **Stripe Checkout** into a **Next.js** app with as little code as possible. The goal is to keep the Stripe bits in one place so you can copy‑paste the parts you need into any project.

> **Status:** early draft – still learning as I go 🙂

---

## 🌱 Why I built this

I wanted a simple playground where I could:

1. List products that live in my Stripe Dashboard.
2. Drop them in a cart.
3. Click **Checkout** and let Stripe handle the payment form.

That’s it—no extra databases, no fancy state machines. Just the basics so I can reuse the pattern later.

---

## 🏃‍♂️ Quick start

```bash
# 1 ‑ Clone
$ git clone https://github.com/Renaisani/stripe-simple-shop.git
$ cd stripe-simple-shop

# 2 ‑ Install deps (pick one)
$ pnpm install   # or npm install / yarn install / bun install

# 3 ‑ Add your Stripe keys
$ cp .env.example .env.local   # then edit the file

# 4 ‑ Run in dev mode
$ npm run dev     # opens http://localhost:3000
```

What goes in **`.env.local`** (example):

```env
STRIPE_SECRET_KEY=sk_test_xxx
```

Open the site, add a product to the cart, and hit **Checkout**. You should land on Stripe’s hosted payment page.

---

## 🗂️ Key folders

| Path          | What’s inside                            |
| ------------- | ---------------------------------------- |
| `app/`        | Next.js App Router pages & API routes    |
| `components/` | React components (ProductCard, Cart)     |
| `lib/stripe/` | Small helpers to init Stripe server‑side |
| `hooks/`      | `useCart` + other React hooks            |

*(I’m slowly moving common Stripe code into its own folder so it’s easier to copy into new projects.)*

---

## ⚙️ How the checkout flow works

1. **Product list** – The home page fetches price IDs listed in `NEXT_PUBLIC_STRIPE_PRICE_MAP` and shows them as products.
2. **Cart** – `useCart` stores items in `localStorage`.
3. **Checkout API** – `/app/api/checkout/route.ts` creates a Stripe Checkout Session with those items and returns a redirect URL.
4. **Redirect** – The browser navigates to that URL; Stripe takes payment.
5. **Confirmation** - After checkout, Stripe redirects user to a order confirmation page.

---

## 🚧 Next steps (my to‑do list)

* [ ] Add Redis/Valkey(still deciding) integration to handle storing price data and eventually user data
* [ ] Add user authentication so carts and orders are tied to user accounts
* [ ] Add Stripe subscription functionality
* [ ] Add pay-wall blocked content delivery system to share files/photos/videos like Skillshare/Patreon


