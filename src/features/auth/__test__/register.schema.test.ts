import { describe, it, expect } from "vitest"
import { z } from "zod"

const schema = z.object({
  username: z.string().min(2).max(20).regex(/^[a-zA-Z0-9_-]+$/),
  email: z.email("Email invalide"),
  password: z.string().min(8).regex(/[^a-zA-Z0-9]/),
  confirm: z.string(),
  country: z.string().min(1, "Veuillez choisir un pays"),
  bio: z.string().max(500).optional(),
}).refine(d => d.password === d.confirm, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirm"],
})

describe("Register schema", () => {

  it("valide un formulaire correct", () => {
    const result = schema.safeParse({
      username: "gamer_01",
      email: "test@mail.com",
      password: "Password1!",
      confirm: "Password1!",
      country: "FR",
    })
    expect(result.success).toBe(true)
  })

  it("rejette un username trop court", () => {
    const result = schema.safeParse({
      username: "a", // ← trop court
      email: "test@mail.com",
      password: "Password1!",
      confirm: "Password1!",
      country: "FR",
    })
    expect(result.success).toBe(false)
  })

  it("rejette un email invalide", () => {
    const result = schema.safeParse({
      username: "gamer_01",
      email: "pas-un-email",
      password: "Password1!",
      confirm: "Password1!",
      country: "FR",
    })
    expect(result.success).toBe(false)
  })

  it("rejette si les mots de passe ne correspondent pas", () => {
    const result = schema.safeParse({
      username: "gamer_01",
      email: "test@mail.com",
      password: "Password1!",
      confirm: "AutreMotDePasse1!",
      country: "FR",
    })
    expect(result.success).toBe(false)
    expect(result.error?.issues[0].message).toBe("Les mots de passe ne correspondent pas")
  })

  it("rejette un mot de passe sans caractère spécial", () => {
    const result = schema.safeParse({
      username: "gamer_01",
      email: "test@mail.com",
      password: "Password1",  // ← pas de caractère spécial
      confirm: "Password1",
      country: "FR",
    })
    expect(result.success).toBe(false)
  })

})