# create project!

1. Node.js설치

2. Vue.js 설치
```
npm install vue
```

3. Vue CLI 설치
Vue CLI는 Vue 프로젝트를 빠르게 구성하고, 빌드, 디플로이 할 수 있게 도와주는 도구이다. <br/>
CLI는 Command Line Interface의 약자로 터미널에 명령어를 입력하여 컴퓨터와 상호 작용하는 방식을 말한다. <br/>
-g 옵션을 통해 현재 프로젝트 node_module에 설치하는 것이 아닌 시스템 전역으로 설치(global 패키지로 등록)
```
npm install -g @vue/cli
```

4. Create Vue project
```
vue create {project name}
```

5. run server
```
npm run serve
```

6. exit
```
ctrl + c
```
<br/>

## etc

1. Router set
```
npm i vue-router@next

npm install vue-router
```

2. VSCode extensions list
```
vue 3 snippets
volar
HTML CSS Support
```

3. fix
```
1. npm run serve => error
2. 'vue-cli-service'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.
3. npm i
```
```
1. invalid host header => error
2. vue.config.js fix
3. const { defineConfig } = require('@vue/cli-service')
   module.exports = defineConfig({
     transpileDependencies: true,
     devServer:{
       allowedHosts:'all'
     }
   })
```
