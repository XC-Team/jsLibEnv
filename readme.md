## jsLibEnv
>这是我以后写js轮子的环境, 由jest+eslint+prettier+rollup+webpack+jsdoc+codecov搭建的

### 工具选型

- 构建： webpack4 Rollup
- 测试工具： Jest
- 持续集成: Travis CI 
- API 文档生成工具： JSDoc
- 代码规范： eslint  prettier  lint-staged
- 项目版本控制工具： git

### 使用

#### 克隆 

```
git clone https://github.com/Zenquan/jsLibEnv.git
```

#### 启动或者构建

```
cd jsLibEnv  
yarn 
npm run dev      #启动热更新
or 
npm run build    #构建
or
npm run update   #更新
or
npm run codecov  #覆盖率测试
or
npm run docs     #生成文档
or
npm run lint     #eslint检查
```

### Todo

- []持续集成: Travis CI 

参考：

[开源库架构实战——从0到1搭建属于你自己的开源库](https://juejin.im/post/5b729909e51d45662434aef0)

