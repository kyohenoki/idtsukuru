# idtsukuru

ランダムな文字列を生成する

```
bunx idtsukuru
```

### ライブラリとして使う

インストール

```
bun add idtsukuru
```

使い方

```typescript
import { tsukuru } from 'idtsukuru'

const id = tsukuru({
  mozi: 'osusume',
  nagasa: 10
})

console.log(id) // 7ubkm250mk
```

### やること

- [ ] `v0.2` を公開する

- [ ] ランダムな文字列に見た目の調節を加えるモードを追加する（パスワードには適さない）
