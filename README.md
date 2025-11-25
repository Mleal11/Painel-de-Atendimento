# 🎯 Painel de Atendimento - Sistema de Gerenciamento

![Version](https://img.shields.io/badge/version-2.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Responsive](https://img.shields.io/badge/responsive-mobile--first-brightgreen.svg)

Sistema completo e responsivo para gerenciamento de filas de atendimento, com interface adaptada para desktop, tablet e dispositivos móveis.

---

## 📋 Características Principais

✅ **Interface Responsiva**
- Funciona perfeitamente em smartphone, tablet e desktop
- Suporte para modo landscape
- Testes em breakpoints: 480px, 768px, 1024px, 1920px

✅ **Funcionalidades Completas**
1. Central de Controle do Atendente
2. Sistema de Agendamento
3. Painel de Atendimento (Display público)
4. Monitor em Tempo Real
5. Sistema de Avaliação de Feedback
6. Gerador de Senhas (Normal e Prioritária)
7. Notificação Sonora
8. Temas Customizáveis
9. Modo de Alto Contraste
10. Aumento de Fonte para Acessibilidade

✅ **Tecnologias Modernas**
- HTML5 semântico
- CSS3 com media queries
- JavaScript vanilla (sem jQuery desnecessário)
- Bootstrap 5.3.3
- Font Awesome 6.0
- Web Speech API para notificações sonoras
- LocalStorage para sincronização entre abas

---

## 📁 Estrutura do Projeto

```
Painel-de-Atendimento/
├── index.html                          # 🆕 Página central (homepage)
├── Atendente.html                      # Central do atendente
├── Agendamento.html                    # Sistema de agendamento
├── Atendimento4.html                   # Painel público de exibição
├── Painelmonitor.html                  # Monitor em tempo real
├── Feedback.html                       # Avaliação de atendimento
├── script.js                           # Scripts compartilhados
├── argv.json                           # Configurações
├── README.md                           # 🆕 Este arquivo
└── RESPONSIVIDADE_ATUALIZACOES.md      # 🆕 Changelog detalhado
```

---

## 🚀 Como Usar

### 1. Acessar a Aplicação

```bash
# Abrir no navegador (servidor local ou production)
http://localhost:8000/index.html

# Ou acesse diretamente qualquer página:
http://localhost:8000/Atendente.html
http://localhost:8000/Painelmonitor.html
```

### 2. Fluxo de Trabalho Recomendado

#### Para Atendentes:
1. Abrir **Atendente.html** em aba dedicada
2. Selecionar guichê (G-01, G-02, etc)
3. Gerar senhas Normal (N) ou Prioritária (P)
4. Clicar "Chamar Próxima Senha" para atender

#### Para Público:
1. Abrir **Painelmonitor.html** em monitor/TV
2. Página exibe automatically:
   - Senha em atendimento (grande)
   - Guichê correspondente
   - Últimas 8 chamadas
   - Tempo estimado de espera

#### Para Avaliação:
1. Após atendimento, acessar **Feedback.html**
2. Selecionar nota (Excelente/Neutro/Ruim)
3. Formulário reseta automaticamente em 5s

---

## 📱 Responsividade

### Breakpoints Implementados

| Dispositivo | Largura | Comportamento |
|-------------|---------|---------------|
| **Mobile Pequeno** | < 480px | Layout stack vertical, fontes reduzidas |
| **Mobile Grande** | 480-768px | 2 colunas em alguns cards |
| **Tablet** | 768-1024px | 3 colunas, ajustes de espaço |
| **Desktop** | > 1024px | Layout completo otimizado |
| **Landscape** | < 600px altura | Compactado, sem informações secundárias |

### Testes Recomendados

```
✅ iPhone 12 (390x844px)
✅ iPhone SE (375x667px)
✅ Samsung Galaxy S21 (360x800px)
✅ iPad (768x1024px)
✅ iPad Pro (1024x1366px)
✅ Desktop 1920x1080
✅ Zoom 125% / 150%
✅ Landscape Mode
✅ Alto Contraste
✅ Fonte Grande (A+)
```

---

## 🎨 Temas e Customização

### Tema Dinâmico

Selecione no **Atendente.html**:
- **Azul** (padrão) - `#0d6efd`
- **Verde** - `#008000`
- **Roxo** - `#6f42c1`

O tema é salvo em `localStorage` e aplicado automaticamente no **Painelmonitor.html**.

### Acessibilidade

Clique nos botões no topo de **Painelmonitor.html**:
- **Alto Contraste**: Fundo preto + textos brancos/coloridos
- **A+**: Aumenta tamanho de todas as fontes em 25%

---

## 💾 Sincronização de Dados

### LocalStorage Keys

```javascript
// Dados primários
localStorage.setItem('currentTicket', 'P-01');      // Senha atual
localStorage.setItem('currentWindow', 'G-01');      // Guichê
localStorage.setItem('ticketQueue', '[...]');       // Fila JSON
localStorage.setItem('estimatedWaitTime', '5 min'); // Tempo espera

// Histórico
localStorage.setItem('previousCalls', '[...]');     // Últimas 8 chamadas

// Preferências
localStorage.setItem('painelTema', 'azul');         // Tema selecionado
localStorage.setItem('acessibilidade_contraste', true);
localStorage.setItem('acessibilidade_fonte', true);
```

### Sincronização Entre Abas

- **Atendente.html** escreve dados
- **Painelmonitor.html** lê dados a cada 500ms
- Usa `storage` event para atualizações em tempo real

---

## 🔊 Notificação Sonora

### Web Speech API

Quando uma senha é chamada:

```javascript
function falarSenha(senha, guiche) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.lang = 'pt-BR';
    utterance.text = `Senha ${senha}, dirija-se ao guichê ${guiche}`;
    window.speechSynthesis.speak(utterance);
}
```

**⚠️ Nota**: Requer permissão do navegador em alguns casos.

---

## 🛠️ Requisitos Técnicos

### Browser Support

```
✅ Chrome/Edge    78+
✅ Firefox        75+
✅ Safari         13+
✅ Opera          65+
⚠️ IE 11          (Sem suporte completo)
```

### Dependências CDN

```html
<!-- Bootstrap 5.3.3 -->
https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css

<!-- Font Awesome 6.0 -->
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css

<!-- jQuery 3.6 (para Owl Carousel) -->
https://code.jquery.com/jquery-3.6.0.min.js

<!-- Owl Carousel 2.3.4 -->
https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js
```

**Nenhuma instalação local necessária** - todos os recursos são carregados via CDN.

---

## ⚙️ Configuração de Servidor

### Para Desenvolvimento

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# VSCode
Instale a extensão "Live Server" e clique "Go Live"
```

### Para Produção

```bash
# Nginx
server {
    listen 80;
    server_name seu-dominio.com;
    root /caminho/para/Painel-de-Atendimento;
    index index.html;
}

# Apache
<Directory /caminho/para/Painel-de-Atendimento>
    DirectoryIndex index.html
    AllowOverride All
</Directory>
```

---

## 🐛 Troubleshooting

### Problema: Notificação Sonora não funciona

**Solução:**
- ✅ Verificar se o navegador tem permissão de áudio
- ✅ Testar em https:// (alguns navegadores exigem)
- ✅ Verificar console.log() para erros

### Problema: Dados não sincronizam

**Solução:**
- ✅ Verificar se localStorage está habilitado
- ✅ Abrir ambas as abas no mesmo domínio
- ✅ Verificar console para erros JavaScript

### Problema: Layout quebrado em mobile

**Solução:**
- ✅ Verificar meta viewport: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- ✅ Usar ferramenta de responsive design do navegador (F12)
- ✅ Testar zoom = 100% (sem zoom do navegador)

### Problema: Vídeos não carregam

**Solução:**
- ✅ Arquivos esperados: `video1.mp4`, `video2.mp4`, `video3.mp4`
- ✅ Colocar vídeos na mesma pasta que os HTMLs
- ✅ Verificar permissões de arquivo

---

## 📊 Performance

### Otimizações Implementadas

✅ **CSS**
- Media queries para reduzir rendering
- Box-sizing padronizado
- Animações com GPU acceleration (transform, opacity)

✅ **JavaScript**
- Polling reduzido a 500ms (não maior)
- Event listeners agregados
- Sem jQuery em Painelmonitor.html (vanilla JS)

✅ **HTML**
- Semântica correta (header, footer, main)
- Meta viewport aplicado
- Srcset otimizado para imagens

### Lighthouse Scores (Target)

```
Performance:  > 85
Accessibility: > 90
Best Practices: > 85
SEO: > 90
```

---

## 🔒 Segurança

### Considerações

⚠️ **Não é adequado para dados sensíveis** (banco de dados, senhas)

✅ **Boas práticas implementadas:**
- Sem injeção SQL (sem banco de dados)
- Sem XSS (dados apenas em localStorage)
- HTTPS recomendado em produção
- Sem armazenamento de PII

### Para Produção

1. Implementar backend seguro (Node.js, Python, etc)
2. Usar banco de dados (PostgreSQL, MongoDB)
3. Autenticação JWT ou OAuth
4. Rate limiting
5. CORS configurado

---

## 📝 Changelog

### v2.0 (Atual - 24/11/2025)

✨ **Principais mudanças:**
- ✅ Adicionada responsividade completa para mobile
- ✅ Removido `<marquee>` deprecated, substituído por CSS animation
- ✅ Meta viewport adicionado em Atendimento4.html
- ✅ Criar index.html como página inicial
- ✅ Media queries para 768px, 480px, landscape
- ✅ Ajuste dinâmico de fontes baseado em resolução

### v1.0 (Original)
- Layout base com Bootstrap
- Funcionalidades principais implementadas
- Sem responsividade completa

---

## 🤝 Contribuindo

Para reportar bugs ou sugerir melhorias:

1. Abra uma issue no GitHub
2. Descreva o comportamento esperado vs real
3. Inclua screenshots/vídeos se possível
4. Mencione browser e device

---

## 📄 Licença

MIT License - Veja LICENSE.md para detalhes

---

## 👨‍💻 Desenvolvedor

**Painel de Atendimento** - Sistema de Gerenciamento  
Desenvolvido com ❤️ em 2025

---

## 📞 Suporte

Para problemas técnicos:
1. Consulte `RESPONSIVIDADE_ATUALIZACOES.md`
2. Verifique console.log() do navegador (F12)
3. Teste em outro navegador/dispositivo
4. Limpe cache (Ctrl+Shift+Del)

---

**Última atualização:** 24 de novembro de 2025  
**Status:** ✅ Pronto para produção
