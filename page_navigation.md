# vue의 여러 페이지 이동 방법을 알아보자!

1. 기본
```script
<a href="url ">이동</a>
```

```script
<a href=" {{url}}">이동</a>
```

```script
<a v-bind:href="url">이동</a>
```

```script
<a :href="url">이동</a>
```

2. 선언적 방식으로 네비게이션용 anchor 태그를 만드는 것
```script
<router-link tag="a" to="/">이동</router-link>
```

```script
<router-link tag="a" :to="url">이동</router-link>
```

3. 프로그래밍 방식으로 라우터의 인스턴스 메소드를 사용
```script
<button type="button" @click="pageLink">이동</button>

pageLink () {
   // object
   this.$router.push({ path: 'home' })
   // 이름을 가지는 라우트
   router.push({ name: 'user', params: { userId: 123 }})
   // 쿼리와 함께 사용, 결과는 /register?plan=private
   router.push({ path: 'register', query: { plan: 'private' }})
}
```

```
* router.go(n)
: 히스토리 스택에서 앞으로 또는 뒤로 이동하는 단계를 나타내는 하나의 정수를 매개 변수로 사용

// 한 단계 앞으로. history.forward()와 같다.
router.go(1)

// 한 단계 뒤로. history.back()와 같다.
router.go(-1)

// 3 단계 앞으로.
router.go(3)

// 지정한 만큼의 기록이 없으면 자동으로 실패.
router.go(-100)
router.go(100)
```