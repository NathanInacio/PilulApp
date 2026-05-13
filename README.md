# PilulApp 💊

## Sobre o Projeto
O PilulApp é um aplicativo mobile desenvolvido com React Native para auxiliar famílias no controle de medicação de idosos. 
A família pode cadastrar os idosos, seus medicamentos, dosagens e horários, garantindo que nenhuma dose seja esquecida.

## Problema Social
Famílias que cuidam de idosos frequentemente enfrentam dificuldades para manter as informações sobre medicamentos organizadas e atualizadas. 
Dosagens, horários e mudanças de receituário acabam se perdendo em conversas de WhatsApp, blocos de notas ou mensagens em diferentes aplicativos.

O PilulApp centraliza todas essas informações em um único lugar na nuvem, permitindo que qualquer familiar ou cuidador consulte e atualize os medicamentos do idoso em tempo real — garantindo que todos tenham sempre a informação mais recente, sem ruídos de comunicação.

## Integrantes
- Nathan Inacio de Abreu dos Santos

## Tecnologias Utilizadas
- React Native com Expo
- Firebase Authentication
- Firebase Firestore
- React Navigation (Stack)

## Como Rodar o Projeto
1. Clone o repositório
2. Instale as dependências: `npm install`
3. Instale as dependências adicionais:
```bash
npx expo install react-native-screens react-native-safe-area-context react-dom react-native-web @expo/metro-runtime
npm install @react-navigation/native @react-navigation/native-stack firebase
```
4. Inicie o projeto: `npm start`
5. Escaneie o QR Code com o Expo Go no celular, pressione `W` no teclado para abrir no navegador, ou acesse `localhost:8081` diretamente na barra de endereço do navegador

## Funcionalidades
- Cadastro e login de usuários
- Recuperação de senha por email
- Cadastro de idosos
- Cadastro de medicamentos por idoso
- Editar e deletar idosos e medicamentos