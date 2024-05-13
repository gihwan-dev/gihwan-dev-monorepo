---
author: 최기환
pubDatetime: 2024-05-13T18:00:00Z
modDatetime: 2024-05-13T18:00:00Z
title: 모노레포 개발지 - 1일차
slug: 모노레포-개발지-1일차
featured: false
draft: false
tags:
  - daily
description: 개인적으로 사용할 모노레포 개발을 시작하며 만난 깨달음, 문제점, 해결법 등을 정리했습니다.
---

## Table of contents

## 왜?

프론트엔드로 취업하기전에 날카로운 무기가 되어줄 프로젝트가 하나 있어야 겠다는 생각이 들었다... 한 아이디어를 생각 해 냈고 구현해 보기로 했다. 설계를 진행했고 이번에 `monorepo`를 도입해 보기로 했다.

## 모노레포가 나에게 적합할까?

그렇다. 적합하지 않다. 모노레포를 공부하면서 깨달았다. 나는 개인이고 개인으로 프로젝트를 진행하니 모노레포가 나에게 적합하지 않을지도 모르겠다고 생각했다. 어쨌든 이걸 시도해 보는데 의의가 있다고 생각했고 설계를 시작했다.

[진행중인 모노레포 깃허브 레포](https://github.com/gihwan-dev/gihwan-dev-monorepo)

## 모노레포에서 중요한점

아래 링크에서 모노레포의 개념에 대해서 공부했다.

[모노레포 개념을 학습한 사이트](https://monorepo.tools/)

모노레포에서 무엇이 중요한지에 대해서 알아보기 전에 모노레포가 등장한 배경에 대해서 아주 간략하게 정리하자면 다음과 같다:

1. 기존에 멀티레포를 사용했다. 이는 프로젝트를 진행하는 각각의 팀들에게 **자율성**을 줬다. **각자 프로젝트에서 원하는 기술, 파이프라인 등등을 사용할 수 있게 해줬다.**
2. 그러나 이 **자율성은 독립성으로부터 나온다.** 수많은 팀들이 각자의 기술로 개발하게 되니 **팀간의 협업이 어려워 졌다.**
3. 그래서 모노레포가 등장한다. **모든 팀들이 하나의 레포에서 수많은 코드베이스를 공유할 수 있게 되었다.** 예를들어 각자의 lint를 적용했던 이전의 멀티레포에서 모두가 하나의 공유된 lint를 사용하게 된것이다.

이러한 배경으로 `monorepo`가 등장한다. 그러나 잘못 설계된 `monorepo`는 `monolith`와 다를바가 없다고 한다. 잘 정리된 `monorepo`는 정확히 `monolith`의 반대라고 한다.

처음 이 `monorepo`를 하기로 결정하고 구조 설계를 시작했다. 그렇게 대충 `gpt`를 참고하여 만든 `ver 1.0` 이다.

```text
/root
├── packages/
│   ├── core/
│   │   └── src/
│   │       ├── auth/
│   │       ├── api/
│   │       └── utils/
│   ├── ui-components/
│   │   └── src/
│   │       ├── Button/
│   │       ├── Widget/
│   │       └── Grid/
│   └── themes/
│       └── src/
│           ├── light-theme/
│           └── dark-theme/
├── apps/
│   └── web-app/
│       └── src/
│           ├── components/
│           ├── layouts/
│           └── pages/
├── node_modules/
└── package.json
```

이상했다... 뭔지 모르겠는데 뭔가 이건 아닌거 같은데.. 라고 생각했다. 그래서 다른 `monorepo`를 참고해야겠다고 생각했고 열심히 검색해서 레퍼런스를 찾았다.

[트리플 프론트엔드 모노레포 깃허브](https://github.com/titicacadev/triple-frontend/tree/main)

마음속의 거부감이 왜 생겼는지 알거 같았다. `monorepo`는 팀들간의 협업을 위해 탄생했다. 그러니 위와 같은 구조는 적합하지 않은거다. 위 구조는 내가 진행하려는 프로젝트를 잘게 쪼개서 정리한것에 불과하다. 그렇게 큰 규모의 프로젝트가 아닌 내 프로젝트가 끝나면 사용될 수 없는 `monorepo` 인것이다.

### Mindset

그래서 내 프로젝트를 위한 `monorepo`가 아니라 나를 위한 `monorepo`를 만들기로 했다. 지금 이 프로젝트를 진행하는 `나` 와 언젠가 다른 프로젝트를 진행할 `나`는 다른 팀이다. 그리고 이 두명의 `나`는 협업해야 한다.

그렇게 생각하니 제법 그럴싸한 구조가 그려지기 시작했다. 다음은 다시 설계한 `monorepo 2.0` 이다.

```text
/root
├── packages/
│   │
│   ├── config-eslint/
│   │   └── eslint 설정 파일들
│   │
│   ├── config-prettier/
│   │   └── prettier 설정 파일들
│   │
│   ├── config-vitest/
│   │   └── vitest 설정 파일들
│   │
│   ├── config-tailwind/
│   │   └── tailwind 설정 파일들
│   │
│   ├── config-storybook/
│   │   └── storybook 설정 파일들
│   │
│   ├── react-hooks/
│   │   └── 공용으로 사용 가능한 react hook들
│   │
│   ├── fetchers
│   │   └── 공용으로 사용 가능한 fetch wrapper, fetch util 관련 함수들
│   │
│   ├── constants
│   │   └── 공용으로 사용 가능한 상수, 정규표현식 등
│   │
│   ├── utils
│   │   └── 공용으로 사용 가능한 유틸리티 함수들
│   │
│   ├── framer-motions
│   │   └── 공용으로 사용 가능한 framer-motion 관련 코드들
│   │
├── apps/
│   └── dashboard/
│       └── src/
│           └── my first project
└── package.json
```

이로써 나는 다음 프로젝트를 진행한다 해도 `Next.js` 설정만 조금 수정해 주면 기존의 설정을 활용해 쉽게 진행할 수 있게 되었다. 추후 프로젝트를 진행할 또다른 나와 지금의 내가 쉽게 협업할 수 있게 된것이다!

## 느낀점

무턱대고 어떤 기술을 적용하는것이 아니라, 왜 필요한지 어떻게 활용할 수 있을지에 대해서 고민하는 시간을 가지는게 좋겠다는 생각을 했다. 결론적으론 좋은 방향으로 해결되어 다행이라고 생각한다...

최근 느끼는 점이 **개발 감수성**이 중요한거 같다. 최근 지어낸 단어다. 개발에서 만나는 작은 문제라도 크게 공감할수 있는 **개발 감수성**을 가질 수 있다면 문제를 그때그때 해결하고 더 나은 개발자가 될 수 있지 않을까? 하는 생각에서 떠올렸다.

앞으로 올릴 게시글은 주로 `monorepo`를 구축하고 거기서 첫 프로젝트를 진행하는 것에 관한 포스팅이 주가 될것 같다. 열심히 내 취업 무기를 만들어 봐야겠다!

---

아래 깃허브 주소에서 제가 진행중인 `monorepo` 구축 소스 코드를 확인할 수 있습니다!
[모노레포 주소](https://github.com/gihwan-dev/gihwan-dev-monorepo)

---

## 참고

[트리플 닷컴 모노레포](https://github.com/titicacadev/triple-frontend/tree/main)
[모노레포 개념 설명 사이트](https://monorepo.tools/)
