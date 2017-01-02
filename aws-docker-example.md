## docker login
~~~~
docker login
# returns the docker login command execute the same
~~~~

## clone repo
~~~~
git clone git@gitlab.com:cloudbreeze/cb-demo-wh.git
cd cb-demo-wh/docker-workflow
~~~~

## cb-redis
~~~~
cd redis
docker build -t cb-redis .
docker tag cb-redis:latest avarade/cb-redis:latest
docker push avarade/cb-redis:latest
cd ..
~~~~

## cb-node
~~~~
cd node
docker build -t cb-node .
docker tag cb-node:latest avarade/cb-node:latest
docker push avarade/cb-node:latest
cd ..
~~~~

## cb-nginx
~~~~
cd nginx
docker build -t cb-nginx .
docker tag cb-nginx:latest avarade/cb-nginx:latest
docker push avarade/cb-nginx:latest
cd ..
~~~~

## Create secrest k8s configuration
~~~~
# After login the credentials are stored in ~/.docker/config.json
$ cat > image-pull-secret.yaml << EOF 
apiVersion: v1     
kind: Secret
metadata:
  name: ecrregistrykey
data:
  .dockerconfigjson: $(cat ~/.docker/config.json | base64)
type: kubernetes.io/dockerconfigjson
EOF
$ kubectl [create/replace] -f /tmp/image-pull-secret.yaml
~~~~


cat > image-pull-secret.yaml << EOF 
apiVersion: v1     
kind: Secret
metadata:
  name: ecrregistrykey
data:
  .dockerconfigjson: $(cat dockerconfig | base64)
type: kubernetes.io/dockerconfigjson
EOF