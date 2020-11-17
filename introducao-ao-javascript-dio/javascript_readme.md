
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





###### operadores<br>
- `aritm�ticos` <br>
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
    
- `atribuicao` <br>
    `var a = 5 + 3 = 8` <br>
    `var b = a % 5 = 3` <br>
    `var c = 5 * b ** 2 = 45` <br>
    `var d = 10 - a /2 = 6` <br>
    `var e = 6 * 2 / d = 2` <br>
    `var f = b % e + 4 / e = 3` <br>
    
    - auto-atribuicao<br>
        ````javascript
          var n = 3;
          n = n + 4; // n += 4;
          n = n * 4; // n*= 4; // n += 4; 
          n = n / 2;  // n /= 2;
          n = n  ** 2;  // n **= 2;
          n = n  % 5;  // n %= 5;

        ````
        
    - incremento<br>
        ````javascript
          var n = 5;
          n = n + 1; // n++     ++n;
          n = n - 1; // n--     --n;

        ````  
    
    
- `relacionais` <br>
    `>`    `5 > 3`   true  - maior que <br>
    `<`    `5 < 3`   false - menor que <br>
    `>=`   `5 >= 3`  true  - maior igual a <br>
    `<=`   `5 <= 3`  false - menor igual a  <br>
    `==`    `5 == 3` false  - igual <br>
    `!=`    `5 != 3` true  - diferente <br>
    
- `logicos` <br>
    `!`    ` !false` true  - NOT negacao<br>
    `&&`    `true && true`  - AND conjuncao<br>
    `||`    `false || true` - OU disjuncao<br>
    
    - ordem precedencia<br>
        `!`<br>
        `&&`<br>
        `||`<br>
    
- `tern�rio`
    ` condicao ? true : false ` - usado para simplificar o if
    
    
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
var b ="outra string"; var a = "uma string " + b;  //  concatena��o
var b ="outra string"; var a = `uma string ${b}`;  //  concatena��o com template string
````

###### document
- `document.body.style.background = 'black';`
- `document.querySelector('img#hplogo').style.filter = 'grayscale(100%)';`
- `document.querySelector('img#hplogo').style.visibility = 'hidden';`
- `document.querySelector('span.bstn-hl-title').innerText = 'Curso em video de javascript � o melhor do youtube';`

###### eventos
- `mouseenter` - 


###### condicoes
    - `if(condicao) { }`
    - `if(condicao) { } else { }`
    - `if(condicao) { } else if { } else { }`
    
###### array
 - `var lista =[1,8,3,4]; lista.sort() `
 - `var lista =[1,8,3,4]; lista.length `
 
 ###### emoji
https://emojipedia.org/grinning-face/

Codepoints U+1F600<br>
`&#x1F600;` - padrao codigo para exibir emoji no html


