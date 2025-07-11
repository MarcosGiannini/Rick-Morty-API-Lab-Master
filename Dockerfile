# --- ETAPA 1: El Taller de Construcción ---
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

# --- ETAPA 2: El Contenedor de Producción ---
FROM nginx:stable-alpine

# ¡LÍNEA NUEVA! Copiamos nuestro archivo de configuración personalizado.
# Esto sobreescribe la configuración por defecto de Nginx dentro del contenedor.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos el resultado del build al directorio público de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# El resto es igual
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]