# idtsukuru

ランダムな文字列を生成する

```
bunx idtsukuru --m=o --n=10 --k=10
```

**`m`** 

使う文字 `=f` 16進数 `=o` 私が選んだ文字 `=a` アルファベットと数字

デフォルトは `=f`

**`n`** 

長さ、デフォルトは10

**`k`** 

回数、デフォルトは1

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