#!/bin/bash
git pull
docker-compose build
docker-compose push
docker service rm  MONSTER_frontend
docker stack deploy --compose-file.yml docker-compose MONSTER
