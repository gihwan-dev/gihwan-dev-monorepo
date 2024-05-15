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

### Operation name

이때까지의 예제에서는 `query` 키워드를 생략했다. 그러나 `production` 에서는 이 키워드를 생략하지 않고 사용하는게 좋다.

```graphQL
query HeroNameAndFriends {
  hero {
    name
    friends {
      name
    }
  }
}
```

### Variables

변수를 사용하려면 다음 세가지 단계가 필요하다:

1. `query` 안의 정적 값을 `$variableName`으로 변경한다.
2. `$variableName`을 `query`의 인자로 선언해라.
3. `variableName: value`를 `JSON` 포맷으로 전달해라.

```graphql
query HeroNameAndFriends($episode: Episode) {
  hero(episode: $episode) {
    name
    friends {
      name
    }
  }
}
```

```json
{
  "episode": "JEDI"
}
```

이렇게 변수를 전달하기 위해서 템플릿 리터럴은 사용하지 마라. `query`안에서 캡슐화 하는 편이 더 직관적이고 동작을 예상하기 쉽다.

### Variable definitions

변수의 기본값 설정은 선택적일 수 있고 필수일 수 있다. 위 예제에서 변수 타입에 `!`가 없었으므로 선택적이다. 만약 있다면 그 필드는 필수적으로 기본값이 필요하다.

#### **Default variables**

기본값은 변수에 다음과 같이 할당될 수 있다.

```graphql
query HeroNameAndFriends($episode: JEDI) {
  hero {
    name
    friends {
      name
    }
  }
}
```

### Directives

인자를 통해 어떤 값을 포함시킬지 말지도 정할 수 있다.

```graphql
query Hero($episode: Episode, $withFriends: Boolean!) {
  hero(episode: $episode) {
    name
    friends @include(if: $withFriends) {
      name
    }
  }
}
```

`GraphQL`에는 다음 두가지의 `directive`가 있다:

- `@include(if: Boolean)`
- `@skip(if: Boolean)`

단어의 이름 처럼 동일하게 동작한다.

### Mutations

`mutation`을 통해 서버 데이터를 변경하는 요청을 보낼 수 있다.

```graphql
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    starts
    commentary
  }
}
```
