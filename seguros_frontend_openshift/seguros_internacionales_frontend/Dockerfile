# Etapa 1: Build de Angular
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Etapa 2: Servidor Nginx compatible con OpenShift (puerto 8080 non-root)
FROM nginxinc/nginx-unprivileged:alpine
COPY --from=build /app/dist/seguros_internacionales_frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
