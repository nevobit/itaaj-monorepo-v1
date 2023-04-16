Clonar este repositorio https://github.com/ITAAJ-Activos-en-movimiento/itaaj-monorepo.git

Trabajar siempre en la rama asignada **ISSUE_[Numero de tarea]** 

Variables de Entorno:  Se debe agregar el archivo `.env.local` en cada directorio

Instalar turbo

```jsx
pnpm i -g turbo
```

Instalar dependencias

```jsx
pnpm install
```

Compilar todos los paquetes

```jsx
pnpm run build
```

Compilar paquete especifico

```jsx
pnpm run build -w nombre-del-paquete
```

Para correr un proyecto en modo desarrollo:

```jsx
pnpm run dev -w nombre-del-proyecto
```