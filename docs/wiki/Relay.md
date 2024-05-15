# Relay

리액트에서 `GraphQL` 요청을 관리해 주는 라이브러리다.

## 특징

`Relay` 라이브러리의 주요 특징은 다음과 같다:

- 선언적 데이터: 데이터가 필요한 곳에 선언 하기만 하면 된다.
- 중복 조합: 각 컴포넌트에서 데이터가 필요한만큼 요청하면 된다. `Relay`가 알아서 이를 취합해서 요청을 보낸다.
- 미리 요청: `Relay`는 코드를 분석한다. 그렇기에 코드가 다운로드 되거나 실행되기 전에 요청을 보낼 수 있다.
- UI 패턴: 로딩, 페이지네이션, 재요청, 업데이트 최적화 등등 다루기 귀찮은 UI 상태를 편리하게 관리할 수 있도록 해준다.
- 지속적 업데이트: `Relay`는 중앙화된 데이터 저장소를 유지한다. 그러므로 컴포넌트가 각기 다른 `query`로 부터 요청된 데이터를 사용하더라도, 같은 데이터로 동기화 될 수 있도록 해준다.
- 스트리밍과 지연된 데이터: 쿼리의 일부를 선언적으로 지연시키면 `Relay`가 데이터 스트림이 들어오는 대로 UI를 점진적으로 다시 렌더링 한다.
- 개발자 경험: `Relay`는 자동 완성과 `go-to-definition` 을 제공한다.
- 타입 안정성: `Relay`는 타입을 생성 해준다. 그러므로 런타임에 에러가 발생할 가능성을 줄여준다.
- 로컬 데이터 관리: 같은 API를 서버 데이터와 로컬 상태 관리에 사용할 수 있다.
- 최적화된 런타임: JIT 친화적 런타임은 예상되는 페이로드를 정적으로 결정해 수신 데이터를 더 빠르게 처린한다.

## Relay 사용

릴레이에서 중요한점은 쿼리의 중복에 대해 고민하지 않는 것이다. 아이러니하다. 동시에 왜 이제서야 `GraphQL`을 발견했지? 하는 생각도 했다. 로컬에서 컴포넌트가 필요로 하는 만큼 데이터를 선언한다. 그렇다면 `Relay` 컴파일러가 조각들을 완전한 쿼리로 결합한다.

이외에도 `Store`를 동해 데이터를 캐싱한다.

![how relay work](https://relay.dev/assets/images/graphql-relay-runtime-fetches-query-4f0734093c2d277f1dbe5135c5a519ba.png)

## Query 기본사항

`Relay`를 사용하여 쿼리를 요청하면 다음과 같은 일이 일어난다.

**일부 루트 노드에서 시작해서 노드에서 노드로 이동하며 쿼리를 조합한다.**

![what is happen when query data with relay](https://relay.dev/assets/images/query-upon-graph-2209e828b9ce0ddc492555bb7a0a5a3c.png)

예제 쿼리 하나를 분석해보자.

```javascript
const NewsFeedQuery = graphql`
  query NewsfeedQuery {
    topStory {
      title
      summary
      poster {
        name
        profilePicture {
          url
        }
      }
      thumbnail {
        url
      }
    }
  }
`;
```

- **GraphQL**을 `Javascript`에 포함시키기 위해 `graphql` 을 사용한다. 이 안에 쿼리를 넣으면 된다.
- 쿼리 선언 내부에는 쿼리할 정보를 지정하는 필드가 있다.
  - 일부 필드는 문자열, 숫자 또는 기타 정보 단위를 검색하는 **스칼라 필드**다.
  - 다른 필드는 그래프의 한 노드에서 다른 노드로 이동할 수 있는 **간선**이다.

다음과 같은 형태라 볼 수 있다.

![graphql query structure description](https://relay.dev/assets/images/query-breakdown-56a29935576fa45104147bef7da35749.png)

이제 할 일은 다음 두 작업이다.

1. `Relay` 컴파일러를 실행해 컴파일 한다.
2. `graphql` 쿼리를 사용해 데이터를 받아올 수 있도록 한다.

위 쿼리를 작성하고 `npm run relay`를 실행한다.

그러면 `__generated__` 폴더에 `ts` 파일이 생성된다.

이후 다음과 같이 쿼리를 사용할 수 있다.

`useLazyLoadQuery` 훅은 데이터를 요청하고 받는다. 다음 두가지를 인자로 받는다:

- `GraphQL query`
- 쿼리와 함께 서버에 전송되는 `Variables`.

`useLazyLoadQuery`는 처음 레더링 될 때 데이터를 받아온다. `Relay`에는 앱이 로드되기 전에 데이터를 미리 가져오는 API도 있다. 어떤 경우든 Relay는 Suspense를 사용하여 데이터를 사용할 수 있을 때까지 로딩 상태를 보여준다.

```text
심층분석: 쿼리는 정적이다

Relay 앱의 모든 GraphQL 문자열은 Relay 컴파일러에 의해 사전 처리된다. 이는 런타임에 GraphQL 쿼리를 구성할 수 없다는 의미이다.
```

## Fragment

`Fragments`는 `Relay`의 특징 중 하나다. 단일 쿼리의 효율성을 유지하면서 각 구성 요소가 자체 데이터 요구 사항을 독립적으로 선언할 수 있다.

`Fragment`를 사용해서 여러곳에서 사용되는 쿼리를 간편하게 사용할 수 있다.

![fragment image](https://relay.dev/assets/images/fragments-newsfeed-story-compilation-5988239417a9739a88f25bfcad3a7ab7.png)

`useFragment`

```js
const StoryFragment = graphql`
  fragment StoryFragment on Story {
    title
    summary
    createdAt
    poster {
      name
      profilePicture {
        url
      }
    }
    thumbnail {
      url
    }
  }
`;
```

우선 위와 같이 `graphql fragment`를 생성한다.

```js
const NewsFeedQuery = graphql`
  query NewsfeedQuery {
    topStory {
      ...StoryFragment
    }
  }
`;
```

이후 위와 같이 상위 쿼리에서 스프레드 한다.

```js
const data = useFragment(StoryFragment, fragmentKey);
```

이후 다시 `Fragment` 가 있는 컴포넌트에서 위와 같은 형태로 사용할 수 있다.

여기서 `fragmentKey`란 `useLazyLoadQuery`를 통해서 반환된 `queryResult.topStory` 객체 이다. 즉 어떤 부분의 조각인지 알려주기 위한 `key` 라고 생각하면 된다.

이렇게 사용하면 `Fragment`를 여러곳에서 재사용할 수 있고 간편하게 수정할 수 있다.

![fragment pros](https://relay.dev/assets/images/fragment-image-add-once-compiled-addfb548d0a7422c83d492321e189d59.png)

여기 까지가 정리할만한 `GraphQL`의 기본이라 생각이 들었다. 이후 나오는 내용들에 대해서는 적당히 참고 해 뒀다가 프로젝트를 진행하면서 공부하고 응용해보려 한다.
