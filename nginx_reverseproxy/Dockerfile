FROM nginx:alpine
COPY error_pages/* /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
COPY custom-errors.conf /etc/nginx/custom-errors.conf

EXPOSE 80