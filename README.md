# laplateforme-landing

Landing page for [`laplateforme-starter`](https://github.com/konstantine-garozashvili/ci-cd-kube) —
the npx scaffolder for production-ready Node.js projects.

Bilingual (FR/EN), static React build, deployed on a Kubernetes cluster
(vcluster `etudiant-06`, La Plateforme) by GitHub Actions.

**Live:** https://etudiant-06-web.development.atelier.ovh

## Stack

- React 19 + TypeScript + Vite + Tailwind CSS
- Vitest (unit) · Playwright (e2e) · Gitleaks (secrets)

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Quality gates

```bash
npm test           # unit tests (Vitest)
npm run build      # production build → dist/
npm run test:e2e   # Playwright against the production build
```

## CI/CD

| Workflow | Trigger | What it does |
|---|---|---|
| `ci.yml` | PR + push to main | Gitleaks → unit tests → build → Playwright e2e |
| `cd.yml` | push to main | builds, pushes `dist/` into a ConfigMap on the cluster, rolls out the nginx deployment, smoke-checks the live URL |

### How the deployment works (no registry)

1. `vite build` produces static files in `dist/`
2. CD creates/updates a ConfigMap `landing-static` from those files
3. The `web` deployment (nginx-unprivileged) mounts that ConfigMap at `/usr/share/nginx/html`
4. `kubectl rollout restart` picks up the new content; the existing Ingress serves it over HTTPS

Required secret: `KUBECONFIG_B64` — base64 of the cluster kubeconfig
(`base64 -i etudiant-06.kubeconfig`).

## Credits

Designed and developed by [Konstantine Garozashvili](https://github.com/konstantine-garozashvili)
at [La Plateforme_](https://laplateforme.io). MIT License.
