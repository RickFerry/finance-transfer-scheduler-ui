### Novo README em Português

Agora que todos os requisitos foram cobertos, aqui está o novo README para a aplicação Angular:

```markdown
# Agendador de Transferências Financeiras (Frontend)

Esta é a aplicação frontend Angular para o Agendador de Transferências Financeiras, permitindo que os usuários agendem transferências financeiras e visualizem uma lista de todas as transferências agendadas.

## Tecnologias Utilizadas

- **Angular** 16.x
- **Angular Material** 16.x
- **Angular Flex-Layout** 16.x

## Estrutura do Projeto

```plaintext
src/
├── app/
│   ├── core/
│   │   ├── models/
│   │   │   └── transfer.model.ts
│   │   ├── services/
│   │   │   └── transfer.service.ts
│   │   └── core.module.ts
│   ├── shared/
│   │   ├── components/
│   │   │   └── header/
│   │   │       ├── header.component.ts
│   │   │       ├── header.component.html
│   │   │       ├── header.component.scss
│   │   ├── material.module.ts
│   ├── transfer/
│   │   ├── transfer-list/
│   │   │   ├── transfer-list.component.ts
│   │   │   ├── transfer-list.component.html
│   │   │   ├── transfer-list.component.scss
│   │   ├── transfer-form/
│   │   │   ├── transfer-form.component.ts
│   │   │   ├── transfer-form.component.html
│   │   │   ├── transfer-form.component.scss
│   │   └── transfer.module.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app-routing.module.ts
│   └── app.module.ts
└── assets/
```

## Funcionalidades

- **Agendamento de Transferências:** Os usuários podem agendar transferências financeiras, especificando conta de origem, conta de destino, valor e data da transferência.
- **Cálculo de Taxas:** Após o agendamento, a aplicação exibe a taxa calculada para a transferência.
- **Listagem de Transferências:** Exibe uma lista com todas as transferências agendadas, incluindo detalhes como ID, conta de origem, conta de destino, valor, taxa, data da transferência e data de agendamento.

## Como Executar a Aplicação

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   ng serve
   ```

   A aplicação estará disponível em `http://localhost:4200/`.

## Testes

- Utilize as ferramentas de teste do Angular, como `Jasmine` e `Karma`, para criar testes unitários para seus componentes e serviços.
- Execute os testes com:

  ```bash
  ng test
  ```

## Diagrama UML

Inclua um diagrama UML aqui para mostrar a interação entre o frontend e o backend.

## Notas Adicionais

- Certifique-se de que a API backend esteja em execução em `http://localhost:8080/` para que o frontend possa se comunicar corretamente.
```
