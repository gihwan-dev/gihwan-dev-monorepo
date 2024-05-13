# GraphQL이란

`GraphQL`이란 APIs를 위한 쿼리 언어이다. 클라이언트에서 정확히 원하는 만큼의 데이터를 요청하고 받을 수 있도록 해준다.

이전에 `RSC`관련 공부를 하면서 알게된 내용이 있다. 클라이언트에서 요청을 주고 받는것은 여러 문제점이 있겠지만 그 중 하나는 네트워크 워터폴이다. 클라이언트측에 필요한 `JS` 파일을 받아오는데 요청을 수행하고 웹사이트에 필요한 데이터를 위해 요청을 한번 더 수행하게 된다. 리액트 팀에서는 이를 해결할 방법으로 다음 두 가지를 제시했다.

1. RSC: React Server Component
2. GraphQL + Relay

이번에는 `Github API`를 사용하게될 예정이기 때문에 RSC를 통해서 이런 문제를 해결하기는 어렵고 `GraphQL`을 사용해보려 한다.

## Queries and Mutations

### Fields

#### **쿼리**

다음은 `GraphQL` 쿼리다.

```graphql
{
  hero {
    name
  }
}
```

#### **응답**

다음은 응답이다.

```json
{
  "data": {
    "hero": {
      "name": "R2-D2"
    }
  }
}
```

위 처럼 정확히 원하는 만큼의 데이터를 요청하고 받을 수 있다.

### Arguments

`GraphQL`은 인자를 받을 수 있다.

```graphql
{
  human(id: "1000") {
    name
    height(unit: FOOT)
  }
}
```

### Aliases

별칭을 가지게 할수도 있다.

```graphql
{
  empireHero: hero(episode: EMPIRE) {
    name
  }
  jediHero: hero(episode: JEDI) {
    name
  }
}
```

```json
{
  "data": {
    "empireHero": {
      "name": "Luke Skywalker"
    },
    "jediHero": {
      "name": "R2-D2"
    }
  }
}
```

### Fragments

중복되는 요청을 방지하기 위해서 `fragments`라는 것을 사용할 수 있다.

```graphql
{
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  appearsIn
  friends {
    name
  }
}
```

### Using variables inside fragments

`fragments` 내부에서 변수도 활용할 수 있다.

```graphql
query HeroComparison($first: Int = 3) {
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  friendsConnection(first: $first) {
    totalCount
    edges {
      node {
        name
      }
    }
  }
}
```
