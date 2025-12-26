"use server"

import { stripe } from "@/lib/stripe"
import { PRODUCTS } from "@/lib/products"

export async function startCheckoutSession(productId: string): Promise<string> {
  const product = PRODUCTS.find((p) => p.id === productId)

  if (!product) {
    throw new Error(`Product with id "${productId}" not found`)
  }

  // For annual plans, calculate the yearly amount
  const amount = product.billingCycle === "annual" ? product.priceInCents * 12 : product.priceInCents

  // Create Checkout Sessions
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: amount,
          recurring: product.billingCycle === "monthly" ? { interval: "month" } : { interval: "year" },
        },
        quantity: 1,
      },
    ],
    mode: "subscription",
  })

  if (!session.client_secret) {
    throw new Error("Failed to create checkout session: client_secret is null")
  }

  return session.client_secret
}
