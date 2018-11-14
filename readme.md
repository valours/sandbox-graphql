## api
http://localhost:4000/graphql
## client
###CURL
```
curl -X POST \
-H "Content-Type: application/json" \
-d '{"query": "{ hello }"}' \
http://localhost:4000/graphql
```
###DEV Console
```
fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: "{ hello }"})
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
```
## TOOLS
[insomnia - rest client](https://github.com/getinsomnia/insomnia)

##todo
### V1
- [ ] Api graphql
- [ ] Ajouter une base de données (KISS)

### V2
- [ ] Ajouter une application
- [ ] Ajouter JWT

### V3
- [ ] Ajouter du style avec styled-components


### Ressources
[styled-components](https://www.styled-components.com/)