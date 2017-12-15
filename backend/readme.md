# DOCKER

### Run Container in detached mode

```
 docker-compose up -d
```

### Enter the container
```
> docker ps

> docker exec -it <container id> /bin/sh
```

### Rebuilding Image if something needs to be changed

```
docker-compose build
```

or

```
docker-compose up --build
```
