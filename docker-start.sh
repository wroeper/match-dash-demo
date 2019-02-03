#!/bin/sh
cp /usr/share/nginx/html/config.${ENV}.js /usr/share/nginx/html/config.js && exec nginx -g 'daemon off;'