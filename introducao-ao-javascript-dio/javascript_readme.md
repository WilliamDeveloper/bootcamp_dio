
###### comentarios
- `/**/`
- `//`

###### data types - tipos do javascript
- `number`
    - `infinity`
    - `NaN`
- `string`
- `boolean`
- `null`
- `undefined`
- `object`
    - `Array`
- `function`    

###### investigar tipos
- `typeof 6.5`
- `typeof 6`
- `typeof 'teste'`
- `typeof []`
- `typeof {}`
- `typeof function(){}`
- `typeof NaN`
- `typeof Infinity`
- `typeof null`
 
###### interacao com pagina , terminal ou console
- `var resp = window.prompt('digite algo: ')` - abre uma caixa de dialogo com "ok" e "cancel" 
- `window.alert('ola')` - mostra uma janela de alerta
- `console.log('teste')` - escreve no console
- `document.writeln('escrever')` - escreve na pagina dando um enter
- `document.write('escrever')` - escreve na pagina dando um enter

###### cast conversao
- `45.8.toString()` - converte para string
- `String(45.8)` - converte para string
- `Number.parseInt('45.5')` - converte para inteiro
- `Number('45')` - converte para inteiro
- `Number.parseFloat('45.5')` - converte para float
- `Number('45.5')` - converte para float

###### numero formatacao
- `45.84422.toFixed(2)` - formata para 2 casas decimais
- `45.84.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})` - formatar para real
- `45.84.toLocaleString('pt-BR',{style:'currency', currency:'USD'})` - formatar para dolar
- `45.84.toLocaleString('pt-BR',{style:'currency', currency:'EUR'})` - formatar para euro

###### strings functions
- `"".length` - conta quantos caracteres a string tem
- `"".toUpperCase()` - tudo para maiusculo
- `"".toLowerCase()` - tudo para minusculo
- `"15.50".replace('.',',')` - substituir ponto por virgula

###### strings concatenando
````javascript
var b ="outra string"; var a = "uma string " + b;  //  concatenação
var b ="outra string"; var a = `uma string ${b}`;  //  concatenação com template string
````

###### document
- `document.body.style.background = 'black';`
- `document.querySelector('img#hplogo').style.filter = 'grayscale(100%)';`
- `document.querySelector('img#hplogo').style.visibility = 'hidden';`
- `document.querySelector('span.bstn-hl-title').innerText = 'Curso em video de javascript é o melhor do youtube';`



###### operadores
- `aritméticos` <br>
    `+`    `5 +  2 = 7`   - adicao <br>
    `-`    `5 -  2 = 3`   - subtracao <br>
    `*`    `5 *  2 = 10`  - multiplicacao <br>
    `/`    `5 /  2 = 2.5` - divisao <br>
    `%`    `5 %  2 = 1`   - resto da divisao <br>
    `**`   `5 ** 2 = 25`  - potenciacao <br>
    - ordem de precedencia:<br>
        `( )` <br>
        `**` <br>
        `* / %` <br>
        `+ -` <br>
    
- `atribuicao` 
    `var a = 5 + 3` <br>
    `var b = a % 5` <br>
    `var c = 5 * b ** 2` <br>
    `var d = 10 - a /2` <br>
    `var e = 6 * 2 / 2` <br>
    `var f = b % e + 4 / e` <br>
    
    
    
- `relacionais` 
- `logicos` 
- `ternário`