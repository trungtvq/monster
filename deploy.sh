#!/bin/bash
ssh trungtvq@vphim.co "cd /home/trungtvq/monster && git pull && docker-compose build"
ssh trungtvq@vphim.co "cd /home/trungtvq/monster && docker-compose push"
#ssh trungtvq@vphim.co "cd /home/trungtvq/monster && docker service update MONSTER_frontend"

#ssh trungtvq@vphim.co "cd /home/trungtvq/monster && docker service rm  MONSTER_frontend"
ssh trungtvq@vphim.co "cd /home/trungtvq/monster && docker stack deploy --compose-file docker-compose.yml MONSTER"
