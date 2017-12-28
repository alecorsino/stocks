# DOCKER

### Run Container in detached mode

```
 docker-compose up -d
```

### Enter the container
```
docker ps

docker exec -it <container id> /bin/sh
```

### Rebuilding Image if something needs to be changed

```
docker-compose build
```

or

```
docker-compose up --build
```


### Npm packages Post installation

`docker-compose run` \<named-service>  \<command>

\<named-service>: Use container name used inside `docker-compose.yml` inside `service` section

```
docker-compose run backend yarn add gulp-nodemon

```
# PM2 https://github.com/keymetrics/docker-pm2
## Useful commands

Command | Description
--------|------------
```$ docker exec -it <container-id> pm2 monit``` | Monitoring CPU/Usage of each process
```$ docker exec -it <container-id> pm2 list``` | Listing managed processes
```$ docker exec -it <container-id> pm2 show``` | Get more information about a process
```$ docker exec -it <container-id> pm2 reload all``` | 0sec downtime reload all applications
