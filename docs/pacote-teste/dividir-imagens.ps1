# Divide as imagens "*-dupla.jpg" (frente à esquerda, costas à direita) em duas fotos.
#   NOME-dupla.jpg  ->  NOME.jpg (frente)  +  NOME-costas.jpg (costas)
# Uso (na raiz do projeto):  powershell -File docs\dividir-imagens.ps1
# Opcional: informe outra pasta:  powershell -File docs\dividir-imagens.ps1 -Pasta "C:\caminho"
param([string]$Pasta = "public\produtos")

Add-Type -AssemblyName System.Drawing
$arquivos = Get-ChildItem -Path $Pasta -Filter "*-dupla.*" -File
if (-not $arquivos) { Write-Host "Nenhuma imagem *-dupla.* encontrada em $Pasta"; exit }

foreach ($arq in $arquivos) {
  $img = [System.Drawing.Image]::FromFile($arq.FullName)
  $meio = [int]($img.Width / 2)
  $base = $arq.BaseName -replace '-dupla$', ''
  $ext = $arq.Extension
  $formato = if ($ext -match 'png') { [System.Drawing.Imaging.ImageFormat]::Png } else { [System.Drawing.Imaging.ImageFormat]::Jpeg }

  foreach ($parte in @(@{ Nome = "$base$ext"; X = 0 }, @{ Nome = "$base-costas$ext"; X = $meio })) {
    $bmp = New-Object System.Drawing.Bitmap($meio, $img.Height)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $meio, $img.Height)), (New-Object System.Drawing.Rectangle($parte.X, 0, $meio, $img.Height)), [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $bmp.Save((Join-Path $arq.DirectoryName $parte.Nome), $formato)
    $bmp.Dispose()
    Write-Host "Criado: $($parte.Nome)"
  }
  $img.Dispose()
}
