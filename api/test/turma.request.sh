echo '\n\n requesting turmas'
curl --silent localhost:4000/turmas

echo '\n\n requesting turmas id'
curl --silent localhost:4000/turmas/1

echo '\n\n\n requesting create'
curl -i -X POST -H "Content-Type: application/json" \
    -d $'{
        "nome":" ",
        "ativo":"",
        "email":"",
        "role":""
    }' localhost:4000/turmas


echo '\n\n\n requesting update'
curl -i -X PUT -H "Content-Type: application/json" \
    - d '{
        "nome":" ",
        "ativo":"",
        "email":"",
        "role":""
    }' localhost:4000/turmas
