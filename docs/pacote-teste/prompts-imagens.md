# Guia de imagens — MM Modas

## Estilo definido

- **Formato:** flat lay (peça vista de cima, sem pessoa e sem manequim). Os kits (que misturam lavanda, pêssego e off-white) usam fundo cinza claro `#ece9f0`, para nenhuma cor sumir
- **Fundo:** liso, nas cores da marca. Roupa em tom quente (Pêssego, Laranja suave, Areia, Off-white) usa fundo **lavanda** `#e0d3f8`. Roupa em tom frio (Lavanda, Roxo claro, Lilás, Grafite, Azul, Jeans, Menta) usa fundo **pêssego** `#ffdcbd`. Isso evita a peça sumir no fundo.
- **Mascote:** camisetas, camisas e moletons levam o mascote pequeno no **peito direito de quem veste** (na foto, o lado **esquerdo** da imagem). Anexe `docs/mascote.svg` convertido em PNG como referência (veja abaixo).
- **Estilo das roupas:** casual jovem, modelagem solta, cores suaves
- **Proporção:** 4:5 vertical, mesmo tamanho em todas as fotos
- **Luz:** suave e difusa, sombra leve

## Frase de estilo (vai no fim de todo prompt)

```
product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

## Como usar

1. Gere a **primeira cor** de cada produto com o prompt abaixo.
2. Para as outras cores, anexe a primeira imagem e peça: *"Same garment, same pose, same framing. Change only the garment color to X and the background to Y."*
3. Comprima (squoosh.app) e salve em `public/produtos/` com o nome indicado.
4. **Mascote:** converta `docs/mascote.svg` em PNG (ex.: svgtopng.com), anexe na conversa junto com o prompt e confira se o desenho saiu igual. Se a IA deformar o rosto, gere a peça lisa e cole o mascote depois no Canva ou no Photopea.
5. Frases e estampas grandes: gere a peça lisa e coloque depois. A IA erra letras.

---

## camisetas

### Camiseta Sorriso Maroto
`camiseta-sorriso-maroto`

**Lavanda** → `camiseta-sorriso-maroto-lavanda.jpg`

```
a men's oversized-fit crew-neck cotton t-shirt, short sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in lavender color (#c8b3f0), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Pêssego** → `camiseta-sorriso-maroto-pessego.jpg`

```
a men's oversized-fit crew-neck cotton t-shirt, short sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in peach color (#ffc596), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Off-white** → `camiseta-sorriso-maroto-off-white.jpg`

```
a men's oversized-fit crew-neck cotton t-shirt, short sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in off-white cream color (#fbf6ee), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Camiseta Sem Pedir Licença
`camiseta-sem-pedir-licenca`

**Off-white** → `camiseta-sem-pedir-licenca-off-white.jpg`

```
a men's regular-fit crew-neck t-shirt with ribbed collar, short sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in off-white cream color (#fbf6ee), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Roxo claro** → `camiseta-sem-pedir-licenca-roxo-claro.jpg`

```
a men's regular-fit crew-neck t-shirt with ribbed collar, short sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in light purple color (#b7a0ea), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Regata Cachos ao Vento
`regata-cachos-ao-vento`

**Pêssego** → `regata-cachos-ao-vento-pessego.jpg`

```
a men's cotton tank top with wide armholes and straight fit, lightweight jersey, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in peach color (#ffc596), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Lavanda** → `regata-cachos-ao-vento-lavanda.jpg`

```
a men's cotton tank top with wide armholes and straight fit, lightweight jersey, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in lavender color (#c8b3f0), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Off-white** → `regata-cachos-ao-vento-off-white.jpg`

```
a men's cotton tank top with wide armholes and straight fit, lightweight jersey, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in off-white cream color (#fbf6ee), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Polo Menino Bom (Só na Aparência)
`polo-menino-bom`

**Lilás** → `polo-menino-bom-lilas.jpg`

```
a men's piqué cotton polo shirt with firm collar and two buttons, short sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in lilac color (#d3c1f5), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Areia** → `polo-menino-bom-areia.jpg`

```
a men's piqué cotton polo shirt with firm collar and two buttons, short sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in sand beige color (#e9d6bf), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


## camisas

### Camisa de Botão Vibe
`camisa-botao-vibe`

**Lavanda** → `camisa-botao-vibe-lavanda.jpg`

```
a men's relaxed-fit linen-blend button-up shirt with coconut-shell buttons, short sleeves, camp collar, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in lavender color (#c8b3f0), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Areia** → `camisa-botao-vibe-areia.jpg`

```
a men's relaxed-fit linen-blend button-up shirt with coconut-shell buttons, short sleeves, camp collar, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in sand beige color (#e9d6bf), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Camisa Social Maroto
`camisa-social-maroto`

**Azul céu** → `camisa-social-maroto-azul-ceu.jpg`

```
a men's long-sleeve dress shirt in wrinkle-free poplin, structured collar, two-button cuffs, buttoned up, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in sky blue color (#bcd3f2), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Off-white** → `camisa-social-maroto-off-white.jpg`

```
a men's long-sleeve dress shirt in wrinkle-free poplin, structured collar, two-button cuffs, buttoned up, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in off-white cream color (#fbf6ee), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Lilás** → `camisa-social-maroto-lilas.jpg`

```
a men's long-sleeve dress shirt in wrinkle-free poplin, structured collar, two-button cuffs, buttoned up, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in lilac color (#d3c1f5), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Camisa de Flanela Rolê Frio
`camisa-flanela-role-frio`

**Laranja suave** → `camisa-flanela-role-frio-laranja-suave.jpg`

```
a men's brushed flannel plaid shirt with two chest pockets, long sleeves, checkered pattern mixing the garment color with lilac, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in soft orange color (#ffb57d), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Roxo claro** → `camisa-flanela-role-frio-roxo-claro.jpg`

```
a men's brushed flannel plaid shirt with two chest pockets, long sleeves, checkered pattern mixing the garment color with lilac, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in light purple color (#b7a0ea), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


## moletons

### Moletom Sem Filtro
`moletom-sem-filtro`

**Roxo claro** → `moletom-sem-filtro-roxo-claro.jpg`

```
a men's pullover hoodie with lined hood, kangaroo pocket and ribbed cuffs, drawstrings, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in light purple color (#b7a0ea), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Laranja suave** → `moletom-sem-filtro-laranja-suave.jpg`

```
a men's pullover hoodie with lined hood, kangaroo pocket and ribbed cuffs, drawstrings, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in soft orange color (#ffb57d), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Moletom Careta
`moletom-careta`

**Pêssego** → `moletom-careta-pessego.jpg`

```
a heavyweight men's pullover hoodie with kangaroo pocket, small embroidered faces on the sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in peach color (#ffc596), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Off-white** → `moletom-careta-off-white.jpg`

```
a heavyweight men's pullover hoodie with kangaroo pocket, small embroidered faces on the sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in off-white cream color (#fbf6ee), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Suéter Tricô Aconchego
`sueter-trico-aconchego`

**Areia** → `sueter-trico-aconchego-areia.jpg`

```
a men's cotton knit sweater with crew neck and ribbed cuffs, chunky knit texture, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in sand beige color (#e9d6bf), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Lavanda** → `sueter-trico-aconchego-lavanda.jpg`

```
a men's cotton knit sweater with crew neck and ribbed cuffs, chunky knit texture, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the LEFT side of the image, about 6 cm wide, nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline, in lavender color (#c8b3f0), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


## jaquetas

### Jaqueta Corta-Vento Atitude
`jaqueta-corta-vento-atitude`

**Lilás** → `jaqueta-corta-vento-atitude-lilas.jpg`

```
a men's lightweight nylon windbreaker jacket with front zipper and mesh lining, water-repellent look, in lilac color (#d3c1f5), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Laranja suave** → `jaqueta-corta-vento-atitude-laranja-suave.jpg`

```
a men's lightweight nylon windbreaker jacket with front zipper and mesh lining, water-repellent look, in soft orange color (#ffb57d), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Jaqueta Jeans Cacheada
`jaqueta-jeans-cacheada`

**Jeans lavado** → `jaqueta-jeans-cacheada-jeans-lavado.jpg`

```
a men's light-wash denim jacket with metal buttons, classic trucker style, in light-wash denim blue color (#a9b8e0), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Lilás** → `jaqueta-jeans-cacheada-lilas.jpg`

```
a men's light-wash denim jacket with metal buttons, classic trucker style, in lilac color (#d3c1f5), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


## calcas-bermudas

### Calça Cargo Rolê
`calca-cargo-role`

**Areia** → `calca-cargo-role-areia.jpg`

```
men's twill cargo pants with real side pockets and drawstring hem, relaxed fit, in sand beige color (#e9d6bf), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Grafite lilás** → `calca-cargo-role-grafite-lilas.jpg`

```
men's twill cargo pants with real side pockets and drawstring hem, relaxed fit, in dark graphite purple color (#6e6190), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Calça Jogger Domingo
`calca-jogger-domingo`

**Grafite lilás** → `calca-jogger-domingo-grafite-lilas.jpg`

```
men's lightweight fleece jogger pants with ribbed ankle cuffs and drawstring waist, in dark graphite purple color (#6e6190), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Lavanda** → `calca-jogger-domingo-lavanda.jpg`

```
men's lightweight fleece jogger pants with ribbed ankle cuffs and drawstring waist, in lavender color (#c8b3f0), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Bermuda de Sarja Solta
`bermuda-sarja-solta`

**Areia** → `bermuda-sarja-solta-areia.jpg`

```
men's loose twill shorts just above the knee with a cuffed hem, in sand beige color (#e9d6bf), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Azul céu** → `bermuda-sarja-solta-azul-ceu.jpg`

```
men's loose twill shorts just above the knee with a cuffed hem, in sky blue color (#bcd3f2), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Shorts Moletom Preguiça
`shorts-moletom-preguica`

**Pêssego** → `shorts-moletom-preguica-pessego.jpg`

```
men's lightweight fleece sweat shorts with elastic waistband, drawstring and deep pockets, in peach color (#ffc596), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Lilás** → `shorts-moletom-preguica-lilas.jpg`

```
men's lightweight fleece sweat shorts with elastic waistband, drawstring and deep pockets, in lilac color (#d3c1f5), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


## underwear

### Kit 3 Cuecas Boxer Maroto
`kit-3-cuecas-boxer-maroto`

**Kit (Lavanda, Pêssego, Grafite lilás)** → `kit-3-cuecas-boxer-maroto.jpg`

```
a set of three men's cotton boxer briefs with wide waistband, folded neatly and fanned out side by side, each in a different color, colors: lavender, peach, dark graphite purple, on a light neutral gray background (#ece9f0). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Cueca Boxer Cacheada
`cueca-boxer-cacheada`

**Roxo claro** → `cueca-boxer-cacheada-roxo-claro.jpg`

```
a pair of men's microfiber boxer briefs with soft waistband, laid flat, in light purple color (#b7a0ea), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Azul céu** → `cueca-boxer-cacheada-azul-ceu.jpg`

```
a pair of men's microfiber boxer briefs with soft waistband, laid flat, in sky blue color (#bcd3f2), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Samba-Canção Bolinhas
`samba-cancao-bolinhas`

**Lilás** → `samba-cancao-bolinhas-lilas.jpg`

```
men's cotton poplin samba-canção boxer shorts with a polka-dot pattern, covered elastic waistband, front button, in lilac color (#d3c1f5), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Pêssego** → `samba-cancao-bolinhas-pessego.jpg`

```
men's cotton poplin samba-canção boxer shorts with a polka-dot pattern, covered elastic waistband, front button, in peach color (#ffc596), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Kit 3 Meias Sorriso
`kit-3-meias-sorriso`

**Kit (Pêssego, Lavanda, Off-white)** → `kit-3-meias-sorriso.jpg`

```
a set of three pairs of mid-calf cotton socks with stripes, laid flat side by side, each in a different color, colors: peach, lavender, off-white cream, on a light neutral gray background (#ece9f0). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


## training

### Camiseta Dry-Fit Treino Pesado
`camiseta-dry-fit-treino-pesado`

**Roxo claro** → `camiseta-dry-fit-treino-pesado-roxo-claro.jpg`

```
a men's technical dry-fit training t-shirt with mesh side panels, athletic fit, in light purple color (#b7a0ea), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Verde menta** → `camiseta-dry-fit-treino-pesado-verde-menta.jpg`

```
a men's technical dry-fit training t-shirt with mesh side panels, athletic fit, in mint green color (#bfe3cf), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Regata Treino Sem Desculpa
`regata-treino-sem-desculpa`

**Grafite lilás** → `regata-treino-sem-desculpa-grafite-lilas.jpg`

```
a men's athletic sleeveless training tank in lightweight polyamide with flat seams and extended hem, in dark graphite purple color (#6e6190), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Laranja suave** → `regata-treino-sem-desculpa-laranja-suave.jpg`

```
a men's athletic sleeveless training tank in lightweight polyamide with flat seams and extended hem, in soft orange color (#ffb57d), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Bermuda de Treino Leve
`bermuda-treino-leve`

**Grafite lilás** → `bermuda-treino-leve-grafite-lilas.jpg`

```
men's athletic training shorts with stretch fabric and a zippered phone pocket, in dark graphite purple color (#6e6190), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Azul céu** → `bermuda-treino-leve-azul-ceu.jpg`

```
men's athletic training shorts with stretch fabric and a zippered phone pocket, in sky blue color (#bcd3f2), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Calça Jogger Treino
`calca-jogger-treino`

**Roxo claro** → `calca-jogger-treino-roxo-claro.jpg`

```
men's lightweight athletic jogger pants with adjustable cuffs and zippered pockets, in light purple color (#b7a0ea), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Grafite lilás** → `calca-jogger-treino-grafite-lilas.jpg`

```
men's lightweight athletic jogger pants with adjustable cuffs and zippered pockets, in dark graphite purple color (#6e6190), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Meia Cano Alto Treino
`meia-cano-alto-treino`

**Off-white** → `meia-cano-alto-treino-off-white.jpg`

```
a pair of men's high-cut athletic crew socks with padded sole, laid flat, in off-white cream color (#fbf6ee), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Grafite lilás** → `meia-cano-alto-treino-grafite-lilas.jpg`

```
a pair of men's high-cut athletic crew socks with padded sole, laid flat, in dark graphite purple color (#6e6190), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


## acessorios

### Boné Menino Mau
`bone-menino-mau`

**Pêssego** → `bone-menino-mau-pessego.jpg`

```
a men's baseball cap with curved brim and adjustable strap, small embroidered mascot on the front, in peach color (#ffc596), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Lavanda** → `bone-menino-mau-lavanda.jpg`

```
a men's baseball cap with curved brim and adjustable strap, small embroidered mascot on the front, in lavender color (#c8b3f0), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Gorro Cacheado
`gorro-cacheado`

**Lavanda** → `gorro-cacheado-lavanda.jpg`

```
a ribbed knit beanie with a folded cuff and a pom-pom, in lavender color (#c8b3f0), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Laranja suave** → `gorro-cacheado-laranja-suave.jpg`

```
a ribbed knit beanie with a folded cuff and a pom-pom, in soft orange color (#ffb57d), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Grafite lilás** → `gorro-cacheado-grafite-lilas.jpg`

```
a ribbed knit beanie with a folded cuff and a pom-pom, in dark graphite purple color (#6e6190), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Bucket Hat Maroto
`bucket-hat-maroto`

**Pêssego** → `bucket-hat-maroto-pessego.jpg`

```
a cotton twill bucket hat with a short brim and stitched details, in peach color (#ffc596), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Lilás** → `bucket-hat-maroto-lilas.jpg`

```
a cotton twill bucket hat with a short brim and stitched details, in lilac color (#d3c1f5), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Pochete Rolê
`pochete-role`

**Roxo claro** → `pochete-role-roxo-claro.jpg`

```
a nylon fanny pack / waist bag with two zippered compartments and an adjustable strap, in light purple color (#b7a0ea), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Laranja suave** → `pochete-role-laranja-suave.jpg`

```
a nylon fanny pack / waist bag with two zippered compartments and an adjustable strap, in soft orange color (#ffb57d), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Mochila Campus
`mochila-campus`

**Lavanda** → `mochila-campus-lavanda.jpg`

```
a padded college backpack with front pocket and ergonomic straps, in lavender color (#c8b3f0), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Grafite lilás** → `mochila-campus-grafite-lilas.jpg`

```
a padded college backpack with front pocket and ergonomic straps, in dark graphite purple color (#6e6190), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Óculos de Sol Sem Filtro
`oculos-sol-sem-filtro`

**Laranja suave** → `oculos-sol-sem-filtro-laranja-suave.jpg`

```
a pair of sunglasses with colored acetate frame, front three-quarter view, in soft orange color (#ffb57d), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Lavanda** → `oculos-sol-sem-filtro-lavanda.jpg`

```
a pair of sunglasses with colored acetate frame, front three-quarter view, in lavender color (#c8b3f0), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```


### Carteira Slim MM
`carteira-slim-mm`

**Grafite lilás** → `carteira-slim-mm-grafite-lilas.jpg`

```
a slim men's faux-leather bifold wallet, closed, slightly open showing card slots, in dark graphite purple color (#6e6190), on a soft peach background (#ffdcbd). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

**Pêssego** → `carteira-slim-mm-pessego.jpg`

```
a slim men's faux-leather bifold wallet, closed, slightly open showing card slots, in peach color (#ffc596), on a soft lavender background (#e0d3f8). product photo, top-down flat lay, centered, garment neatly arranged with natural soft folds, plain seamless background, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, 4:5 vertical, no people, no mannequin, no text, no brand labels, no watermark
```

