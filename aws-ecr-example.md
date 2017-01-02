## docker login
~~~~
aws ecr get-login --region ap-southeast-1
# returns the docker login command execute the same
~~~~

## cb-redis
~~~~
docker build -t cb-redis .
docker tag cb-redis:latest [account_no].dkr.ecr.ap-southeast-1.amazonaws.com/cb-redis:latest
docker push [account_no].dkr.ecr.ap-southeast-1.amazonaws.com/cb-redis:latest
~~~~

## cb-node
~~~~
docker build -t cb-node .
docker tag cb-node:latest [account_no].dkr.ecr.ap-southeast-1.amazonaws.com/cb-node:latest
docker push [account_no].dkr.ecr.ap-southeast-1.amazonaws.com/cb-node:latest
~~~~

## cb-nginx
~~~~
docker build -t cb-nginx .
docker tag cb-nginx:latest [account_no].dkr.ecr.ap-southeast-1.amazonaws.com/cb-nginx:latest
docker push [account_no].dkr.ecr.ap-southeast-1.amazonaws.com/cb-nginx:latest
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