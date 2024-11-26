# POC 6 - React em Prática

![image](https://github.com/user-attachments/assets/710da190-5544-46b5-baf5-b7191259d923)


## 📝 Introdução

Este projeto implementa uma interface de seleção de assentos para um cinema, desenvolvida em React. O sistema permite que usuários visualizem a disposição dos assentos, selecionem lugares disponíveis e realizem a compra dos ingressos, com suporte a temas claro e escuro, além de layouts responsivos para mobile e desktop.

## 🚀 Tecnologias Utilizadas

- Next.js 14
- React
- HTML5
- Flexbox
- Media Queries para responsividade
- JSON para dados dinâmicos
- Temas Light/Dark

## 🛠️ Pré-requisitos

- Node.js instalado
- Conhecimento básico de React e Next.js
- Editor de código (VS Code recomendado)

## 🏃‍♂️ Passo a Passo

### 1. Configuração Inicial

1. Crie um novo projeto Next.js:
```bash
npx create-next-app@latest projeto-cinema
cd projeto-cinema
```

### 2. Estrutura de Cores

Configure as cores do projeto conforme a tabela:

| Nome         | Light   | Dark    |
|-------------|---------|---------|
| background  | #F0F0F0 | #0B132B |
| foreground  | #0B132B | #F0F0F0 |
| primary     | #419D9B | #419D9B |
| secondary   | #3A506B | #3A506B |
| button-text | #F0F0F0 | #F0F0F0 |
| available   | #0B132B | #F0F0F0 |
| unavailable | #BABABA | #2E3D50 |

[Baseado nesta paleta de cores](https://coolors.co/palette/0b132b-1c2541-3a506b-5bc0be-ffffff)

### 3. Componentes Principais

1. Crie a estrutura de pastas:
```
src/
  components/
    SeatGrid.tsx
    SeatLegend.tsx
    MovieInfo.tsx
    Header.tsx
    BuyButton.tsx
  styles/
    themes.css
  app/
    globals.css
    page.tsx
```

2. Implemente o componentes

### 4. Funcionalidades

1. Implementação da seleção de assentos:
   - Permitir apenas seleção de assentos disponíveis
   - Atualizar o valor total baseado nos assentos selecionados
   - Mostrar status visual do assento (disponível/indisponível/selecionado)

2. Sistema de temas:
   - Implementar troca entre temas claro/escuro
   - Usar CSS variables para cores dinâmicas

3. Responsividade:
   - Implementar Media Queries para diferentes tamanhos de tela
   - Ajustar layout para visualização mobile/desktop

### 5. Integração de Dados

1. Crie um arquivo JSON para os dados do filme:
```json
{
  "titulo": "A Forja",
  "sinopse": "Um ano depois de ....",
  "dataLancamento": "26 de setembro de 2024 (Brasil)",
  "direcao": "Alex Kendrick",
  "horario": "16:40",
  "preco": 25.0,
  "assentos": [
    {
      "numero": 1,
      "disponivel": true
    }
  ]
}
```

## 📱 Responsividade

Implemente Media Queries para os seguintes breakpoints:
- Mobile: até 768px
- Tablet e Desktop: acima de 768px

## ✅ Checklist de Implementação

- [x] Configuração inicial do projeto
- [x] Implementação do grid de assentos
- [x] Sistema de temas (Light/Dark)
- [x] Responsividade
- [x] Lógica de seleção de assentos
- [x] Cálculo de valor total
- [x] Alert de confirmação de compra
- [x] Documentação

## 🧪 Testes

Certifique-se de testar:
1. Seleção de assentos
2. Troca de temas
3. Responsividade em diferentes dispositivos
4. Cálculo correto do valor total
5. Mensagem de confirmação de compra

## 📚 Recursos Adicionais

- [Documentação Next.js](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
