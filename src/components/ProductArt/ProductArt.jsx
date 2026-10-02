// =========================================================
// ProductArt — ilustração SVG de cada peça do catálogo
// ---------------------------------------------------------
// Enquanto o grupo não tem fotos reais, cada produto é desenhado
// em SVG. O "type" do produto escolhe o desenho e "color" pinta a peça.
// Para usar fotos, basta trocar <ProductArt /> por <img />.
// =========================================================
import './ProductArt.css'

// Cor do contorno (mesmo roxo escuro do texto do site)
const INK = '#2c1f4a'

// Partes reaproveitadas por mais de um desenho
const TEE_BODY =
  'M72 38 L50 46 L24 70 L44 94 L60 84 L60 168 L140 168 L140 84 L156 94 L176 70 L150 46 L128 38 Q100 62 72 38 Z'
const LONG_SHIRT =
  'M74 36 L50 44 L30 70 L22 150 L42 154 L58 96 L60 170 L140 170 L142 96 L158 154 L178 150 L170 70 L150 44 L126 36 L100 50 Z'
const LONG_BODY =
  'M66 50 L42 60 L26 152 L46 156 L60 96 L60 172 L140 172 L140 96 L154 156 L174 152 L158 60 L134 50 Z'
const SHORTS = 'M54 52 L146 52 L158 134 L110 140 L100 96 L90 140 L42 134 Z'

// Cada chave é um "type" de produto; a função recebe a cor (c) e devolve o desenho
const shapes = {
  // Camiseta básica com "MM" no peito
  tee: (c) => (
     <>
      <path d={TEE_BODY} fill={c} />
      <path d="M78 40 Q100 56 122 40" fill="none" />
      <text x="100" y="122" textAnchor="middle" className="art-print">MM</text>
    </>
  ),

  // Camiseta de treino: painéis laterais em tela (tracejado)
  dryfit: (c) => (
    <>
      <path d={TEE_BODY} fill={c} />
      <path d="M78 40 Q100 56 122 40" fill="none" />
      <path d="M74 88 L74 166 M126 88 L126 166" fill="none" strokeDasharray="3 5" />
      <path d="M84 112 L100 102 L116 112" fill="none" strokeWidth="5" />
    </>
  ),

  // Regata: sem mangas, cavas curvas
  tank: (c) => (
    <>
      <path
        d="M76 28 L90 28 Q100 56 110 28 L124 28 Q126 62 146 74 L146 170 L54 170 L54 74 Q74 62 76 28 Z"
        fill={c}
      />
      <text x="100" y="130" textAnchor="middle" className="art-print art-print--sm">MM</text>
    </>
  ),

  // Polo: camiseta + gola com pontas + carcela com botões
  polo: (c) => (
    <>
      <path d={TEE_BODY} fill={c} />
      <path d="M74 40 L90 68 L100 52 Z M126 40 L110 68 L100 52 Z" fill={c} />
      <path d="M100 52 L100 88" fill="none" />
      <g fill={INK} stroke="none">
        <circle cx="105" cy="66" r="2.6" />
        <circle cx="105" cy="80" r="2.6" />
      </g>
    </>
  ),

  // Camisa de botão casual (manga longa, bolso)
  shirt: (c) => (
    <>
      <path d={LONG_SHIRT} fill={c} />
      <path d="M74 36 L86 64 L100 50 L114 64 L126 36" fill={c} />
      <path d="M100 50 L100 170" fill="none" />
      <g fill={INK} stroke="none">
        <circle cx="106" cy="82" r="3" />
        <circle cx="106" cy="108" r="3" />
        <circle cx="106" cy="134" r="3" />
      </g>
      <path d="M118 88 L134 88 L134 104 L118 104 Z" fill="none" />
    </>
  ),

  // Camisa social: colarinho alto, punhos e mais botões
  dressshirt: (c) => (
    <>
      <path d={LONG_SHIRT} fill={c} />
      <path d="M78 34 L84 70 L100 50 L116 70 L122 34 L100 46 Z" fill="#fff" />
      <path d="M100 50 L100 170" fill="none" />
      <g fill={INK} stroke="none">
        <circle cx="105" cy="76" r="2.4" />
        <circle cx="105" cy="96" r="2.4" />
        <circle cx="105" cy="116" r="2.4" />
        <circle cx="105" cy="136" r="2.4" />
        <circle cx="105" cy="156" r="2.4" />
      </g>
      <path d="M24 138 L44 142 M176 138 L156 142" fill="none" />
    </>
  ),

  // Camisa de flanela: camisa + linhas de xadrez
  flannel: (c) => (
    <>
      <path d={LONG_SHIRT} fill={c} />
      <g fill="none" strokeWidth="2" opacity="0.45">
        <path d="M60 100 L140 100 M60 130 L140 130 M60 158 L140 158" />
        <path d="M78 60 L78 170 M122 60 L122 170" />
        <path d="M34 110 L52 112 M166 110 L148 112" />
      </g>
      <path d="M74 36 L86 64 L100 50 L114 64 L126 36" fill={c} />
      <path d="M100 50 L100 170" fill="none" />
      <path d="M68 84 L88 84 L88 102 L68 102 Z M112 84 L132 84 L132 102 L112 102 Z" fill="none" />
    </>
  ),

  // Moletom com capuz e bolso canguru
  hoodie: (c) => (
    <>
      <path d={LONG_BODY} fill={c} />
      <path d="M68 52 Q70 18 100 18 Q130 18 132 52 Q100 76 68 52 Z" fill={c} />
      <path d="M82 50 Q100 64 118 50" fill="none" />
      <path d="M92 60 L90 88 M108 60 L110 88" fill="none" />
      <path d="M72 130 L128 130 L134 160 L66 160 Z" fill="none" />
    </>
  ),

  // Suéter de tricô: gola careca e barra canelada
  sweater: (c) => (
    <>
      <path d={LONG_BODY} fill={c} />
      <path d="M80 50 Q100 70 120 50" fill="none" />
      <path d="M84 50 Q100 62 116 50" fill="none" strokeWidth="2" />
      <g fill="none" strokeWidth="2">
        <path d="M60 160 L140 160" />
        <path d="M72 160 L72 172 M86 160 L86 172 M100 160 L100 172 M114 160 L114 172 M128 160 L128 172" />
        <path d="M84 96 Q100 108 116 96 M84 116 Q100 128 116 116" opacity="0.5" />
      </g>
    </>
  ),

  // Jaqueta com gola, zíper e bolsos
  jacket: (c) => (
    <>
      <path
        d="M68 40 L44 50 L26 152 L46 156 L60 96 L60 172 L140 172 L140 96 L154 156 L174 152 L156 50 L132 40 Z"
        fill={c}
      />
      <path d="M68 40 L88 72 L100 44 L112 72 L132 40 L118 34 L100 44 L82 34 Z" fill={c} />
      <path d="M100 44 L100 172" fill="none" strokeDasharray="4 4" />
      <path d="M70 110 L90 110 M110 110 L130 110" fill="none" />
      <path d="M60 162 L140 162" fill="none" />
    </>
  ),

  // Calça cargo com bolsos laterais
  pants: (c) => (
    <>
      <path d="M62 28 L138 28 L148 176 L112 176 L100 82 L88 176 L52 176 Z" fill={c} />
      <path d="M62 42 L138 42" fill="none" />
      <path d="M100 42 L100 82" fill="none" />
      <path d="M58 110 L78 110 L78 136 L56 136 M142 110 L122 110 L122 136 L144 136" fill="none" />
    </>
  ),

  // Jogger: calça afunilada com punho na barra e cordão
  jogger: (c) => (
    <>
      <path d="M62 28 L138 28 L144 160 L112 162 L100 82 L88 162 L56 160 Z" fill={c} />
      <path d="M56 160 L88 162 L88 176 L57 174 Z M144 160 L112 162 L112 176 L143 174 Z" fill={c} />
      <path d="M62 42 L138 42" fill="none" />
      <path d="M94 42 Q92 56 88 60 M106 42 Q108 56 112 60" fill="none" />
    </>
  ),

  // Bermuda / shorts
  shorts: (c) => (
    <>
      <path d={SHORTS} fill={c} />
      <path d="M54 66 L146 66" fill="none" />
      <path d="M94 66 Q92 80 88 84 M106 66 Q108 80 112 84" fill="none" />
    </>
  ),

  // Cueca boxer: cós escuro com "MM" em branco
  boxer: (c) => (
    <>
      <path d="M50 60 L150 60 L154 132 L112 142 L100 112 L88 142 L46 132 Z" fill={c} />
      <path d="M50 60 L150 60 L150 80 L50 80 Z" fill={INK} />
      <text x="100" y="76" textAnchor="middle" className="art-band">MM · MM · MM</text>
      <path d="M100 80 L100 112" fill="none" strokeWidth="2" />
    </>
  ),

  // Samba-canção: mais larga, com bolinhas e botão
  samba: (c) => (
    <>
      <path d="M50 56 L150 56 L162 142 L110 146 L100 104 L90 146 L38 142 Z" fill={c} />
      <path d="M50 56 L150 56 L150 70 L50 70 Z" fill="#fff" />
      <g fill="#fff" stroke="none">
        <circle cx="70" cy="92" r="5" />
        <circle cx="130" cy="92" r="5" />
        <circle cx="60" cy="122" r="5" />
        <circle cx="140" cy="122" r="5" />
        <circle cx="82" cy="126" r="5" />
        <circle cx="118" cy="126" r="5" />
      </g>
      <circle cx="100" cy="84" r="3" fill={INK} stroke="none" />
    </>
  ),

  // Meia com listras no cano
  socks: (c) => (
    <>
      <path
        d="M72 26 L108 26 L108 118 Q108 140 132 142 L150 142 Q170 144 170 162 Q170 180 150 180 L108 180 Q72 180 72 140 Z"
        fill={c}
      />
      <path d="M72 44 L108 44" fill="none" />
      <path d="M72 58 L108 58 L108 70 L72 70 Z" fill={INK} />
      <path d="M72 80 L108 80" fill="none" strokeWidth="2" />
      <path d="M150 142 Q146 162 152 180" fill="none" strokeWidth="2" />
    </>
  ),

  // Boné com mascote bordado
  cap: (c) => (
    <>
      <path d="M46 124 Q44 58 100 56 Q156 58 154 124 Z" fill={c} />
      <path d="M130 116 Q184 110 192 130 Q160 142 118 128 Z" fill={c} />
      <path d="M100 56 L100 124 M72 64 Q66 92 70 124 M128 64 Q134 92 130 124" fill="none" />
      <circle cx="100" cy="55" r="5" fill={c} />
      <circle cx="84" cy="98" r="10" fill="#fff" />
      <path d="M79 100 Q84 106 89 100" fill="none" strokeWidth="2" />
    </>
  ),

  // Gorro com barra dobrada e pompom
  beanie: (c) => (
    <>
      <circle cx="100" cy="42" r="14" fill={c} />
      <path d="M52 128 Q50 54 100 52 Q150 54 148 128 Z" fill={c} />
      <path d="M44 118 L156 118 L156 152 Q100 160 44 152 Z" fill={c} />
      <g fill="none" strokeWidth="2">
        <path d="M60 120 L60 152 M76 120 L76 154 M92 120 L92 155 M108 120 L108 155 M124 120 L124 154 M140 120 L140 152" />
      </g>
    </>
  ),

  // Bucket hat
  bucket: (c) => (
    <>
      <path d="M64 122 L72 64 Q100 52 128 64 L136 122 Z" fill={c} />
      <path d="M32 126 Q100 104 168 126 Q176 144 152 146 Q100 134 48 146 Q24 144 32 126 Z" fill={c} />
      <path d="M68 104 Q100 96 132 104" fill="none" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M44 136 Q100 122 156 136" fill="none" strokeWidth="2" strokeDasharray="4 4" />
    </>
  ),

  // Pochete com alça e zíper
  pochete: (c) => (
    <>
      <path d="M8 98 L42 92 M158 92 L192 98" fill="none" strokeWidth="6" />
      <path d="M40 102 Q40 74 72 72 L128 72 Q160 74 160 102 Q160 136 128 138 L72 138 Q40 136 40 102 Z" fill={c} />
      <path d="M52 94 Q100 82 148 94" fill="none" />
      <path d="M140 90 L146 106" fill="none" strokeWidth="3" />
      <text x="100" y="124" textAnchor="middle" className="art-print art-print--sm">MM</text>
    </>
  ),

  // Mochila com alça superior e bolso frontal
  backpack: (c) => (
    <>
      <path d="M86 42 Q86 22 100 22 Q114 22 114 42" fill="none" strokeWidth="5" />
      <path d="M54 62 Q54 40 78 40 L122 40 Q146 40 146 62 L146 168 Q146 180 134 180 L66 180 Q54 180 54 168 Z" fill={c} />
      <path d="M68 116 L132 116 Q138 116 138 122 L138 162 Q138 168 132 168 L68 168 Q62 168 62 162 L62 122 Q62 116 68 116 Z" fill={c} />
      <path d="M68 132 L132 132" fill="none" strokeWidth="2" />
      <path d="M64 70 Q100 58 136 70" fill="none" strokeWidth="2" />
    </>
  ),

  // Óculos de sol: armação colorida e lentes escuras
  sunglasses: (c) => (
    <>
      <path d="M36 84 L20 74 M164 84 L180 74" fill="none" strokeWidth="5" />
      <path d="M34 80 L92 80 L88 118 Q86 130 72 130 L54 130 Q40 130 38 118 Z" fill={INK} />
      <path d="M108 80 L166 80 L162 118 Q160 130 146 130 L128 130 Q114 130 112 118 Z" fill={INK} />
      <path d="M28 76 L172 76 L172 90 L28 90 Z" fill={c} />
      <path d="M92 90 Q100 82 108 90" fill="none" />
      <path d="M50 100 L62 112 M124 100 L136 112" fill="none" stroke="#fff" strokeWidth="3" />
    </>
  ),

  // Carteira com cartão aparecendo
  wallet: (c) => (
    <>
      <path d="M62 44 L130 44 L130 70 L62 70 Z" fill="#fff" />
      <path d="M40 62 Q40 56 46 56 L154 56 Q160 56 160 62 L160 148 Q160 154 154 154 L46 154 Q40 154 40 148 Z" fill={c} />
      <path d="M50 66 L150 66 L150 144 L50 144 Z" fill="none" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M40 100 L160 100" fill="none" strokeWidth="2" />
      <text x="100" y="132" textAnchor="middle" className="art-print art-print--sm">MM</text>
    </>
  ),
}

// Props:
// - type: qual desenho usar (ver "shapes")
// - color: cor principal da peça
// - bg: cor de fundo do quadro (opcional)
// - label: texto alternativo para leitores de tela (opcional)
// - image: caminho da foto real (ex.: '/produtos/foto.jpg'); se existir, substitui o desenho
function ProductArt({ type = 'tee', color = '#c8b3f0', bg, className = '', label, image }) {
  // Se o tipo não existir, desenha uma camiseta
  const draw = shapes[type] ?? shapes.tee

  return (
    <div className={`product-art ${className}`} style={bg ? { background: bg } : undefined}>
      {image ? (
        <img src={image} alt={label ?? ''} className="product-art__img" loading="lazy" />
      ) : (
      <svg
        viewBox="0 0 200 200"
        className="product-art__svg"
        // Com label: imagem acessível. Sem label: decorativa (ignorada por leitores de tela)
        {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
      >
        {/* Grupo com o contorno padrão aplicado a todas as partes */}
        <g stroke={INK} strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round">
          {draw(color)}
        </g>
      </svg>
      )}
    </div>
  )
}

export default ProductArt
