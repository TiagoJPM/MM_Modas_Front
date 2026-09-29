# Prompts de frente e costas na mesma imagem — MM Modas

## Como funciona

Cada prompt gera **uma imagem horizontal (8:5)** com a mesma peça duas vezes: **frente à esquerda, costas à direita**. Cada metade tem proporção 4:5, igual às fotos do site.

1. Anexe o `mascote-fundo-branco.png` nos produtos marcados com **Mascote**.
2. Cole o prompt do produto e da cor. Salve o resultado como `{nome}-dupla.jpg`.
3. Corte a imagem ao meio (script `docs/dividir-imagens.ps1`). Sai `{nome}.jpg` (frente) e `{nome}-costas.jpg` (costas).
4. Para as outras cores: anexe a imagem aprovada e peça só a troca de cor (veja o prompt de troca de cor no fim).

Com mascote, a frente leva o mascote **pequeno no peito direito de quem veste** (lado esquerdo da imagem) e as costas levam o mascote **grande e centralizado**, sempre em estampa opaca, de cores cheias.

---

### Camiseta Sorriso Maroto — Mascote

**Lavanda** → `camiseta-sorriso-maroto-lavanda-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a men's oversized-fit crew-neck cotton t-shirt, short sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in lavender color (#c8b3f0). LEFT (front): the front of the garment as described. RIGHT (back): the back of the t-shirt: ribbed crew neckline seen from behind, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 25 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Pêssego** → `camiseta-sorriso-maroto-pessego-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a men's oversized-fit crew-neck cotton t-shirt, short sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in peach color (#ffc596). LEFT (front): the front of the garment as described. RIGHT (back): the back of the t-shirt: ribbed crew neckline seen from behind, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 25 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Off-white** → `camiseta-sorriso-maroto-off-white-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a men's oversized-fit crew-neck cotton t-shirt, short sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in off-white cream color (#fbf6ee). LEFT (front): the front of the garment as described. RIGHT (back): the back of the t-shirt: ribbed crew neckline seen from behind, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 25 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Camiseta Sem Pedir Licença — Mascote

**Off-white** → `camiseta-sem-pedir-licenca-off-white-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a men's regular-fit crew-neck t-shirt with ribbed collar, short sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in off-white cream color (#fbf6ee). LEFT (front): the front of the garment as described. RIGHT (back): the back of the t-shirt: ribbed crew neckline seen from behind, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 25 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Roxo claro** → `camiseta-sem-pedir-licenca-roxo-claro-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a men's regular-fit crew-neck t-shirt with ribbed collar, short sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in light purple color (#b7a0ea). LEFT (front): the front of the garment as described. RIGHT (back): the back of the t-shirt: ribbed crew neckline seen from behind, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 25 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Regata Cachos ao Vento — Mascote

**Pêssego** → `regata-cachos-ao-vento-pessego-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a men's cotton tank top with wide armholes and straight fit, lightweight jersey, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in peach color (#ffc596). LEFT (front): the front of the garment as described. RIGHT (back): the back of the tank top: wide armholes, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 20 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Lavanda** → `regata-cachos-ao-vento-lavanda-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a men's cotton tank top with wide armholes and straight fit, lightweight jersey, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in lavender color (#c8b3f0). LEFT (front): the front of the garment as described. RIGHT (back): the back of the tank top: wide armholes, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 20 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Off-white** → `regata-cachos-ao-vento-off-white-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a men's cotton tank top with wide armholes and straight fit, lightweight jersey, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in off-white cream color (#fbf6ee). LEFT (front): the front of the garment as described. RIGHT (back): the back of the tank top: wide armholes, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 20 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Polo Menino Bom (Só na Aparência) — Mascote

**Lilás** → `polo-menino-bom-lilas-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a men's piqué cotton polo shirt with firm collar and two buttons, short sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in lilac color (#d3c1f5). LEFT (front): the front of the garment as described. RIGHT (back): the back of the polo: folded collar seen from behind, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 22 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Areia** → `polo-menino-bom-areia-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a men's piqué cotton polo shirt with firm collar and two buttons, short sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in sand beige color (#e9d6bf). LEFT (front): the front of the garment as described. RIGHT (back): the back of the polo: folded collar seen from behind, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 22 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Camisa de Botão Vibe — Mascote

**Lavanda** → `camisa-botao-vibe-lavanda-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a men's relaxed-fit linen-blend button-up shirt with coconut-shell buttons, short sleeves, camp collar, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in lavender color (#c8b3f0). LEFT (front): the front of the garment as described. RIGHT (back): the back of the shirt: yoke seam across the shoulders, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 22 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Areia** → `camisa-botao-vibe-areia-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a men's relaxed-fit linen-blend button-up shirt with coconut-shell buttons, short sleeves, camp collar, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in sand beige color (#e9d6bf). LEFT (front): the front of the garment as described. RIGHT (back): the back of the shirt: yoke seam across the shoulders, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 22 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Camisa Social Maroto — Mascote

**Azul céu** → `camisa-social-maroto-azul-ceu-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a men's long-sleeve dress shirt in wrinkle-free poplin, structured collar, two-button cuffs, buttoned up, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in sky blue color (#bcd3f2). LEFT (front): the front of the garment as described. RIGHT (back): the back of the dress shirt: structured collar seen from behind, long sleeves, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 20 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Off-white** → `camisa-social-maroto-off-white-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a men's long-sleeve dress shirt in wrinkle-free poplin, structured collar, two-button cuffs, buttoned up, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in off-white cream color (#fbf6ee). LEFT (front): the front of the garment as described. RIGHT (back): the back of the dress shirt: structured collar seen from behind, long sleeves, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 20 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Lilás** → `camisa-social-maroto-lilas-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a men's long-sleeve dress shirt in wrinkle-free poplin, structured collar, two-button cuffs, buttoned up, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in lilac color (#d3c1f5). LEFT (front): the front of the garment as described. RIGHT (back): the back of the dress shirt: structured collar seen from behind, long sleeves, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 20 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Camisa de Flanela Rolê Frio — Mascote

**Laranja suave** → `camisa-flanela-role-frio-laranja-suave-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a men's brushed flannel plaid shirt with two chest pockets, long sleeves, checkered pattern mixing the garment color with lilac, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in soft orange color (#ffb57d). LEFT (front): the front of the garment as described. RIGHT (back): the back of the flannel shirt: continuous plaid pattern matching the front, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 22 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Roxo claro** → `camisa-flanela-role-frio-roxo-claro-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a men's brushed flannel plaid shirt with two chest pockets, long sleeves, checkered pattern mixing the garment color with lilac, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in light purple color (#b7a0ea). LEFT (front): the front of the garment as described. RIGHT (back): the back of the flannel shirt: continuous plaid pattern matching the front, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 22 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Moletom Sem Filtro — Mascote

**Roxo claro** → `moletom-sem-filtro-roxo-claro-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a men's pullover hoodie with lined hood, kangaroo pocket and ribbed cuffs, drawstrings, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in light purple color (#b7a0ea). LEFT (front): the front of the garment as described. RIGHT (back): the back of the hoodie: hood lying flat down the back, no kangaroo pocket, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 28 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed placed just below the hood. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Laranja suave** → `moletom-sem-filtro-laranja-suave-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a men's pullover hoodie with lined hood, kangaroo pocket and ribbed cuffs, drawstrings, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in soft orange color (#ffb57d). LEFT (front): the front of the garment as described. RIGHT (back): the back of the hoodie: hood lying flat down the back, no kangaroo pocket, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 28 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed placed just below the hood. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Moletom Careta — Mascote

**Pêssego** → `moletom-careta-pessego-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a heavyweight men's pullover hoodie with kangaroo pocket, small embroidered faces on the sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in peach color (#ffc596). LEFT (front): the front of the garment as described. RIGHT (back): the back of the hoodie: hood lying flat down the back, sleeves with the small embroidered faces still visible, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 28 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed placed just below the hood. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Off-white** → `moletom-careta-off-white-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a heavyweight men's pullover hoodie with kangaroo pocket, small embroidered faces on the sleeves, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in off-white cream color (#fbf6ee). LEFT (front): the front of the garment as described. RIGHT (back): the back of the hoodie: hood lying flat down the back, sleeves with the small embroidered faces still visible, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 28 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed placed just below the hood. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Suéter Tricô Aconchego — Mascote

**Areia** → `sueter-trico-aconchego-areia-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a men's cotton knit sweater with crew neck and ribbed cuffs, chunky knit texture, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in sand beige color (#e9d6bf). LEFT (front): the front of the garment as described. RIGHT (back): the back of the knit sweater: ribbed cuffs and hem, crew neck seen from behind, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 24 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed, as a knitted jacquard motif. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Lavanda** → `sueter-trico-aconchego-lavanda-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a men's cotton knit sweater with crew neck and ribbed cuffs, chunky knit texture, with one small cartoon mascot logo (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached reference image exactly) on the wearer's right chest, which is the left side of the garment as the viewer sees it, about 6 cm wide, nothing else printed, in lavender color (#c8b3f0). LEFT (front): the front of the garment as described. RIGHT (back): the back of the knit sweater: ribbed cuffs and hem, crew neck seen from behind, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 24 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed, as a knitted jacquard motif. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Jaqueta Corta-Vento Atitude

**Lilás** → `jaqueta-corta-vento-atitude-lilas-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a men's lightweight nylon windbreaker jacket with front zipper and mesh lining, water-repellent look, in lilac color (#d3c1f5). LEFT (front): the front of the garment as described. RIGHT (back): the back of the windbreaker: plain back, collar seen from behind, no logo. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Laranja suave** → `jaqueta-corta-vento-atitude-laranja-suave-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a men's lightweight nylon windbreaker jacket with front zipper and mesh lining, water-repellent look, in soft orange color (#ffb57d). LEFT (front): the front of the garment as described. RIGHT (back): the back of the windbreaker: plain back, collar seen from behind, no logo. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Jaqueta Jeans Cacheada — Mascote

**Jeans lavado** → `jaqueta-jeans-cacheada-jeans-lavado-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a men's light-wash denim jacket with metal buttons, classic trucker style, in light-wash denim blue color (#a9b8e0). LEFT (front): the front of the garment as described. RIGHT (back): the back of the denim jacket: yoke seams and waist tabs, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 25 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed as a large embroidered patch stitched onto the denim, following the denim texture and folds. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Lilás** → `jaqueta-jeans-cacheada-lilas-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a men's light-wash denim jacket with metal buttons, classic trucker style, in lilac color (#d3c1f5). LEFT (front): the front of the garment as described. RIGHT (back): the back of the denim jacket: yoke seams and waist tabs, with one LARGE cartoon mascot logo centered on the upper back, horizontally centered between the shoulder blades, about 25 cm wide (flat cartoon face with lavender curly hair, thick dark navy outline, arched mischievous eyebrows and a big toothy grin; copy the attached mascot reference image exactly), nothing else printed as a large embroidered patch stitched onto the denim, following the denim texture and folds. The logo must look like a fresh, high-quality, fully opaque screen print on the fabric: rich, saturated, full-strength colors (solid lavender hair, solid dark navy #2c1f4a outlines, pure white teeth and eyes, warm peach skin), high contrast against the garment, NOT faded, NOT washed out, NOT translucent, NOT vintage or distressed, no cracked ink. Only a very subtle fine fabric grain may show on the print. The print follows the folds and curves of the garment and receives the same soft light and shadows as the fabric around it, matte finish, no sticker look, no glossy outline. Apply this same print quality to both logos. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Calça Cargo Rolê

**Areia** → `calca-cargo-role-areia-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: men's twill cargo pants with real side pockets and drawstring hem, relaxed fit, in sand beige color (#e9d6bf). LEFT (front): the front of the garment as described. RIGHT (back): the back of the cargo pants: two back patch pockets, belt loops, side cargo pockets slightly visible. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Grafite lilás** → `calca-cargo-role-grafite-lilas-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: men's twill cargo pants with real side pockets and drawstring hem, relaxed fit, in dark graphite purple color (#6e6190). LEFT (front): the front of the garment as described. RIGHT (back): the back of the cargo pants: two back patch pockets, belt loops, side cargo pockets slightly visible. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Calça Jogger Domingo

**Grafite lilás** → `calca-jogger-domingo-grafite-lilas-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: men's lightweight fleece jogger pants with ribbed ankle cuffs and drawstring waist, in dark graphite purple color (#6e6190). LEFT (front): the front of the garment as described. RIGHT (back): the back of the jogger pants: elastic waistband, ribbed ankle cuffs, plain back, no pockets. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Lavanda** → `calca-jogger-domingo-lavanda-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: men's lightweight fleece jogger pants with ribbed ankle cuffs and drawstring waist, in lavender color (#c8b3f0). LEFT (front): the front of the garment as described. RIGHT (back): the back of the jogger pants: elastic waistband, ribbed ankle cuffs, plain back, no pockets. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Bermuda de Sarja Solta

**Areia** → `bermuda-sarja-solta-areia-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: men's loose twill shorts just above the knee with a cuffed hem, in sand beige color (#e9d6bf). LEFT (front): the front of the garment as described. RIGHT (back): the back of the shorts: two back pockets, belt loops, cuffed hem. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Azul céu** → `bermuda-sarja-solta-azul-ceu-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: men's loose twill shorts just above the knee with a cuffed hem, in sky blue color (#bcd3f2). LEFT (front): the front of the garment as described. RIGHT (back): the back of the shorts: two back pockets, belt loops, cuffed hem. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Shorts Moletom Preguiça

**Pêssego** → `shorts-moletom-preguica-pessego-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: men's lightweight fleece sweat shorts with elastic waistband, drawstring and deep pockets, in peach color (#ffc596). LEFT (front): the front of the garment as described. RIGHT (back): the back of the sweat shorts: elastic waistband, plain back, drawstring only visible at the front. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Lilás** → `shorts-moletom-preguica-lilas-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: men's lightweight fleece sweat shorts with elastic waistband, drawstring and deep pockets, in lilac color (#d3c1f5). LEFT (front): the front of the garment as described. RIGHT (back): the back of the sweat shorts: elastic waistband, plain back, drawstring only visible at the front. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Kit 3 Cuecas Boxer Maroto

**Kit** → `kit-3-cuecas-boxer-maroto-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same light neutral gray seamless background (#ece9f0), with no visible divider. The garment: a set of three men's cotton boxer briefs with wide waistband, folded neatly and fanned out side by side, each in a different color, in these colors: lavender, peach, dark graphite purple. LEFT (front): the front of the garment as described. RIGHT (back): the back of the three boxer briefs, laid out the same way as the front photo, showing the back seam and waistband. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Cueca Boxer Cacheada

**Roxo claro** → `cueca-boxer-cacheada-roxo-claro-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a pair of men's microfiber boxer briefs with soft waistband, laid flat, in light purple color (#b7a0ea). LEFT (front): the front of the garment as described. RIGHT (back): the back of the boxer briefs: plain back, waistband, flatlock seams. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Azul céu** → `cueca-boxer-cacheada-azul-ceu-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a pair of men's microfiber boxer briefs with soft waistband, laid flat, in sky blue color (#bcd3f2). LEFT (front): the front of the garment as described. RIGHT (back): the back of the boxer briefs: plain back, waistband, flatlock seams. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Samba-Canção Bolinhas

**Lilás** → `samba-cancao-bolinhas-lilas-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: men's cotton poplin samba-canção boxer shorts with a polka-dot pattern, covered elastic waistband, front button, in lilac color (#d3c1f5). LEFT (front): the front of the garment as described. RIGHT (back): the back of the boxer shorts: polka-dot pattern continuing, covered elastic waistband, no button. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Pêssego** → `samba-cancao-bolinhas-pessego-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: men's cotton poplin samba-canção boxer shorts with a polka-dot pattern, covered elastic waistband, front button, in peach color (#ffc596). LEFT (front): the front of the garment as described. RIGHT (back): the back of the boxer shorts: polka-dot pattern continuing, covered elastic waistband, no button. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Kit 3 Meias Sorriso

**Kit** → `kit-3-meias-sorriso-dupla.jpg`

```
a set of three pairs of mid-calf cotton socks with stripes, laid flat side by side, each in a different color, in these colors: peach, lavender, off-white cream, on a light neutral gray background (#ece9f0). Product photo, top-down flat lay, centered, 4:5 vertical, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark. (Esta peça não tem versão de costas: gere só a frente.)
```


### Camiseta Dry-Fit Treino Pesado

**Roxo claro** → `camiseta-dry-fit-treino-pesado-roxo-claro-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a men's technical dry-fit training t-shirt with mesh side panels, athletic fit, in light purple color (#b7a0ea). LEFT (front): the front of the garment as described. RIGHT (back): the back of the dry-fit t-shirt: plain back with mesh side panels, no logo. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Verde menta** → `camiseta-dry-fit-treino-pesado-verde-menta-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a men's technical dry-fit training t-shirt with mesh side panels, athletic fit, in mint green color (#bfe3cf). LEFT (front): the front of the garment as described. RIGHT (back): the back of the dry-fit t-shirt: plain back with mesh side panels, no logo. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Regata Treino Sem Desculpa

**Grafite lilás** → `regata-treino-sem-desculpa-grafite-lilas-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a men's athletic sleeveless training tank in lightweight polyamide with flat seams and extended hem, in dark graphite purple color (#6e6190). LEFT (front): the front of the garment as described. RIGHT (back): the back of the athletic tank: racer-style back with flat seams, extended hem. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Laranja suave** → `regata-treino-sem-desculpa-laranja-suave-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a men's athletic sleeveless training tank in lightweight polyamide with flat seams and extended hem, in soft orange color (#ffb57d). LEFT (front): the front of the garment as described. RIGHT (back): the back of the athletic tank: racer-style back with flat seams, extended hem. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Bermuda de Treino Leve

**Grafite lilás** → `bermuda-treino-leve-grafite-lilas-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: men's athletic training shorts with stretch fabric and a zippered phone pocket, in dark graphite purple color (#6e6190). LEFT (front): the front of the garment as described. RIGHT (back): the back of the training shorts: elastic waistband, plain back, small back pocket. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Azul céu** → `bermuda-treino-leve-azul-ceu-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: men's athletic training shorts with stretch fabric and a zippered phone pocket, in sky blue color (#bcd3f2). LEFT (front): the front of the garment as described. RIGHT (back): the back of the training shorts: elastic waistband, plain back, small back pocket. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Calça Jogger Treino

**Roxo claro** → `calca-jogger-treino-roxo-claro-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: men's lightweight athletic jogger pants with adjustable cuffs and zippered pockets, in light purple color (#b7a0ea). LEFT (front): the front of the garment as described. RIGHT (back): the back of the athletic jogger pants: elastic waistband, adjustable cuffs, one small zippered back pocket. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Grafite lilás** → `calca-jogger-treino-grafite-lilas-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: men's lightweight athletic jogger pants with adjustable cuffs and zippered pockets, in dark graphite purple color (#6e6190). LEFT (front): the front of the garment as described. RIGHT (back): the back of the athletic jogger pants: elastic waistband, adjustable cuffs, one small zippered back pocket. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Meia Cano Alto Treino

**Off-white** → `meia-cano-alto-treino-off-white-dupla.jpg`

```
a pair of men's high-cut athletic crew socks with padded sole, laid flat, in off-white cream color (#fbf6ee), on a soft lavender background (#e0d3f8). Product photo, top-down flat lay, centered, 4:5 vertical, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark. (Esta peça não tem versão de costas: gere só a frente.)
```

**Grafite lilás** → `meia-cano-alto-treino-grafite-lilas-dupla.jpg`

```
a pair of men's high-cut athletic crew socks with padded sole, laid flat, in dark graphite purple color (#6e6190), on a soft peach background (#ffdcbd). Product photo, top-down flat lay, centered, 4:5 vertical, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark. (Esta peça não tem versão de costas: gere só a frente.)
```


### Boné Menino Mau

**Pêssego** → `bone-menino-mau-pessego-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a men's baseball cap with curved brim and adjustable strap, small embroidered mascot on the front, in peach color (#ffc596). LEFT (front): the front of the garment as described. RIGHT (back): the back of the cap: adjustable strap closure, stitched panels, eyelet, no embroidery on the back. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Lavanda** → `bone-menino-mau-lavanda-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a men's baseball cap with curved brim and adjustable strap, small embroidered mascot on the front, in lavender color (#c8b3f0). LEFT (front): the front of the garment as described. RIGHT (back): the back of the cap: adjustable strap closure, stitched panels, eyelet, no embroidery on the back. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Gorro Cacheado

**Lavanda** → `gorro-cacheado-lavanda-dupla.jpg`

```
a ribbed knit beanie with a folded cuff and a pom-pom, in lavender color (#c8b3f0), on a soft peach background (#ffdcbd). Product photo, top-down flat lay, centered, 4:5 vertical, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark. (Esta peça não tem versão de costas: gere só a frente.)
```

**Laranja suave** → `gorro-cacheado-laranja-suave-dupla.jpg`

```
a ribbed knit beanie with a folded cuff and a pom-pom, in soft orange color (#ffb57d), on a soft lavender background (#e0d3f8). Product photo, top-down flat lay, centered, 4:5 vertical, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark. (Esta peça não tem versão de costas: gere só a frente.)
```

**Grafite lilás** → `gorro-cacheado-grafite-lilas-dupla.jpg`

```
a ribbed knit beanie with a folded cuff and a pom-pom, in dark graphite purple color (#6e6190), on a soft peach background (#ffdcbd). Product photo, top-down flat lay, centered, 4:5 vertical, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark. (Esta peça não tem versão de costas: gere só a frente.)
```


### Bucket Hat Maroto

**Pêssego** → `bucket-hat-maroto-pessego-dupla.jpg`

```
a cotton twill bucket hat with a short brim and stitched details, in peach color (#ffc596), on a soft lavender background (#e0d3f8). Product photo, top-down flat lay, centered, 4:5 vertical, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark. (Esta peça não tem versão de costas: gere só a frente.)
```

**Lilás** → `bucket-hat-maroto-lilas-dupla.jpg`

```
a cotton twill bucket hat with a short brim and stitched details, in lilac color (#d3c1f5), on a soft peach background (#ffdcbd). Product photo, top-down flat lay, centered, 4:5 vertical, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark. (Esta peça não tem versão de costas: gere só a frente.)
```


### Pochete Rolê

**Roxo claro** → `pochete-role-roxo-claro-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a nylon fanny pack / waist bag with two zippered compartments and an adjustable strap, in light purple color (#b7a0ea). LEFT (front): the front of the garment as described. RIGHT (back): the back of the fan pack: back panel that sits against the body, the adjustable strap with buckle. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Laranja suave** → `pochete-role-laranja-suave-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a nylon fanny pack / waist bag with two zippered compartments and an adjustable strap, in soft orange color (#ffb57d). LEFT (front): the front of the garment as described. RIGHT (back): the back of the fan pack: back panel that sits against the body, the adjustable strap with buckle. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Mochila Campus

**Lavanda** → `mochila-campus-lavanda-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a padded college backpack with front pocket and ergonomic straps, in lavender color (#c8b3f0). LEFT (front): the front of the garment as described. RIGHT (back): the back of the backpack: padded back panel, two ergonomic shoulder straps, top carry handle. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Grafite lilás** → `mochila-campus-grafite-lilas-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a padded college backpack with front pocket and ergonomic straps, in dark graphite purple color (#6e6190). LEFT (front): the front of the garment as described. RIGHT (back): the back of the backpack: padded back panel, two ergonomic shoulder straps, top carry handle. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```


### Óculos de Sol Sem Filtro

**Laranja suave** → `oculos-sol-sem-filtro-laranja-suave-dupla.jpg`

```
a pair of sunglasses with colored acetate frame, front three-quarter view, in soft orange color (#ffb57d), on a soft lavender background (#e0d3f8). Product photo, top-down flat lay, centered, 4:5 vertical, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark. (Esta peça não tem versão de costas: gere só a frente.)
```

**Lavanda** → `oculos-sol-sem-filtro-lavanda-dupla.jpg`

```
a pair of sunglasses with colored acetate frame, front three-quarter view, in lavender color (#c8b3f0), on a soft peach background (#ffdcbd). Product photo, top-down flat lay, centered, 4:5 vertical, soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark. (Esta peça não tem versão de costas: gere só a frente.)
```


### Carteira Slim MM

**Grafite lilás** → `carteira-slim-mm-grafite-lilas-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft peach seamless background (#ffdcbd), with no visible divider. The garment: a slim men's faux-leather bifold wallet, closed, slightly open showing card slots, in dark graphite purple color (#6e6190). LEFT (front): the front of the garment as described. RIGHT (back): the back of the wallet: plain back, stitched edge, closed. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

**Pêssego** → `carteira-slim-mm-pessego-dupla.jpg`

```
Create ONE horizontal image (8:5 ratio) with two product photos side by side of the exact same garment: LEFT half = FRONT view, RIGHT half = BACK view. Both are top-down flat lays, same size, same scale, same alignment, same lighting, each half a 4:5 vertical frame, on the same soft lavender seamless background (#e0d3f8), with no visible divider. The garment: a slim men's faux-leather bifold wallet, closed, slightly open showing card slots, in peach color (#ffc596). LEFT (front): the front of the garment as described. RIGHT (back): the back of the wallet: plain back, stitched edge, closed. Soft diffused studio lighting, gentle natural shadow, sharp fabric texture, clean e-commerce look, no people, no mannequin, no text, no brand labels, no watermark.
```

---

## Prompt de troca de cor (para as outras cores)

Anexe a imagem dupla aprovada e mande:

```
Same image, same layout, same garment, same pose, same background, same lighting, same logos in the same positions and sizes. Change ONLY the garment color to COR (HEX). Keep both logos fully opaque, vivid and unchanged. Front on the left, back on the right, 8:5 ratio.
```
