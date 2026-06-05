# Gamer Challenges - Frontend

Frontend de l'application Gamer Challenges, developpe avec Next.js, React, TypeScript et pnpm.

Ce guide explique comment lancer le projet apres un clonage, quelles commandes utiliser au quotidien, puis comment se reperer dans le depot sans se perdre.


1. Installez les dependances :

```bash
pnpm install
```

3. Creez le fichier d'environnement local :

```bash
cp .env.example .env.local
```

1. Verifiez les variables dans `.env.local`.

Pour un lancement classique en local, gardez par exemple :

```env
NEXT_PUBLIC_FRONT_LOCAL_PORT=3000
NEXT_PUBLIC_API_URL="http://localhost:PORT/api"
```

`NEXT_PUBLIC_API_URL` est l'adresse du backend vue par le navigateur. Si votre API tourne sur un autre port ou une autre URL, modifiez cette valeur.

Si vous lancez le frontend dans Docker et que les Server Components doivent joindre le backend par le reseau Docker, ajoutez aussi :

```env
NEXT_PUBLIC_API_SERVER_URL="http://gamer_challenge_api:PORT/api"
```

5. Lancez le serveur de developpement :

```bash
pnpm dev
```

6. Ouvrez l'application dans le navigateur :

```text
http://localhost:3000
```

## Lancement avec Docker

Le projet contient un `Dockerfile` et un `docker-compose.yaml`.

Avant le premier lancement, creez le reseau Docker partage avec le backend :

```bash
docker network create gamer_network
```

Puis lancez le frontend :

```bash
pnpm docker:dev
```

Pour arreter les conteneurs :

```bash
pnpm docker:down
```

Le service expose le frontend sur :

```text
http://localhost:3000
```

## Commandes utiles

```bash
pnpm dev
```

Lance l'application en mode developpement.

```bash
pnpm build
```

Compile l'application pour verifier qu'elle peut partir en production.

```bash
pnpm start
```

Lance l'application compilee. A utiliser apres `pnpm build`.

```bash
pnpm lint
```

Verifie les erreurs ESLint.

```bash
pnpm test
```

Lance les tests avec Vitest.

```bash
pnpm test:ui
```

Ouvre l'interface Vitest.

```bash
pnpm test:coverage
```

Lance les tests avec un rapport de couverture.

## Se reperer dans le depot

Voici les dossiers les plus importants.

```text
src/
  app/          Pages et layouts Next.js
  components/   Composants React reutilisables
  features/     Logique metier : API, hooks, contextes, types
  lib/          Fonctions utilitaires et configuration commune
  styles/       Styles partages par certaines pages/composants
  tests/        Configuration des tests
```

## Comprendre les pages

Le projet utilise l'App Router de Next.js. Les pages sont dans `src/app`.

Les dossiers entre parentheses, comme `(public)` ou `(auth)`, servent a organiser les routes. Ils ne changent pas l'URL directement.

Exemples :

```text
src/app/(public)/page.tsx
```

Correspond a la page d'accueil `/`.

```text
src/app/(public)/challenges/page.tsx
```

Correspond a `/challenges`.

```text
src/app/(public)/challenges/[slug]/page.tsx
```

Correspond a une page detail dynamique, par exemple `/challenges/mon-challenge`.

```text
src/app/(auth)/login/page.tsx
```

Correspond a `/login`.

```text
src/app/(connected)/dashboard/page.tsx
```

Correspond a `/dashboard`.

```text
src/app/(admin)/admin/page.tsx
```

Correspond a `/admin`.

## Comprendre les grands dossiers

### `src/app`

Contient les routes, les pages et les layouts.

- `layout.tsx` definit une structure commune.
- `page.tsx` definit une page.
- `[slug]` indique une route dynamique.
- `(public)` regroupe les pages accessibles publiquement.
- `(auth)` regroupe les pages de connexion, inscription et reset password.
- `(connected)` regroupe les pages pour utilisateurs connectes.
- `(admin)` regroupe les pages d'administration.
- `(unauthorized)` contient la page d'acces refuse.

Quand vous cherchez une page visible dans le navigateur, commencez presque toujours par `src/app`.

### `src/components`

Contient les composants React.

- `components/ui` contient les composants d'interface generiques : boutons, inputs, cards, dialogs, tabs, etc.
- `components/common` contient les composants partages dans plusieurs zones : sidebar, banner, participation, detail challenge, protection de route.
- `components/home` contient les composants de la page d'accueil et de la liste de challenges.
- `components/classements` contient les composants visuels du classement.
- `components/dashboard` contient les composants lies au dashboard.

Si une page devient trop grosse, sa logique visuelle doit souvent partir dans `src/components`.

### `src/features`

Contient la logique metier organisee par type de responsabilite.

- `features/api` contient les appels API vers le backend.
- `features/hooks` contient les hooks React reutilisables.
- `features/context` contient les contextes React globaux, comme l'authentification ou la recherche.
- `features/types` contient les types TypeScript partages.
- `features/__test__` contient les tests lies aux features.

Si vous cherchez comment les donnees arrivent depuis le backend, commencez par `src/features/api`, puis regardez le hook correspondant dans `src/features/hooks`.

### `src/lib`

Contient les outils et helpers transverses.

Exemples :

- `api.ts` centralise les URLs de l'API.
- `utils.ts` contient des fonctions utilitaires generales.
- `classement.mapper.ts` transforme les donnees de classement.
- `classement.utils.ts` contient des helpers pour les classements.
- `challenge-category.ts` contient la logique liee aux categories de challenges.
- `countries.ts` contient les donnees de pays.

### `src/styles`

Contient des fichiers de styles partages ou specialises par page.

Exemples :

- `classements.styles.ts`
- `dashboard.styles.ts`
- `login.styles.ts`
- `register.styles.ts`
- `global.styles.ts`

Les styles globaux CSS sont dans :

```text
src/app/globals.css
```

## Parcours simple pour modifier une fonctionnalite

Pour eviter de se perdre, utilisez cette methode :

1. Trouvez la page dans `src/app`.
2. Regardez quels composants elle importe depuis `src/components`.
3. Si la page charge des donnees, regardez les hooks dans `src/features/hooks`.
4. Si le hook appelle le backend, regardez le fichier correspondant dans `src/features/api`.
5. Si les donnees sont transformees, cherchez dans `src/lib`.
6. Si un type manque ou doit changer, regardez dans `src/features/types`.
7. Lancez `pnpm lint`, `pnpm test` ou `pnpm build` selon le changement.

## Exemple : comprendre la page des classements

Pour la page `/classements` :

1. La route est dans `src/app/(public)/classements/page.tsx`.
2. Les composants visuels sont dans `src/components/classements`.
3. Le hook principal est dans `src/features/hooks/useClassements.ts`.
4. Les appels API sont dans `src/features/api/classement.api.ts`.
5. Les types sont dans `src/features/types/classements.type.ts`.
6. Les transformations et helpers sont dans `src/lib/classement.mapper.ts` et `src/lib/classement.utils.ts`.
7. Les styles dedies sont dans `src/styles/classements.styles.ts`.

## Bonnes pratiques pour contribuer

- Travaillez sur une branche dediee a votre modification.
- Gardez les composants simples : une page assemble, les composants affichent, les hooks gerent la logique.
- Mettez les types partages dans `src/features/types`.
- Mettez les appels backend dans `src/features/api`.
- Mettez les fonctions reutilisables dans `src/lib`.
- Lancez au minimum `pnpm lint` avant de pousser.
- Lancez `pnpm build` si vous avez modifie une page, un layout ou une logique importante.
- Ajoutez ou mettez a jour les tests quand vous touchez a une logique metier.

## Problemes courants

### Le frontend demarre mais les donnees ne s'affichent pas

Verifiez que le backend est lance, puis verifiez `.env.local` :

```env
NEXT_PUBLIC_API_URL="http://localhost:4000/api"
```

L'URL doit correspondre a l'adresse reelle de l'API.

### Docker ne trouve pas le reseau `gamer_network`

Creez le reseau :

```bash
docker network create gamer_network
```

Puis relancez :

```bash
pnpm docker:dev
```

### Une dependance manque

Relancez l'installation :

```bash
pnpm install
```

### Le build echoue

Lancez d'abord :

```bash
pnpm lint
pnpm test
```

Puis corrigez les erreurs indiquees avant de relancer :

```bash
pnpm build
```
