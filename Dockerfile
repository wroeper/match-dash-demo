FROM nginx:alpine
COPY docker-start.sh /
RUN chmod +x /docker-start.sh
COPY build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["./docker-start.sh"]