echo '\n\n requesting pessoas'
curl --silent localhost:4000/pessoas

echo '\n\n requesting pessoas id'
curl --silent localhost:4000/pessoas/1

echo '\n\n\n requesting create'
curl -i -X POST -H "Content-Type: application/json" \
    -d $'{
        "nome":" ",
        "ativo":"",
        "email":"",
        "role":""
    }' localhost:4000/pessoas

echo '\n\n\n requesting update'
curl -i -X PUT -H "Content-Type: application/json" \
    - d '{
        "nome":" ",
        "ativo":"",
        "email":"",
        "role":""
    }' localhost:4000/pessoas