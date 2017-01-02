
## Rolling Update
~~~~
./kubernetes/platforms/darwin/amd64/kubectl set image deployment/node node=anandkarwa/cb-node:v1 --namespace cb

./kubernetes/platforms/darwin/amd64/kubectl set image deployment/node node=anandkarwa/cb-node:latest --namespace cb
~~~~

## Benchmarking
~~~~
sudo apt-get update
sudo apt-get install apache2-utils

sudo ulimit -n 200000
ab -n 1000 -c 100 http://<lb>.ap-southeast-1.elb.amazonaws.com/
ab -n 10000 -c 500 http://<lb>.ap-southeast-1.elb.amazonaws.com/
ab -n 10000 -c 1000 http://<lb>.ap-southeast-1.elb.amazonaws.com/
~~~~

## Scale up/down the container count
In the deployment config change replica count to desired number

## Scale up/down the nodes
k8s creates an auto scaling group for the k8s nodes. Using the AWS cli
or AWS console we can change the Min and Max parameters. Typically the name
of this auto scaling group is something like.
cb-k8s-minion-group-ap-southeast-1a

created from the exported variables
export KUBE_AWS_INSTANCE_PREFIX=cb-k8s 
minion-group
export KUBE_AWS_ZONE=ap-southeast-1a

## remove all kube-system namespace pods
~~~~
./kubernetes/platforms/darwin/amd64/kubectl delete pods --all --namespace kube-system
~~~~

## remove all custom namespace pods
~~~~
./kubernetes/platforms/darwin/amd64/kubectl delete pods --all --namespace cb
~~~~

## remove all replica sets
~~~~
./kubernetes/platforms/darwin/amd64/kubectl delete rs --all --namespace cb
~~~~

## create config
~~~~
./kubernetes/platforms/darwin/amd64/kubectl create -f ./k8s-cb.yml
~~~~

## replace config
~~~~
./kubernetes/platforms/darwin/amd64/kubectl replace -f ./k8s-cb.yml
~~~~

## delete config
~~~~
./kubernetes/platforms/darwin/amd64/kubectl delete -f ./k8s-cb.yml
~~~~

