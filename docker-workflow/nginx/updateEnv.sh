#!/bin/bash
set -x

echo $CB_ENV_NAME
env
sed -i -e "s/cb_env_name/$CB_ENV_NAME/g" /etc/nginx/nginx.conf
cat /etc/nginx/nginx.conf
service nginx restart