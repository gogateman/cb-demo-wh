FROM nginx
RUN mkdir /opt/cloudbreeze
WORKDIR /opt/cloudbreeze
ADD . /opt/cloudbreeze
RUN chmod 755 /opt/cloudbreeze/updateEnv.sh
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["/opt/cloudbreeze/updateEnv.sh"]